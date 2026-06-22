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
      de: 'KI-gestuetztes Business · Datengetriebenes Vertrauen · Skaliert zum Erfolg'
    },
    'hero.title': { en: 'We build AI you actually own.', de: 'Wir bauen KI, die dir wirklich gehoert.' },
    'hero.sub': {
      en: 'hcai42 is the company behind 3cors. We build AI software that organisations own, understand, and control. Full sovereignty, zero lock-in.',
      de: 'hcai42 ist das Unternehmen hinter 3cors. Wir bauen KI-Software, die Unternehmen besitzen, verstehen und kontrollieren. Volle Souveraenitaet, kein Lock-in.'
    },
    'hero.cta1': { en: 'Read our Mission', de: 'Leitbild lesen' },
    'hero.cta2': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },

    // Mission / Leitbild
    'leitbild.title': { en: 'Our Mission', de: 'Unser Leitbild' },
    'leitbild.lead': {
      en: '<strong>You Own It.</strong> We build AI software that belongs to the people who use it. Not to us, not to a cloud provider, not to a model.',
      de: '<strong>Du bestimmst.</strong> Wir bauen KI-Software, die den Menschen gehoert, die sie nutzen. Nicht uns, keinem Cloud-Anbieter, keinem Modell.'
    },
    'leitbild.mandate': { en: 'Our Mandate', de: 'Unser Auftrag' },
    'leitbild.mandate.desc': {
      en: 'We give organisations back control over their AI. Software they can own, understand, and leave at any time. Data sovereignty is the foundation, not an add-on.',
      de: 'Wir geben Unternehmen die Kontrolle ueber ihre KI zurueck. Software, die sie besitzen, verstehen und jederzeit verlassen koennen. Datensouveraenitaet ist das Fundament, kein Zusatz.'
    },
    'leitbild.vision': { en: 'Our Vision', de: 'Unsere Vision' },
    'leitbild.vision.desc': {
      en: 'A future where organisations use AI without making themselves dependent. We are the proof that powerful AI and full sovereignty are not a contradiction.',
      de: 'Eine Zukunft, in der Unternehmen KI nutzen, ohne sich abhaengig zu machen. Wir sind der Beweis, dass leistungsfaehige KI und volle Souveraenitaet kein Widerspruch sind.'
    },
    'leitbild.measure': {
      en: '<strong>Our measure:</strong> has the organisation that uses our software gained more control, more clarity, and more time for what matters? If yes, we have done our job well.',
      de: '<strong>Unser Massstab:</strong> Hat das Unternehmen, das unsere Software nutzt, mehr Kontrolle, mehr Klarheit und mehr Zeit fuer das Wesentliche gewonnen? Wenn ja, haben wir unsere Arbeit gut gemacht.'
    },

    // Values
    'werte.title': { en: 'Values', de: 'Werte' },
    'werte.1': { en: 'Ownership over Dependence', de: 'Eigentum vor Abhaengigkeit' },
    'werte.1.desc': {
      en: 'No lock-in. Full export, real deletion, deployable on your own hardware. Whoever can get in must be able to get out again.',
      de: 'Kein Lock-in. Voller Export, echtes Loeschen, deploybar auf eigener Hardware. Wer rein kann, muss auch wieder raus koennen.'
    },
    'werte.2': { en: 'Honesty over Hype', de: 'Ehrlichkeit statt Hype' },
    'werte.2.desc': {
      en: 'We promise what we deliver and deliver what we promise. No buzzwords, transparent costs, verifiable claims.',
      de: 'Wir versprechen, was wir liefern, und liefern, was wir versprechen. Keine Buzzwords, transparente Kosten, pruefbare Aussagen.'
    },
    'werte.3': { en: 'Determinism carries, AI shapes', de: 'Determinismus traegt, KI gestaltet' },
    'werte.3.desc': {
      en: 'A schema-validated foundation sets the rules. AI works as a tenant within them. Trust comes from traceability, not magic.',
      de: 'Ein schema-validiertes Fundament gibt die Regeln vor. KI arbeitet als Tenant darin. Vertrauen entsteht aus Nachvollziehbarkeit, nicht aus Magie.'
    },
    'werte.4': { en: 'Data Protection is Respect', de: 'Datenschutz ist Respekt' },
    'werte.4.desc': {
      en: 'GDPR, data locality and audit trails as an attitude, not a chore. Respect for the people behind the data.',
      de: 'DSGVO, Datenlokalitaet und Audit-Trails als Haltung, nicht als Pflichtuebung. Respekt vor den Menschen hinter den Daten.'
    },

    // Brands
    'marken.title': { en: 'Our Brands', de: 'Unsere Marken' },
    'marken.sub': {
      en: 'hcai42 holds two trademarks registered with the German Patent and Trade Mark Office (DPMA).',
      de: 'hcai42 haelt zwei beim Deutschen Patent- und Markenamt (DPMA) eingetragene Marken.'
    },
    'marken.hcai.desc': {
      en: 'Our AI framework: a structured method for bringing AI into business safely, with governance and human oversight at its core.',
      de: 'Unser KI-Framework: eine strukturierte Methode, um KI sicher ins Unternehmen zu bringen, mit Governance und menschlicher Kontrolle im Zentrum.'
    },
    'marken.hcai.link': { en: 'Explore the Framework →', de: 'Framework entdecken →' },
    'marken.3cors.desc': {
      en: 'Our AI platform built on open-source technology. Three Cores: Intelligence, Memory, Billing. Self-hosted, GDPR-ready, zero lock-in.',
      de: 'Unsere KI-Plattform auf Open-Source-Basis. Drei Kerne: Intelligence, Memory, Billing. Self-Hosted, DSGVO-konform, kein Lock-in.'
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
    'footer.copy': { en: '© 2026 HCAI42. All rights reserved.', de: '© 2026 HCAI42. Alle Rechte vorbehalten.' }
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
