// hcai42 i18n - browser language detection + toggle
(function() {
  var t = {
    // Nav
    'nav.leitbild': { en: 'Mission', de: 'Leitbild' },
    'nav.werte': { en: 'Values', de: 'Werte' },
    'nav.marken': { en: 'Brands', de: 'Marken' },
    'nav.kontakt': { en: 'Contact', de: 'Kontakt' },

    // Hero
    'hero.badge': {
      en: 'AI-Powered Business · Data-Driven Trust · Scaled to Win',
      de: 'KI-gestütztes Business · Datengetriebenes Vertrauen · Skaliert zum Erfolg'
    },
    'hero.title': { en: 'We build AI you actually own.', de: 'Wir bauen KI, die dir wirklich gehört.' },
    'hero.sub': {
      en: 'hcai42 is the company behind 3cors. We build AI software that organisations own, understand, and control. Full sovereignty, zero lock-in.',
      de: 'hcai42 ist das Unternehmen hinter 3cors. Wir bauen KI-Software, die Unternehmen besitzen, verstehen und kontrollieren. Volle Souveränität, kein Lock-in.'
    },
    'hero.cta1': { en: 'Read our Mission', de: 'Leitbild lesen' },
    'hero.cta2': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },

    // Mission / Leitbild
    'leitbild.title': { en: 'Our Mission', de: 'Unser Leitbild' },
    'leitbild.lead': {
      en: '<strong>You Own It.</strong> We build AI software that belongs to the people who use it. Not to us, not to a cloud provider, not to a model.',
      de: '<strong>Du bestimmst.</strong> Wir bauen KI-Software, die den Menschen gehört, die sie nutzen. Nicht uns, keinem Cloud-Anbieter, keinem Modell.'
    },
    'leitbild.mandate': { en: 'Our Mandate', de: 'Unser Auftrag' },
    'leitbild.mandate.desc': {
      en: 'We give organisations back control over their AI. Software they can own, understand, and leave at any time. Data sovereignty is the foundation, not an add-on.',
      de: 'Wir geben Unternehmen die Kontrolle über ihre KI zurück. Software, die sie besitzen, verstehen und jederzeit verlassen können. Datensouveränität ist das Fundament, kein Zusatz.'
    },
    'leitbild.vision': { en: 'Our Vision', de: 'Unsere Vision' },
    'leitbild.vision.desc': {
      en: 'A future where organisations use AI without making themselves dependent. We are the proof that powerful AI and full sovereignty are not a contradiction.',
      de: 'Eine Zukunft, in der Unternehmen KI nutzen, ohne sich abhängig zu machen. Wir sind der Beweis, dass leistungsfähige KI und volle Souveränität kein Widerspruch sind.'
    },
    'leitbild.measure': {
      en: '<strong>Our measure:</strong> has the organisation that uses our software gained more control, more clarity, and more time for what matters? If yes, we have done our job well.',
      de: '<strong>Unser Maßstab:</strong> Hat das Unternehmen, das unsere Software nutzt, mehr Kontrolle, mehr Klarheit und mehr Zeit für das Wesentliche gewonnen? Wenn ja, haben wir unsere Arbeit gut gemacht.'
    },

    // Values
    'werte.title': { en: 'Values', de: 'Werte' },
    'werte.1': { en: 'Ownership over Dependence', de: 'Eigentum vor Abhängigkeit' },
    'werte.1.desc': {
      en: 'No lock-in. Full export, real deletion, deployable on your own hardware. Whoever can get in must be able to get out again.',
      de: 'Kein Lock-in. Voller Export, echtes Löschen, deploybar auf eigener Hardware. Wer rein kann, muss auch wieder raus können.'
    },
    'werte.2': { en: 'Honesty over Hype', de: 'Ehrlichkeit statt Hype' },
    'werte.2.desc': {
      en: 'We promise what we deliver and deliver what we promise. No buzzwords, transparent costs, verifiable claims.',
      de: 'Wir versprechen, was wir liefern, und liefern, was wir versprechen. Keine Buzzwords, transparente Kosten, prüfbare Aussagen.'
    },
    'werte.3': { en: 'Determinism carries, AI shapes', de: 'Determinismus trägt, KI gestaltet' },
    'werte.3.desc': {
      en: 'A schema-validated foundation sets the rules. AI works as a tenant within them. Trust comes from traceability, not magic.',
      de: 'Ein schema-validiertes Fundament gibt die Regeln vor. KI arbeitet als Tenant darin. Vertrauen entsteht aus Nachvollziehbarkeit, nicht aus Magie.'
    },
    'werte.4': { en: 'Data Protection is Respect', de: 'Datenschutz ist Respekt' },
    'werte.4.desc': {
      en: 'GDPR, data locality and audit trails as an attitude, not a chore. Respect for the people behind the data.',
      de: 'DSGVO, Datenlokalität und Audit-Trails als Haltung, nicht als Pflichtübung. Respekt vor den Menschen hinter den Daten.'
    },

    // Brands
    'marken.title': { en: 'Our Brands', de: 'Unsere Marken' },
    'marken.sub': {
      en: 'AI you own, understand, and control: resilient, traceable, sovereign. hcai and 3cors are registered trademarks of hcai42, backed by a real company you can rely on for the long term.',
      de: 'KI, die Sie besitzen, verstehen und kontrollieren: resilient, nachvollziehbar, souverän. hcai und 3cors sind eingetragene Marken von hcai42, getragen von einem realen Unternehmen, auf das Sie langfristig bauen können.'
    },
    'marken.hcai.desc': {
      en: 'Our AI framework: a structured method for bringing AI into business safely, with governance and human oversight at its core.',
      de: 'Unser KI-Framework: eine strukturierte Methode, um KI sicher ins Unternehmen zu bringen, mit Governance und menschlicher Kontrolle im Zentrum.'
    },
    'marken.hcai.link': { en: 'Explore the Framework →', de: 'Framework entdecken →' },
    'marken.3cors.desc': {
      en: 'Our AI platform built on open source. Resilience and traceability through three cores: Intelligence, Memory, Billing. Self-hosted, GDPR-ready, zero lock-in.',
      de: 'Unsere KI-Plattform auf Open-Source-Basis. Resilienz und Nachvollziehbarkeit durch drei Kerne: Intelligence, Memory, Billing. Self-Hosted, DSGVO-konform, kein Lock-in.'
    },
    'marken.3cors.link': { en: 'Visit the Platform →', de: 'Zur Plattform →' },

    // Contact
    'kontakt.title': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },
    'kontakt.sub': {
      en: 'Interested in working with hcai42? Let us talk.',
      de: 'Interesse an einer Zusammenarbeit mit hcai42? Sprechen wir.'
    },

    // Footer
    'footer.framework': { en: 'Framework', de: 'Framework' },
    'footer.impressum': { en: 'Imprint', de: 'Impressum' },
    'footer.policy': { en: 'Privacy Policy', de: 'Datenschutz' },
    'footer.copy': { en: '© 2026 HCAI42. All rights reserved.', de: '© 2026 HCAI42. Alle Rechte vorbehalten.' },
    'footer.home': { en: 'Home', de: 'Startseite' },

    // Framework page
    'fw.title': { en: 'The hcai Framework', de: 'Das hcai Framework' },
    'fw.sub': {
      en: 'A unified architecture for verifiable value delivery and fine-grained cost control.',
      de: 'Eine einheitliche Architektur für nachweisbare Wertlieferung und feingranulare Kostenkontrolle.'
    },

    'fw.pillars.title': { en: 'Five Integrated Pillars', de: 'Fünf integrierte Säulen' },
    'fw.pillars.sub': {
      en: 'hcai builds on five core concepts to bridge the gap between business strategy and technology execution.',
      de: 'hcai baut auf fünf Kernkonzepten auf, um die Lücke zwischen Geschäftsstrategie und technischer Umsetzung zu schließen.'
    },
    'fw.pillar1.title': { en: 'Business Model Canvas', de: 'Business Model Canvas' },
    'fw.pillar1.desc': { en: 'Anchors all work in strategic business value.', de: 'Verankert jede Arbeit im strategischen Geschäftswert.' },
    'fw.pillar2.title': { en: 'Total Learning Architecture', de: 'Total Learning Architecture' },
    'fw.pillar2.desc': { en: 'A flexible, microservice-based technical backbone.', de: 'Ein flexibles, microservice-basiertes technisches Rückgrat.' },
    'fw.pillar3.title': { en: 'Core Information Model', de: 'Core Information Model' },
    'fw.pillar3.desc': { en: 'Makes value propositions a verifiable commitment.', de: 'Macht Wertversprechen zu einer nachweisbaren Zusage.' },
    'fw.pillar4.title': { en: 'Service-Based Costing', de: 'Service-basierte Kostenrechnung' },
    'fw.pillar4.desc': { en: 'Enables fine-grained, per-service cost control.', de: 'Ermöglicht feingranulare Kostenkontrolle pro Service.' },
    'fw.pillar5.title': { en: 'AI &amp; BPM Automation', de: 'KI- &amp; BPM-Automatisierung' },
    'fw.pillar5.desc': { en: 'Orchestrates and enforces value delivery.', de: 'Orchestriert und sichert die Wertlieferung.' },

    'fw.layers.title': { en: 'The hcai Layered Model', de: 'Das hcai-Schichtenmodell' },
    'fw.layers.sub': {
      en: 'A clear separation of concerns, from user-facing interactions down to the core infrastructure.',
      de: 'Eine klare Trennung der Zuständigkeiten, von der Nutzerinteraktion bis hinunter zur Kerninfrastruktur.'
    },
    'fw.layer1.title': { en: 'Use Case Layer', de: 'Use-Case-Schicht' },
    'fw.layer1.desc': { en: 'User-facing applications &amp; portals realizing a "Customer Job"', de: 'Anwendungen und Portale, die einen „Customer Job" realisieren' },
    'fw.layer2.title': { en: 'Process Layer', de: 'Prozess-Schicht' },
    'fw.layer2.desc': { en: 'BPM engines orchestrating end-to-end business workflows', de: 'BPM-Engines orchestrieren durchgängige Geschäftsabläufe' },
    'fw.layer3.title': { en: 'Service Layer', de: 'Service-Schicht' },
    'fw.layer3.desc': { en: 'TLA microservices exposing discrete business capabilities via APIs', de: 'TLA-Microservices stellen einzelne Geschäftsfähigkeiten über APIs bereit' },
    'fw.layer4.title': { en: 'Application Layer', de: 'Anwendungs-Schicht' },
    'fw.layer4.desc': { en: 'Core data platforms and persistent stores (LRS, CaSS, XI)', de: 'Zentrale Datenplattformen und persistente Speicher (LRS, CaSS, XI)' },
    'fw.layer5.title': { en: 'Infrastructure Layer', de: 'Infrastruktur-Schicht' },
    'fw.layer5.desc': { en: 'Compute, storage, and network resources (Cloud, Docker, Kafka)', de: 'Rechen-, Speicher- und Netzwerkressourcen (Cloud, Docker, Kafka)' },

    'fw.vb.title': { en: 'The Interactive Value Bridge', de: 'Die interaktive Value Bridge' },
    'fw.vb.sub': { en: 'See how business needs connect to technical implementation.', de: 'Sieh, wie Geschäftsbedürfnisse mit der technischen Umsetzung verbunden werden.' },
    'fw.gen.title': { en: 'Explore a Value Scenario', de: 'Ein Wertszenario erkunden' },
    'fw.gen.desc': {
      en: 'Pick an example need and see how the hcai framework turns it into a service-based solution, step by step.',
      de: 'Wähle einen Beispielbedarf und sieh, wie das hcai-Framework ihn Schritt für Schritt in eine service-basierte Lösung überführt.'
    },
    'fw.integrity.title': { en: 'Value Integrity: The Signed Commitment', de: 'Wertintegrität: Die signierte Zusage' },
    'fw.integrity.desc': {
      en: 'The Value-CorIM turns a value proposition into an auditable manifest, enabling programmatic verification against real-world performance data.',
      de: 'Das Value-CorIM macht aus einem Wertversprechen ein auditierbares Manifest und ermöglicht die programmatische Prüfung anhand realer Leistungsdaten.'
    },
    'fw.cost.title': { en: 'Economics of a Service', de: 'Ökonomie eines Service' },
    'fw.cost.desc': { en: 'Pick an example service to see a representative cost breakdown across the hcai layers.', de: 'Wähle einen Beispiel-Service, um eine repräsentative Kostenaufschlüsselung über die hcai-Schichten zu sehen.' },

    'fw.auto.title': { en: 'The Automation Engine', de: 'Die Automatisierungs-Engine' },
    'fw.auto.sub': { en: 'A self-regulating system that ensures value commitments are met.', de: 'Ein selbstregulierendes System, das die Einhaltung von Wertzusagen sicherstellt.' },
    'fw.auto1.title': { en: '1. AI Verifier Monitors', de: '1. KI-Verifier überwacht' },
    'fw.auto1.desc': { en: 'An AI system continuously collects performance data (Evidence) and compares it to the signed Value-CorIM.', de: 'Ein KI-System sammelt kontinuierlich Leistungsdaten (Evidence) und vergleicht sie mit dem signierten Value-CorIM.' },
    'fw.auto2.title': { en: '2. Deviation Detected', de: '2. Abweichung erkannt' },
    'fw.auto2.desc': { en: 'The AI predicts that a service is at risk of missing its promised value (e.g. cost savings are off track).', de: 'Die KI prognostiziert, dass ein Service seinen zugesagten Wert zu verfehlen droht (z. B. Kosteneinsparungen geraten aus dem Plan).' },
    'fw.auto3.title': { en: '3. BPM Workflow Triggered', de: '3. BPM-Workflow ausgelöst' },
    'fw.auto3.desc': { en: 'The AI automatically starts a BPM remediation workflow, takes corrective action and creates a self-healing system.', de: 'Die KI startet automatisch einen BPM-Korrekturworkflow, ergreift Gegenmaßnahmen und schafft ein selbstheilendes System.' },

    'fw.outro.lead': { en: 'hcai42: Strategy, Technology and Finance. Unified.', de: 'hcai42: Strategie, Technologie und Finanzen. Vereint.' },
    'fw.outro.desc': {
      en: 'This infographic visualises the hcai framework and shows a closed loop from strategic intent to verifiable, financially accountable execution.',
      de: 'Diese Infografik visualisiert das hcai-Framework und zeigt einen geschlossenen Kreislauf von der strategischen Absicht bis zur nachweisbaren, finanziell verantwortbaren Umsetzung.'
    },
    'fw.cta': { en: 'Try it in 3cors', de: 'In 3cors ausprobieren' },

    // Framework page: closed-loop infographic
    'fw.loop.title': { en: 'The Closed Loop', de: 'Der geschlossene Kreislauf' },
    'fw.loop.sub': {
      en: 'From strategic intent to verified execution and back. Each step feeds the next, and verified results return into strategy.',
      de: 'Von der strategischen Absicht bis zur nachweisbaren Umsetzung und zurück. Jeder Schritt speist den nächsten, verifizierte Ergebnisse fließen zurück in die Strategie.'
    },
    'fw.loop.1.t': { en: '1. Strategy', de: '1. Strategie' },
    'fw.loop.1.d': { en: 'Business value is defined in the Business Model Canvas.', de: 'Der Geschäftswert wird im Business Model Canvas definiert.' },
    'fw.loop.2.t': { en: '2. Commitment', de: '2. Zusage' },
    'fw.loop.2.d': { en: 'The Value-CorIM turns the promise into a signed, auditable manifest.', de: 'Das Value-CorIM macht das Versprechen zu einem signierten, auditierbaren Manifest.' },
    'fw.loop.3.t': { en: '3. Execution', de: '3. Umsetzung' },
    'fw.loop.3.d': { en: 'TLA microservices deliver the committed value in production.', de: 'TLA-Microservices liefern den zugesagten Wert im Betrieb.' },
    'fw.loop.4.t': { en: '4. Verification', de: '4. Verifikation' },
    'fw.loop.4.d': { en: 'The AI Verifier compares live telemetry against the signed commitment.', de: 'Der KI-Verifier vergleicht Live-Telemetrie mit der signierten Zusage.' },
    'fw.loop.5.t': { en: '5. Remediation', de: '5. Korrektur' },
    'fw.loop.5.d': { en: 'On deviation, a BPM workflow takes corrective action automatically.', de: 'Bei Abweichung steuert ein BPM-Workflow automatisch nach.' },
    'fw.loop.back': { en: '↺ Verified results feed back into strategy', de: '↺ Verifizierte Ergebnisse fließen zurück in die Strategie' }
  };

  function getLang() {
    var stored = localStorage.getItem('hcai42-lang');
    if (stored) return stored;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.startsWith('de') ? 'de' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem('hcai42-lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] && t[key][lang]) {
        el.innerHTML = t[key][lang];
      }
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  function init() {
    setLang(getLang());
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function() {
        var current = localStorage.getItem('hcai42-lang') || getLang();
        setLang(current === 'de' ? 'en' : 'de');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.setLang = setLang;
})();
