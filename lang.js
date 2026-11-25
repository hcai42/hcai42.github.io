// hcai42 i18n - browser language detection + toggle
(function() {
  var t = {
    // Sales story 2026-11-25
    'scen.title': { en: 'Example scenarios', de: 'Beispielszenarien' },
    'scen.sub': { en: 'Always the same pattern: the business describes, the team works together, costs stay within limits, and the change ships without a release queue.', de: 'Immer derselbe Ablauf: Der Fachbereich beschreibt, das Team arbeitet gemeinsam, die Kosten bleiben im Rahmen, die Änderung kommt ohne Release-Warteschlange.' },
    'scen.a.label': { en: 'Example scenario · Insurance', de: 'Beispielszenario · Versicherung' },
    'scen.a.quote': { en: '"Our core system ships two releases a year."', de: '„Unser Kernsystem hat zwei Releases im Jahr.“' },
    'scen.a.body': { en: 'The claims team wants to handle a new claim type faster. Claims handlers and the team lead describe the process in a guided interview; handlers propose changes, the lead approves. The new flow runs alongside the core system, which stays untouched. If the assessor service changes later or the AI provider goes down, rules and data stay; only the connection is switched.', de: 'Die Schadenabteilung will eine neue Schadenart schneller bearbeiten. Sachbearbeitung und Fachleitung beschreiben die Meldestrecke im geführten Interview; die Sachbearbeitung schlägt Änderungen vor, die Fachleitung gibt frei. Die neue Strecke läuft neben dem Kernsystem, das unverändert bleibt. Wechselt später der Gutachterdienst oder fällt der KI-Anbieter aus, bleiben Prüfregeln und Daten, umgestellt wird nur die Anbindung.' },
    'scen.a.tags': { en: '<span class="usp-tag usp-team">Together in one workspace</span> <span class="usp-tag usp-free">No lock-in</span> <span class="usp-tag usp-cost">Costs within limits</span> <span class="usp-tag usp-data">Your data stays yours</span>', de: '<span class="usp-tag usp-team">Gemeinsam im Workspace</span> <span class="usp-tag usp-free">Kein Lock-in</span> <span class="usp-tag usp-cost">Kosten im Rahmen</span> <span class="usp-tag usp-data">Ihre Daten bleiben Ihre</span>' },
    'scen.b.label': { en: 'Example scenario · Property management', de: 'Beispielszenario · Hausverwaltung' },
    'scen.b.quote': { en: '"Every small change means a quote from our software vendor."', de: '„Jede kleine Anpassung ist ein Angebot vom Softwarehersteller.“' },
    'scen.b.body': { en: 'Defect reports arrive by email, phone and paper notes. Property managers, accounting and contractor dispatch agree on report types and who decides. AI routes the reports; people decide. The team adds new report types itself; if a contractor closes down, only the routing changes.', de: 'Mängel kommen per Mail, Telefon und Zettel. Objektbetreuung, Buchhaltung und Handwerker-Disposition legen gemeinsam fest, welche Meldearten es gibt und wer entscheidet. Die KI ordnet Meldungen zu, entscheiden tun Menschen. Neue Meldearten legt der Fachbereich selbst an; hört ein Handwerksbetrieb auf, wird nur die Zuordnung angepasst.' },
    'scen.b.tags': { en: '<span class="usp-tag usp-team">Together in one workspace</span> <span class="usp-tag usp-cost">Costs within limits</span> <span class="usp-tag usp-free">No lock-in</span>', de: '<span class="usp-tag usp-team">Gemeinsam im Workspace</span> <span class="usp-tag usp-cost">Kosten im Rahmen</span> <span class="usp-tag usp-free">Kein Lock-in</span>' },
    'scen.c.label': { en: 'Example scenario · Plant engineering', de: 'Beispielszenario · Anlagenbau' },
    'scen.c.quote': { en: '"When Mr M. is on holiday, no quote goes out."', de: '„Wenn Herr M. im Urlaub ist, geht kein Angebot raus.“' },
    'scen.c.body': { en: 'Quotes with engineering content depend on a few people. Sales, engineering and installation planning capture rules and experience together. AI drafts the quote and shows what it relies on; engineering reviews and approves. If a supplier discontinues a material, the alternative is recorded once and applies to all future drafts.', de: 'Angebote mit Engineering-Anteil hängen am Wissen weniger Köpfe. Vertrieb, Engineering und Montageplanung legen Regeln und Erfahrungswerte gemeinsam ab. Die KI erstellt einen Angebotsentwurf und zeigt, worauf er sich stützt; das Engineering prüft und gibt frei. Stellt ein Zulieferer einen Werkstoff ein, wird die Alternative einmal hinterlegt und gilt für alle künftigen Entwürfe.' },
    'scen.c.tags': { en: '<span class="usp-tag usp-team">Together in one workspace</span> <span class="usp-tag usp-cost">Costs within limits</span> <span class="usp-tag usp-data">Your data stays yours</span>', de: '<span class="usp-tag usp-team">Gemeinsam im Workspace</span> <span class="usp-tag usp-cost">Kosten im Rahmen</span> <span class="usp-tag usp-data">Ihre Daten bleiben Ihre</span>' },
    'change.title': { en: 'Partners change. Your business keeps running.', de: 'Partner wechseln. Ihr Geschäft läuft weiter.' },
    'change.desc': { en: 'An AI provider goes down, a supplier discontinues a product, a service partner ends the contract. Your processes, rules and experience belong to you, not to the partner. You replace the partner; your team\'s know-how stays. Switching AI providers is a configuration change.', de: 'Ein KI-Anbieter fällt aus, ein Lieferant stellt ein Produkt ein, ein Dienstleister kündigt den Vertrag. Ihre Abläufe, Regeln und Erfahrungswerte gehören Ihnen, nicht dem Partner. Sie tauschen den Partner aus, das Wissen Ihres Fachbereichs bleibt. Den KI-Anbieter wechseln Sie per Konfiguration.' },
    'change.tags': { en: '<span class="usp-tag usp-free">No lock-in</span> <span class="usp-tag usp-data">Your data stays yours</span>', de: '<span class="usp-tag usp-free">Kein Lock-in</span> <span class="usp-tag usp-data">Ihre Daten bleiben Ihre</span>' },
    'teaser.text': { en: 'In conversation and projects with: a tour operator, an insurance IT service provider, a plant engineering company, an online education entrepreneur.', de: 'Im Gespräch und in Projekten mit: einem Reiseveranstalter, einem IT-Dienstleister für Versicherungen, einem Anlagenbauer, einer Online-Bildungsunternehmerin.' },
    'pain.title': { en: 'Sound familiar?', de: 'Kennen Sie das?' },
    'pain.1': { en: 'Every business change turns into an IT project: ticket, quote, queue.', de: 'Jede fachliche Änderung wird ein IT-Projekt: Ticket, Angebot, Warteschlange.' },
    'pain.2': { en: 'Your standard software sets the pace, not your business.', de: 'Die Standardsoftware gibt den Takt vor, nicht Ihr Geschäft.' },
    'pain.3': { en: 'Knowledge about your processes sits with vendors, not with you.', de: 'Das Wissen über Ihre Prozesse liegt bei Dienstleistern, nicht bei Ihnen.' },
    'pain.4': { en: 'AI stays stuck in pilots because cost, data and operations are unresolved.', de: 'KI bleibt im Pilot stecken, weil Kosten, Daten und Betrieb ungeklärt sind.' },
    'pain.5': { en: 'A vendor, supplier or partner changes prices or terms, or drops out, and suddenly a whole process stops.', de: 'Ein Anbieter, Lieferant oder Partner ändert Preise, Bedingungen oder fällt aus, und plötzlich steht ein ganzer Prozess.' },
    'tun.title': { en: 'What we do', de: 'Was wir tun' },
    'tun.sub': { en: 'We bring business experts and IT to one table, so the business sets the pace.', de: 'Wir bringen Fachbereich und IT an einen Tisch, damit die Fachlichkeit das Tempo bestimmt.' },
    'tun.1.title': { en: 'Clarify the domain', de: 'Fachlichkeit klären' },
    'tun.1.desc': { en: 'We capture processes, terms and rules with your experts, in their language.', de: 'Wir nehmen Abläufe, Begriffe und Regeln mit Ihren Fachleuten auf, in deren Sprache.' },
    'tun.2.title': { en: 'Expose dependencies', de: 'Abhängigkeiten sichtbar machen' },
    'tun.2.desc': { en: 'Where do standard software, vendors, partners or interfaces slow you down?', de: 'Wo bremsen Standardsoftware, Dienstleister, Partner oder Schnittstellen?' },
    'tun.3.title': { en: 'Build independence', de: 'Eigenständigkeit aufbauen' },
    'tun.3.desc': { en: 'Business applications on 3cors, a framework you own. Your team learns along and takes over.', de: 'Fachanwendungen auf 3cors, einem Framework, das Ihnen gehört. Ihr Team lernt mit und übernimmt.' },
    'nav.szenarien': { en: 'Examples', de: 'Beispiele' },

    // Nav
    'nav.leitbild': { en: 'Mission', de: 'Leitbild' },
    'nav.werte': { en: 'Values', de: 'Werte' },
    'nav.marken': { en: 'Brands', de: 'Marken' },
    'nav.prozess': { en: 'How It Works', de: 'Zusammenarbeit' },
    'nav.kontakt': { en: 'Contact', de: 'Kontakt' },

    // Hero
    'hero.badge': {
      en: 'Independent company · Built in Germany · Full data sovereignty',
      de: 'Unabhängiges Unternehmen · Made in Germany · Volle Datensouveränität'
    },
    'hero.title': { en: 'IT that follows the business.', de: 'IT, die dem Fachbereich folgt.' },
    'hero.sub': { en: 'We bring business experts and IT to one table, so your organisation can decide and act faster, with less dependence on external vendors and software release cycles.', de: 'Wir bringen Fachbereich und IT an einen Tisch. Damit Ihr Geschäft schneller entscheiden und umsetzen kann, mit weniger Abhängigkeit von externen Dienstleistern und Software-Releases.' },
    'hero.cta1': { en: 'How we work', de: 'So arbeiten wir' },
    'hero.cta2': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },

    // Credibility / Metrics
    'metrics.choice.num': { en: 'Your Choice', de: 'Ihre Wahl' },
    'metrics.choice': { en: 'Runs in your own environment, data centre or cloud', de: 'Läuft in Ihrer eigenen Umgebung, ob Rechenzentrum oder Cloud' },
    'metrics.eu': { en: 'Built and based in the EU', de: 'In der EU entwickelt und ansässig' },
    'metrics.lockin': { en: 'Vendor lock-in: full export, real deletion, anytime', de: 'Vendor Lock-in: voller Export, echtes Löschen, jederzeit' },
    'metrics.gdpr.num': { en: 'GDPR', de: 'DSGVO' },
    'metrics.gdpr': { en: 'Built for European data protection requirements', de: 'Ausgelegt auf europäische Datenschutz-Anforderungen' },

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
      en: 'Two products, one principle: AI you own, understand, and control. Backed by a real company you can rely on for the long term.',
      de: 'Zwei Produkte, ein Prinzip: KI, die Sie besitzen, verstehen und kontrollieren. Getragen von einem realen Unternehmen, auf das Sie langfristig bauen können.'
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

    // How It Works
    'prozess.title': { en: 'How We Work Together', de: 'So arbeiten wir zusammen' },
    'prozess.sub': {
      en: 'From first conversation to software you own and run yourself. Three clear steps, no lock-in along the way.',
      de: 'Vom ersten Gespräch bis zur Software, die Sie besitzen und selbst betreiben. Drei klare Schritte, ohne Lock-in auf dem Weg.'
    },
    'prozess.1.title': { en: 'We Talk', de: 'Wir sprechen' },
    'prozess.1.desc': {
      en: 'We map your situation, goals, and constraints together. An honest assessment of whether we are a fit, with no obligation.',
      de: 'Wir klären gemeinsam Ihre Situation, Ziele und Rahmenbedingungen. Eine ehrliche Einschätzung, ob wir zusammenpassen, unverbindlich.'
    },
    'prozess.2.title': { en: 'We Build on Your Terms', de: 'Wir bauen zu Ihren Bedingungen' },
    'prozess.2.desc': {
      en: 'We deliver software that runs on your own hardware and follows the hcai principles: governance, traceability, and human oversight built in.',
      de: 'Wir liefern Software, die auf Ihrer eigenen Hardware läuft und den hcai-Prinzipien folgt: Governance, Nachvollziehbarkeit und menschliche Kontrolle eingebaut.'
    },
    'prozess.3.title': { en: 'You Stay in Control', de: 'Sie behalten die Kontrolle' },
    'prozess.3.desc': {
      en: 'Full export, real deletion, no lock-in. Whoever can get in must be able to get out again. The software belongs to you, not to us.',
      de: 'Voller Export, echtes Löschen, kein Lock-in. Wer rein kann, muss auch wieder raus können. Die Software gehört Ihnen, nicht uns.'
    },

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
    try {
      var p = new URLSearchParams(window.location.search).get('lang');
      if (p) {
        var pl = p.toLowerCase().slice(0, 2);
        if (pl === 'de' || pl === 'en') {
          localStorage.setItem('hcai42-lang', pl);
          return pl;
        }
      }
    } catch (e) {}
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
