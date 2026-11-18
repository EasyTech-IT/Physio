(function () {
  "use strict";

  var storageKey = "integralis-privacy-notice-v1";
  var storedChoice = null;

  try {
    var storedValue = window.localStorage.getItem(storageKey);
    if (storedValue) {
      var parsedChoice = JSON.parse(storedValue);
      if (Date.parse(parsedChoice.expiresAt) > Date.now()) {
        storedChoice = storedValue;
      } else {
        window.localStorage.removeItem(storageKey);
      }
    }
  } catch (error) {
    console.warn("Datenschutzeinstellung kann nicht gelesen werden.", error);
  }

  var banner = document.createElement("section");
  banner.className = "compliance-banner";
  banner.hidden = Boolean(storedChoice);
  banner.setAttribute("aria-labelledby", "privacy-banner-title");
  banner.innerHTML =
    '<h2 id="privacy-banner-title">Ihre Privatsphäre</h2>' +
    '<p>Diese Website setzt derzeit keine Analyse-, Marketing- oder Drittanbieter-Cookies. Wir speichern nur Ihre Auswahl zu diesem Hinweis lokal in Ihrem Browser.</p>' +
    '<div class="compliance-banner__actions">' +
    '<button class="compliance-button" type="button" data-privacy-save="notwendig">Nur Notwendiges bestätigen</button>' +
    '<button class="compliance-button compliance-button--secondary" type="button" data-privacy-open>Einstellungen</button>' +
    '<a class="compliance-button compliance-button--secondary" href="datenschutz.html">Datenschutz</a>' +
    "</div>";

  var quickAccess = document.createElement("button");
  quickAccess.className = "compliance-quick-access";
  quickAccess.type = "button";
  quickAccess.setAttribute("aria-label", "Datenschutzeinstellungen öffnen");
  quickAccess.setAttribute("title", "Datenschutzeinstellungen");
  quickAccess.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 20 6v5.2c0 5-3.4 8.8-8 10.3-4.6-1.5-8-5.3-8-10.3V6l8-3.5Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>';

  var settings = document.createElement("section");
  settings.className = "compliance-settings";
  settings.hidden = true;
  settings.setAttribute("role", "dialog");
  settings.setAttribute("aria-modal", "true");
  settings.setAttribute("aria-labelledby", "privacy-settings-title");
  settings.innerHTML =
    '<div class="compliance-settings__dialog">' +
    '<div class="compliance-settings__heading"><div><h2 id="privacy-settings-title">Datenschutzeinstellungen</h2><p>Aktuell werden keine Analyse- oder Marketingdienste eingesetzt.</p></div><button class="compliance-settings__close" type="button" aria-label="Einstellungen schließen" data-privacy-close>&times;</button></div>' +
    '<div class="compliance-category"><div class="compliance-category__row"><div><strong>Notwendig</strong><p>Ermöglicht die Speicherung dieses Hinweises für sechs Monate.</p></div><span class="compliance-badge">Immer aktiv</span></div></div>' +
    '<div class="compliance-category"><div class="compliance-category__row"><div><strong>Statistik und Marketing</strong><p>Kein Anbieter konfiguriert. Es erfolgt keine Messung und kein Tracking.</p></div><span class="compliance-badge">Nicht verwendet</span></div></div>' +
    '<div class="compliance-banner__actions"><button class="compliance-button" type="button" data-privacy-save="notwendig">Auswahl bestätigen</button><a class="compliance-button compliance-button--secondary" href="datenschutz.html">Datenschutzerklärung</a></div>' +
    "</div>";

  document.body.appendChild(banner);
  document.body.appendChild(settings);
  document.body.appendChild(quickAccess);

  var previousFocus = null;

  function persistChoice(choice) {
    var value = JSON.stringify({
      necessary: true,
      statistics: false,
      marketing: false,
      choice: choice,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString(),
    });

    try {
      window.localStorage.setItem(storageKey, value);
      storedChoice = value;
    } catch (error) {
      console.warn("Datenschutzeinstellung konnte nicht gespeichert werden.", error);
    }

    banner.hidden = true;
    closeSettings();
  }

  function openSettings() {
    previousFocus = document.activeElement;
    settings.hidden = false;
    document.body.style.overflow = "hidden";
    settings.querySelector("[data-privacy-close]").focus();
  }

  function closeSettings() {
    settings.hidden = true;
    document.body.style.overflow = "";
    if (previousFocus) {
      previousFocus.focus();
    }
  }

  function appendLegalLinks() {
    var footer = document.querySelector("footer, .footer, .contact-footer");
    if (!footer) {
      return;
    }

    var links = document.createElement("nav");
    links.className = "compliance-links";
    links.setAttribute("aria-label", "Rechtliche Informationen");
    links.innerHTML =
      (!footer.querySelector('a[href="impressum.html"]')
        ? '<a href="impressum.html">Impressum</a>'
        : "") +
      (!footer.querySelector('a[href="datenschutz.html"]')
        ? '<a href="datenschutz.html">Datenschutz</a>'
        : "") +
      (!footer.querySelector('a[href="agb.html"]')
        ? '<a href="agb.html">AGB</a>'
        : "") +
      '<button type="button" data-privacy-open>Cookie-Einstellungen</button>';

    footer.appendChild(links);
  }

  banner.addEventListener("click", function (event) {
    var save = event.target.closest("[data-privacy-save]");
    var open = event.target.closest("[data-privacy-open]");
    if (save) {
      persistChoice(save.dataset.privacySave);
    } else if (open) {
      openSettings();
    }
  });

  settings.addEventListener("click", function (event) {
    var save = event.target.closest("[data-privacy-save]");
    if (save) {
      persistChoice(save.dataset.privacySave);
    } else if (
      event.target.closest("[data-privacy-close]") ||
      event.target === settings
    ) {
      closeSettings();
    }
  });

  quickAccess.addEventListener("click", openSettings);
  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-privacy-open]");
    if (trigger && trigger !== banner && !banner.contains(trigger)) {
      openSettings();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !settings.hidden) {
      closeSettings();
    }
  });

  appendLegalLinks();
})();
