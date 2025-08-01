const brilliantBlues = {
    primary: '#0d47a1', secondary: '#1976d2', tertiary: '#2196f3',
    light: '#64b5f6', lighter: '#90caf9', lightest: '#bbdefb', background: '#e3f2fd'
};

let serviceCostChart;

function wrapLabel(str, maxWidth) {
    if (str.length <= maxWidth) return str;
    const words = str.split(' ');
    let lines = [];
    let currentLine = '';
    for (const word of words) {
        if ((currentLine + ' ' + word).trim().length > maxWidth && currentLine.length > 0) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = (currentLine + ' ' + word).trim();
        }
    }
    if (currentLine.length > 0) lines.push(currentLine);
    return lines;
}

const tooltipTitleCallback = (tooltipItems) => {
    const item = tooltipItems[0];
    let label = item.chart.data.labels[item.dataIndex];
    return Array.isArray(label) ? label.join(' ') : label;
};

const defaultChartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
        legend: { position: 'bottom', labels: { color: brilliantBlues.primary, font: { weight: '600' } } },
        tooltip: { callbacks: { title: tooltipTitleCallback } }
    }
};

function showModal(content) {
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('messageModal').classList.remove('hidden');
}

function hideModal() {
    document.getElementById('messageModal').classList.add('hidden');
}

function showError(message) {
    showModal(`<div class="text-red-600"><p class="text-2xl font-bold mb-2">Error</p><p>${message}</p><button onclick="hideModal()" class="gemini-button mt-4">Close</button></div>`);
}

function showLoading(message = 'Generating with Gemini...') {
    showModal(`<div class="loader mx-auto mb-4"></div><p class="text-lg font-semibold text-gray-700">${message}</p>`);
}

async function callGemini(payload) {
    const apiKey = ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error ? error.error.message : 'API request failed');
        }
        const result = await response.json();
        if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
            return result.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Invalid response structure from Gemini API.');
        }
    } catch (error) {
        console.error('Gemini API Error:', error);
        showError(error.message);
        return null;
    }
}

function addMessageToChat(message, isUser = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Secure API key storage in memory only
let n8nApiKey = null;

async function callN8NWebhook(message) {
    try {
        // Prepare headers
        const headers = {
            'Content-Type': 'application/json'
        };
        
        // Add API key if available
        if (n8nApiKey && n8nApiKey.trim() !== '') {
            headers['x-api-key'] = n8nApiKey;
        }
        
        console.log('Sending request to n8n webhook...', { message });
        
        const response = await fetch('https://n8n.hcai42.com/webhook/HCAIstructureAGN', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ message: message })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Get the raw response text first
        const rawResponse = await response.text();
        console.log('Raw response from n8n:', rawResponse);
        
        // Try to parse as JSON
        try {
            const jsonResult = JSON.parse(rawResponse);
            console.log('Parsed JSON response:', jsonResult);
            
            // Extract message from JSON response
            if (jsonResult && jsonResult.message) {
                console.log('Extracted message:', jsonResult.message);
                return jsonResult.message;
            } else if (typeof jsonResult === 'string') {
                // If the JSON result is just a string
                return jsonResult;
            } else {
                // Fallback for non-standard JSON responses
                console.warn('Unexpected JSON structure, returning stringified:', jsonResult);
                return JSON.stringify(jsonResult);
            }
        } catch (jsonError) {
            // If JSON parsing fails, return the raw response
            console.warn('Failed to parse JSON, returning raw response:', jsonError);
            return rawResponse;
        }
        
    } catch (error) {
        console.error('N8N Webhook Error:', error);
        throw error;
    }
}

document.getElementById('generateScenarioBtn').addEventListener('click', async () => {
    const painPoint = document.getElementById('painPointInput').value.trim();
    if (!painPoint) {
        showError('Please enter a message.');
        return;
    }

    addMessageToChat(painPoint, true);
    document.getElementById('painPointInput').value = '';
    
    const button = document.getElementById('generateScenarioBtn');
    button.disabled = true;
    button.textContent = 'Sending...';

    try {
        const response = await callN8NWebhook(painPoint);
        addMessageToChat(response, false);
    } catch (error) {
        addMessageToChat('Sorry, I encountered an error processing your request. Please try again.', false);
        showError('Failed to communicate with the service. Please try again.');
    }

    button.disabled = false;
    button.textContent = 'Send';
});

document.getElementById('painPointInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('generateScenarioBtn').click();
    }
});

document.getElementById('estimateCostBtn').addEventListener('click', async () => {
    const serviceName = document.getElementById('serviceNameInput').value.trim();
    if (!serviceName) {
        showError('Please enter a service name.');
        return;
    }

    showLoading('Estimating Service Costs...');
    const prompt = `For a hypothetical microservice named "${serviceName}", generate a plausible cost breakdown. Provide five common cost components and their estimated percentage of the total cost. The percentages must add up to 100.`;
    
    const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    "costBreakdown": {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                "component": { "type": "STRING" },
                                "percentage": { "type": "NUMBER" }
                            },
                            required: ["component", "percentage"]
                        }
                    }
                },
                required: ["costBreakdown"]
            }
        }
    };
    const responseText = await callGemini(payload);

    if (responseText) {
        try {
            const result = JSON.parse(responseText);
            const newLabels = result.costBreakdown.map(item => item.component);
            const newData = result.costBreakdown.map(item => item.percentage);
            
            serviceCostChart.data.labels = [serviceName];
            serviceCostChart.data.datasets = result.costBreakdown.map((item, index) => ({
                label: item.component,
                data: [item.percentage],
                backgroundColor: Object.values(brilliantBlues)[index % 6]
            }));
            serviceCostChart.update();
        } catch (e) {
            showError('Failed to parse the cost estimation. Please try again.');
        }
    }
    hideModal();
});

function initializeCharts() {
    new Chart(document.getElementById('valueIntegrityChart'), {
        type: 'bar',
        data: {
            labels: ['System Availability', 'Cost Reduction', 'Compliance Score'],
            datasets: [
                { label: 'Promised Value (CorIM)', data: [99.95, 30, 100], backgroundColor: brilliantBlues.secondary },
                { label: 'Delivered Value (Telemetry)', data: [99.97, 32.5, 100], backgroundColor: brilliantBlues.light }
            ]
        },
        options: { ...defaultChartOptions, scales: { y: { beginAtZero: true, ticks: { callback: v => v + '%', color: brilliantBlues.primary }, grid: { color: '#e0e0e0' } }, x: { ticks: { color: brilliantBlues.primary }, grid: { display: false } } } }
    });
    
    serviceCostChart = new Chart(document.getElementById('serviceCostChart'), {
        type: 'bar',
        data: {
            labels: ['Competency Mgmt Service'],
            datasets: [
                { label: 'Developer Maintenance', data: [45], backgroundColor: brilliantBlues.primary },
                { label: 'Data Streaming (Kafka)', data: [20], backgroundColor: brilliantBlues.secondary },
                { label: 'Compute & VM Costs', data: [15], backgroundColor: brilliantBlues.tertiary },
                { label: 'Data Storage (LRS)', data: [10], backgroundColor: brilliantBlues.light },
                { label: 'Software Licensing', data: [5], backgroundColor: brilliantBlues.lighter }
            ]
        },
        options: { ...defaultChartOptions, indexAxis: 'y', scales: { x: { stacked: true, ticks: { callback: v => v + '%', color: brilliantBlues.primary }, grid: { color: '#e0e0e0' } }, y: { stacked: true, ticks: { color: brilliantBlues.primary }, grid: { display: false } } } }
    });
}

// API Configuration event listeners
document.getElementById('toggleApiConfig').addEventListener('click', () => {
    const configSection = document.getElementById('apiConfigSection');
    const toggleBtn = document.getElementById('toggleApiConfig');
    
    if (configSection.classList.contains('hidden')) {
        configSection.classList.remove('hidden');
        toggleBtn.textContent = 'Hide';
    } else {
        configSection.classList.add('hidden');
        toggleBtn.textContent = 'Configure';
    }
});

document.getElementById('saveApiConfig').addEventListener('click', () => {
    const apiKeyInput = document.getElementById('n8nApiKey');
    const apiKey = apiKeyInput.value.trim();
    
    if (apiKey) {
        n8nApiKey = apiKey;
        showModal(`<div class="text-green-600"><p class="text-xl font-bold mb-2">✓ Saved</p><p>API key configured for this session.</p><button onclick="hideModal()" class="gemini-button mt-4">Close</button></div>`);
    } else {
        showError('Please enter a valid API key.');
    }
});

document.getElementById('clearApiConfig').addEventListener('click', () => {
    n8nApiKey = null;
    document.getElementById('n8nApiKey').value = '';
    showModal(`<div class="text-orange-600"><p class="text-xl font-bold mb-2">🗑️ Cleared</p><p>API key removed from memory.</p><button onclick="hideModal()" class="gemini-button mt-4">Close</button></div>`);
});

window.onload = initializeCharts;