(function ($) {
  "use strict";

  $(function () {
    var pageName = window.location.pathname.split("/").pop() || "index.html";
    var pageMetadata = {
      "index.html": [
        "Integralis - Praxis fuer Physiotherapie",
        "Integralis Physiotherapie in Altenstadt: individuelle Behandlung, Krankengymnastik, Bobath, Lymphdrainage und Hausbesuche.",
      ],
      "about.html": [
        "Praxis - Integralis Physiotherapie",
        "Lernen Sie Nico Gugliotta und den ganzheitlichen Ansatz der Integralis Praxis fuer Physiotherapie in Altenstadt kennen.",
      ],
      "service.html": [
        "Therapieangebote - Integralis Physiotherapie",
        "Klassische Massage, Krankengymnastik, Bobath, Lymphdrainage, Wärme- und Kältetherapie sowie Hausbesuche in Altenstadt.",
      ],
      "appointment.html": [
        "Termin vereinbaren - Integralis Physiotherapie",
        "Vereinbaren Sie Ihren Termin bei Integralis Physiotherapie in Altenstadt telefonisch unter 06047 / 3292615.",
      ],
      "contact.html": [
        "Kontakt - Integralis Physiotherapie",
        "Kontakt, Öffnungszeiten und Anfahrt zur Integralis Praxis für Physiotherapie in der Alten Molkerei in Altenstadt.",
      ],
      "feature.html": [
        "Ihre Praxis - Integralis Physiotherapie",
        "Ihre Vorteile bei Integralis: persönliche Betreuung, Erfahrung seit 2010 und ein ganzheitlicher Therapieansatz.",
      ],
      "team.html": [
        "Ihr Therapeut - Integralis Physiotherapie",
        "Nico Gugliotta, staatlich anerkannter Physiotherapeut mit Schwerpunkt neurologische Physiotherapie.",
      ],
      "testimonial.html": [
        "Ihre Behandlung - Integralis Physiotherapie",
        "Informationen zu Ihrer individuellen physiotherapeutischen Behandlung bei Integralis in Altenstadt.",
      ],
      "blog.html": [
        "Wissenswertes - Integralis Physiotherapie",
        "Wissenswertes über Physiotherapie und die Behandlungsangebote von Integralis in Altenstadt.",
      ],
      "404.html": [
        "Seite nicht gefunden - Integralis Physiotherapie",
        "Die angeforderte Seite wurde nicht gefunden. Zurück zur Integralis Praxis für Physiotherapie.",
      ],
    };
    var metadata = pageMetadata[pageName] || pageMetadata["index.html"];
    document.title = metadata[0];
    $("meta[name='description']").attr("content", metadata[1]);
    $("meta[name='keywords']").attr(
      "content",
      "Physiotherapie Altenstadt, Krankengymnastik, Bobath, Lymphdrainage, Hausbesuche, Massage",
    );
    if (!$("meta[property='og:description']").length) {
      $("head").append(
        '<meta property="og:title" content="' +
          metadata[0] +
          '"><meta property="og:description" content="' +
          metadata[1] +
          '"><meta property="og:type" content="website">',
      );
    }
    var navigation = [
      ["index.html", "Startseite", "fa-home"],
      ["about.html", "Praxis", "fa-clinic-medical"],
      ["service.html", "Therapieangebote", "fa-hand-holding-medical"],
      ["appointment.html", "Termin", "fa-calendar-check"],
      ["contact.html", "Kontakt", "fa-envelope"],
    ];
    var links = navigation
      .map(function (item) {
        var active = item[0] === pageName ? " active" : "";
        return (
          '<a href="' +
          item[0] +
          '" class="nav-item nav-link' +
          active +
          '"><i class="fas ' +
          item[2] +
          ' nav-icon" aria-hidden="true"></i>' +
          item[1] +
          "</a>"
        );
      })
      .join("");

    $(".container-fluid.bg-dark")
      .first()
      .find(".d-flex.flex-wrap")
      .html(
        '<a href="https://www.google.com/maps/search/?api=1&amp;query=Vogelsbergstra%C3%9Fe+47%2C+63674+Altenstadt" class="text-light me-4"><i class="fas fa-map-marker-alt text-primary me-2"></i>Vogelsbergstrasse 47, 63674 Altenstadt</a>' +
          '<a href="tel:+4960473292615" class="text-light me-4"><i class="fas fa-phone-alt text-primary me-2"></i>06047 / 3292615</a>' +
          '<a href="mailto:info@integralis-physio.de" class="text-light me-0"><i class="fas fa-envelope text-primary me-2"></i>info@integralis-physio.de</a>',
      );

    $(".navbar-brand").html(
      '<img class="integralis-logo" src="https://res.cloudinary.com/dlpdbr0ey/image/upload/c_crop,g_north_west,h_503,w_1192/f_auto/q_auto/copy_of_brave_screenshot_wwwgooglede_1_l3e4o9.png" alt="Integralis Praxis fuer Physiotherapie">',
    );
    $(".navbar").addClass("nav-island");
    $(".navbar-nav").html(links);
    $(".navbar .navbar-collapse > .btn")
      .attr("href", "tel:+4960473292615")
      .html(
        '<i class="fas fa-phone-alt me-2" aria-hidden="true"></i>Termin vereinbaren',
      );
    $(".sr-only").text("Wird geladen...");
    $(
      ".nav-fill, .team-icon, .footer-item .btn-square, .contact .btn-lg-square",
    ).remove();
    $(".navbar-toggler").attr("aria-label", "Navigation öffnen");
    $(".back-to-top").attr("aria-label", "Zum Seitenanfang");
    var mainContent = $(".header-carousel, .bg-breadcrumb").first();
    mainContent.attr("id", "main-content").attr("tabindex", "-1");
    $("body").prepend(
      '<a class="skip-link" href="#main-content">Direkt zum Inhalt</a>',
    );

    $("body").append(
      '<nav class="mobile-contact-bar" aria-label="Schnelle Kontaktmöglichkeiten"><a href="tel:+4960473292615" class="mobile-contact-call"><i class="fas fa-phone-alt" aria-hidden="true"></i><span>Jetzt anrufen</span></a><a href="contact.html" class="mobile-contact-message"><i class="fas fa-comment-medical" aria-hidden="true"></i><span>Nachricht senden</span></a></nav>',
    );

    $("img").each(function () {
      if (!this.alt) {
        this.alt = "Integralis Praxis für Physiotherapie";
      }
      this.decoding = "async";
      if (!$(this).closest(".header-carousel, .navbar-brand").length) {
        this.loading = "lazy";
      }
    });

    var serviceIcons = [
      "fa-hands",
      "fa-walking",
      "fa-brain",
      "fa-water",
      "fa-snowflake",
      "fa-sun",
      "fa-home",
      "fa-file-medical",
    ];
    $(".service-item").each(function (index) {
      $(this)
        .find("h5")
        .prepend(
          '<i class="fas ' +
            serviceIcons[index % serviceIcons.length] +
            ' service-title-icon" aria-hidden="true"></i>',
        );
      $(this)
        .find(".btn")
        .prepend('<i class="fas fa-circle-info me-2" aria-hidden="true"></i>');
    });
    $(".feature-item h5").each(function () {
      $(this).prepend(
        '<i class="fas fa-check-circle feature-title-icon" aria-hidden="true"></i>',
      );
    });

    if (pageName === "index.html") {
      $(".testimonial")
        .removeClass("d-none")
        .html(
          '<div class="container py-5"><div class="section-title mb-5"><div class="sub-style"><h4 class="sub-title text-white px-3 mb-0">Google Rezensionen</h4></div><h2 class="display-3 mb-3">Erfahrungen unserer Patientinnen und Patienten</h2><p class="text-white-50 mb-0">Auszug aus veröffentlichten Google-Rezensionen</p></div><div class="review-grid"><article class="review-card"><div class="review-stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>Ich kann die Praxis wirklich nur weiterempfehlen. Man fühlt sich von Anfang an gut aufgehoben und die Behandlung hat mir sehr geholfen.</blockquote><footer><strong>Nicole Chodor</strong><span>Google Rezension, vor 5 Monaten</span></footer></article><article class="review-card"><div class="review-stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>Mein Mann hat nach drei Schlaganfällen bei Nico und seinem Team riesige Fortschritte gemacht. Vielen lieben Dank an euch.</blockquote><footer><strong>Ines Jeckeln-Wagner</strong><span>Google Rezension, vor einem Jahr</span></footer></article><article class="review-card"><div class="review-stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>Ich habe mich immer gut aufgehoben gefühlt und kann Nico und sein Team uneingeschränkt weiterempfehlen.</blockquote><footer><strong>Carina Langhans</strong><span>Google Rezension, vor 2 Jahren</span></footer></article><article class="review-card"><div class="review-stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>Kompetent, sympathisch und professionell. Die Terminvergabe war unkompliziert und meine Beschwerden sind endlich weg.</blockquote><footer><strong>Serap Ak</strong><span>Google Rezension, vor 4 Jahren</span></footer></article><article class="review-card"><div class="review-stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>Eine kompetente Behandlung hat zu einer deutlichen Linderung meiner Rückenschmerzen geführt. Die Tipps helfen mir im Alltag.</blockquote><footer><strong>Benjamin Fathi</strong><span>Google Rezension, vor 5 Jahren</span></footer></article><article class="review-card"><div class="review-stars" aria-label="5 von 5 Sternen">★★★★★</div><blockquote>Sehr kompetente Behandlung nach einer Knie-OP. Nach jedem Termin war eine spürbare Verbesserung bei der Bewegung da.</blockquote><footer><strong>Harald Schneider</strong><span>Google Rezension, vor 5 Jahren</span></footer></article></div></div>',
        );
      var reviewCards = $(".review-card");
      var reviewIndex = 0;
      var reviewTimer;
      var reviewGrid = $(".review-grid");
      reviewGrid.wrap(
        '<div class="review-carousel" role="region" aria-label="Google Rezensionen"></div>',
      );
      var reviewCarousel = reviewGrid.parent();
      reviewCards.each(function (index) {
        $(this).attr({ id: "review-" + index, role: "tabpanel" });
      });
      reviewCarousel.append(
        '<div class="review-controls"><button type="button" class="review-control" data-review-direction="previous" aria-label="Vorherige Rezension"><i class="fas fa-arrow-left" aria-hidden="true"></i></button><div class="review-dots" role="tablist" aria-label="Rezension auswählen"></div><button type="button" class="review-control" data-review-direction="next" aria-label="Nächste Rezension"><i class="fas fa-arrow-right" aria-hidden="true"></i></button></div>',
      );
      reviewCards.each(function (index) {
        $(".review-dots").append(
          '<button type="button" class="review-dot" role="tab" aria-controls="review-' +
            index +
            '" aria-label="Rezension ' +
            (index + 1) +
            '"></button>',
        );
      });
      var showReview = function (nextIndex) {
        reviewIndex = (nextIndex + reviewCards.length) % reviewCards.length;
        reviewCards.removeClass("is-active").attr("hidden", true);
        reviewCards.eq(reviewIndex).addClass("is-active").removeAttr("hidden");
        $(".review-dot")
          .removeClass("is-active")
          .attr("aria-selected", "false")
          .eq(reviewIndex)
          .addClass("is-active")
          .attr("aria-selected", "true");
      };
      var stopReviews = function () {
        window.clearInterval(reviewTimer);
      };
      var startReviews = function () {
        stopReviews();
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          reviewTimer = window.setInterval(function () {
            showReview(reviewIndex + 1);
          }, 7000);
        }
      };
      showReview(0);
      startReviews();
      reviewCarousel
        .on("mouseenter focusin", stopReviews)
        .on("mouseleave", startReviews);
      reviewCarousel.on("click", "[data-review-direction]", function () {
        showReview(
          reviewIndex + ($(this).data("review-direction") === "next" ? 1 : -1),
        );
        startReviews();
      });
      reviewCarousel.on("click", ".review-dot", function () {
        showReview($(this).index());
        startReviews();
      });
      $(".blog")
        .removeClass("d-none")
        .html(
          '<div class="container py-5"><div class="section-title mb-5 wow fadeInUp"><div class="sub-style"><h4 class="sub-title px-3 mb-0">Wissenswertes</h4></div><h2 class="display-3 mb-4">Gut vorbereitet in die Physiotherapie</h2><p class="mb-0">Antworten auf häufige Fragen rund um Ihre Behandlung bei Integralis.</p></div><div class="row g-4 justify-content-center"><article class="col-md-6 col-lg-4 wow fadeInUp"><div class="blog-item h-100"><div class="blog-img"><img src="img/blog-1.jpg" class="img-fluid w-100" alt="Bewegung im Alltag" loading="lazy"></div><div class="blog-centent p-4"><p class="mb-3 text-muted"><i class="fas fa-person-walking text-primary me-2"></i>Bewegung im Alltag</p><h3 class="h4">Rückenschmerzen im Alltag</h3><p class="my-4">Kleine Bewegungsimpulse und eine aufrechte Haltung können Ihren Alltag entlasten. Wir zeigen Ihnen passende Übungen für Ihre Situation.</p><a href="tel:+4960473292615" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"><i class="fas fa-phone-alt me-2"></i>Beratung anfragen</a></div></div></article><article class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s"><div class="blog-item h-100"><div class="blog-img"><img src="img/blog-2.jpg" class="img-fluid w-100" alt="Individuelle Physiotherapie" loading="lazy"></div><div class="blog-centent p-4"><p class="mb-3 text-muted"><i class="fas fa-notes-medical text-primary me-2"></i>Ihre Verordnung</p><h3 class="h4">Was bringe ich zum ersten Termin mit?</h3><p class="my-4">Bitte bringen Sie Ihre gültige Heilmittelverordnung und, falls vorhanden, relevante Unterlagen zu Ihrer Behandlung mit.</p><a href="tel:+4960473292615" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"><i class="fas fa-phone-alt me-2"></i>Termin anfragen</a></div></div></article><article class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s"><div class="blog-item h-100"><div class="blog-img"><img src="img/blog-3.jpg" class="img-fluid w-100" alt="Physiotherapie zu Hause" loading="lazy"></div><div class="blog-centent p-4"><p class="mb-3 text-muted"><i class="fas fa-home text-primary me-2"></i>Hausbesuche</p><h3 class="h4">Physiotherapie bei Ihnen zu Hause</h3><p class="my-4">Wenn Sie die Praxis nicht besuchen können, prüfen wir gerne gemeinsam, ob ein Hausbesuch nach ärztlicher Verordnung möglich ist.</p><a href="tel:+4960473292615" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"><i class="fas fa-phone-alt me-2"></i>Hausbesuch anfragen</a></div></div></article></div></div>',
        );
    }
    $(".btn-primary, .btn-secondary")
      .not(".service-item .btn, .navbar .btn")
      .each(function () {
        if (!$(this).find("i").length) {
          $(this).prepend(
            '<i class="fas fa-arrow-right me-2" aria-hidden="true"></i>',
          );
        }
      });

    if (pageName === "contact.html") {
      $(".contact .section-title").after(
        '<div class="contact-quick-actions wow fadeInUp" data-wow-delay="0.2s"><a href="tel:+4960473292615" class="contact-action contact-action-phone"><i class="fas fa-phone-alt"></i><span><strong>Jetzt anrufen</strong><small>06047 / 3292615</small></span></a><a href="mailto:info@integralis-physio.de" class="contact-action contact-action-mail"><i class="fas fa-envelope"></i><span><strong>E-Mail schreiben</strong><small>Antwort auf Ihre Anfrage</small></span></a><a href="https://www.google.com/maps/search/?api=1&amp;query=Vogelsbergstra%C3%9Fe+47%2C+63674+Altenstadt" class="contact-action contact-action-map" target="_blank" rel="noopener"><i class="fas fa-map-marker-alt"></i><span><strong>Route planen</strong><small>Alte Molkerei, Altenstadt</small></span></a></div>',
      );
      $(".contact-form").addClass("contact-form-panel");
    }

    $(".footer .row").html(
      '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="text-white mb-4"><i class="fas fa-heartbeat footer-title-icon"></i>Integralis</h4><p>Praxis fuer Physiotherapie in der Alten Molkerei in Altenstadt.</p></div></div>' +
        '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="mb-4 text-white"><i class="fas fa-compass footer-title-icon"></i>Schnellzugriff</h4><a href="index.html"><i class="fas fa-angle-right me-2"></i> Startseite</a><a href="about.html"><i class="fas fa-angle-right me-2"></i> Praxis</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Therapieangebote</a><a href="contact.html"><i class="fas fa-angle-right me-2"></i> Kontakt</a><a href="#impressum" data-legal-modal="#impressumModal"><i class="fas fa-angle-right me-2"></i> Impressum</a><a href="#datenschutz" data-legal-modal="#datenschutzModal"><i class="fas fa-angle-right me-2"></i> Datenschutz</a></div></div>' +
        '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="mb-4 text-white"><i class="fas fa-notes-medical footer-title-icon"></i>Therapieangebote</h4><a href="service.html"><i class="fas fa-angle-right me-2"></i> Klassische Massage</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Krankengymnastik</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Bobath</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Lymphdrainage</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Wärme- und Kältetherapie</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Hausbesuche</a></div></div>' +
        '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="mb-4 text-white"><i class="fas fa-address-card footer-title-icon"></i>Kontakt</h4><a href="https://www.google.com/maps/search/?api=1&amp;query=Vogelsbergstra%C3%9Fe+47%2C+63674+Altenstadt"><i class="fa fa-map-marker-alt me-2"></i> Vogelsbergstrasse 47, 63674 Altenstadt</a><a href="mailto:info@integralis-physio.de"><i class="fas fa-envelope me-2"></i> info@integralis-physio.de</a><a href="tel:+4960473292615"><i class="fas fa-phone me-2"></i> 06047 / 3292615</a><span class="mb-3"><i class="fas fa-clock me-2"></i> Mo + Mi 10 - 19 Uhr</span></div></div>',
    );
    $(".copyright .text-white")
      .first()
      .html(
        '<a href="index.html"><i class="fas fa-copyright text-light me-2"></i>Integralis Praxis fuer Physiotherapie</a>',
      );
    $(".copyright .text-md-end")
      .contents()
      .filter(function () {
        return this.nodeType === 3;
      })
      .remove();
    $(".copyright .text-md-end a")
      .attr("href", "https://easytechit.de/")
      .text("Easy Tech Solutions")
      .before("Gestaltet von ");

    var serviceDetails = {
      "Klassische Massage": [
        "Klassische Massage",
        "Gezielte Massagegriffe helfen, verspannte Muskulatur zu lockern und die Durchblutung des Gewebes zu unterstützen.",
        "Geeignet bei muskulären Verspannungen und als ergänzende Maßnahme innerhalb Ihrer physiotherapeutischen Behandlung.",
      ],
      Krankengymnastik: [
        "Krankengymnastik",
        "Die Behandlung verbindet individuell angeleitete Übungen mit therapeutischen Maßnahmen für Kraft, Beweglichkeit und Koordination.",
        "Geeignet für Menschen, die Bewegungsabläufe verbessern, Beschwerden reduzieren oder ihre Belastbarkeit steigern möchten.",
      ],
      "Krankengymnastik nach Bobath": [
        "Krankengymnastik nach Bobath",
        "Die neurologische Behandlung nach Bobath unterstützt funktionelle Bewegungen und orientiert sich an Ihren persönlichen Fähigkeiten.",
        "Geeignet bei neurologischen Erkrankungen oder nach neurologischen Beeinträchtigungen.",
      ],
      Lymphdrainage: [
        "Lymphdrainage",
        "Sanfte, rhythmische Griffe unterstützen den Lymphabfluss und können Schwellungen im Gewebe reduzieren.",
        "Geeignet bei ärztlich verordneter Behandlung von Lymphödemen oder nach bestimmten Eingriffen.",
      ],
      Kaeltetherapie: [
        "Kaeltetherapie",
        "Kälte wird gezielt als ergänzende therapeutische Maßnahme eingesetzt und auf Ihre Behandlung abgestimmt.",
        "Geeignet bei Beschwerden, bei denen eine lokale Kälteanwendung sinnvoll ist.",
      ],
      Waermetherapie: [
        "Waermetherapie",
        "Wärmeanwendungen können die Durchblutung fördern und verspannte Muskulatur auf die weitere Behandlung vorbereiten.",
        "Geeignet als ergänzende Maßnahme bei muskulären Verspannungen und eingeschränkter Beweglichkeit.",
      ],
      Hausbesuche: [
        "Hausbesuche",
        "Wenn ein Besuch in der Praxis nicht möglich ist, führen wir die physiotherapeutische Behandlung nach ärztlicher Verordnung bei Ihnen zu Hause durch.",
        "Geeignet für Patientinnen und Patienten mit eingeschränkter Mobilität.",
      ],
      "Alle Kassen und Privatrezepte": [
        "Behandlung auf Verordnung",
        "Wir behandeln gesetzlich und privat Versicherte auf Grundlage einer ärztlichen Verordnung.",
        "Bringen Sie Ihre gültige Verordnung zum ersten Termin mit.",
      ],
    };

    $("body").append(
      '<div class="modal fade" id="serviceModal" tabindex="-1" aria-labelledby="serviceModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered"><div class="modal-content integralis-modal"><div class="modal-header"><h2 class="modal-title h4" id="serviceModalTitle"></h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button></div><div class="modal-body"><p id="serviceModalDescription"></p><h3 class="h5">Für wen ist diese Leistung geeignet?</h3><p id="serviceModalAudience"></p><h3 class="h5">Ihr nächster Schritt</h3><p>In einem persönlichen Gespräch klären wir, ob diese Behandlung zu Ihrer Verordnung und Ihren Zielen passt.</p></div><div class="modal-footer"><a href="tel:+4960473292615" class="btn btn-primary">Jetzt Termin vereinbaren</a></div></div></div></div><div class="modal fade" id="impressumModal" tabindex="-1" aria-labelledby="impressumModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered"><div class="modal-content integralis-modal"><div class="modal-header"><h2 class="modal-title h4" id="impressumModalTitle">Impressum</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button></div><div class="modal-body"><h3 class="h5">Angaben gemäß § 5 TMG</h3><p>Integralis Praxis für Physiotherapie<br>Nico Gugliotta<br>Vogelsbergstrasse 47, Alte Molkerei<br>63674 Altenstadt</p><h3 class="h5">Kontakt</h3><p>Telefon: <a href="tel:+4960473292615">06047 / 3292615</a><br>E-Mail: <a href="mailto:info@integralis-physio.de">info@integralis-physio.de</a></p><h3 class="h5">Verantwortlich für den Inhalt</h3><p>Nico Gugliotta, Vogelsbergstrasse 47, 63674 Altenstadt</p><p class="small text-muted mb-0">Bitte vor Veröffentlichung gegebenenfalls Berufsbezeichnung, zuständige Kammer, Aufsichtsbehörde und Umsatzsteuer-Identifikationsnummer ergänzen.</p></div></div></div></div><div class="modal fade" id="datenschutzModal" tabindex="-1" aria-labelledby="datenschutzModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered"><div class="modal-content integralis-modal"><div class="modal-header"><h2 class="modal-title h4" id="datenschutzModalTitle">Datenschutzerklärung</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button></div><div class="modal-body"><p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verarbeitet Daten nur, soweit dies für die technische Bereitstellung und Ihre Kontaktaufnahme erforderlich ist.</p><h3 class="h5">Verantwortliche Stelle</h3><p>Integralis Praxis für Physiotherapie, Nico Gugliotta, Vogelsbergstrasse 47, 63674 Altenstadt<br><a href="mailto:info@integralis-physio.de">info@integralis-physio.de</a></p><h3 class="h5">Kontaktaufnahme</h3><p>Ihre Angaben verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage und geben sie nicht ohne Ihre Einwilligung weiter.</p><h3 class="h5">Ihre Rechte</h3><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch. Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.</p><p class="small text-muted mb-0">Bitte diese Datenschutzerklärung vor Veröffentlichung rechtlich prüfen und um Angaben zu Hosting, Server-Protokollen, Karten und weiteren eingesetzten Diensten ergänzen.</p></div></div></div></div>',
    );

    document.querySelectorAll(".modal .btn-close").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var modal = button.closest(".modal");
        modal.classList.remove("show");
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        document
          .querySelectorAll(".modal-backdrop")
          .forEach(function (backdrop) {
            backdrop.remove();
          });
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "";
      });
    });

    $(document).on("click", ".service-item, .service-item a", function (event) {
      var detail =
        serviceDetails[
          $(this).closest(".service-item").find("h5").text().trim()
        ];
      if (!detail) return;
      event.preventDefault();
      $("#serviceModalTitle").text(detail[0]);
      $("#serviceModalDescription").text(detail[1]);
      $("#serviceModalAudience").text(detail[2]);
      var serviceModal = document.getElementById("serviceModal");
      (
        bootstrap.Modal.getInstance(serviceModal) ||
        new bootstrap.Modal(serviceModal)
      ).show();
    });

    $(".footer [data-legal-modal]").on("click", function (event) {
      event.preventDefault();
      var modal = document.querySelector($(this).attr("data-legal-modal"));
      (bootstrap.Modal.getInstance(modal) || new bootstrap.Modal(modal)).show();
    });

    var clearModalOverlay = function () {
      if (!$(".modal.show").length) {
        $(".modal-backdrop").remove();
        $("body").removeClass("modal-open").css("padding-right", "");
      }
    };

    $(".modal").on("hidden.bs.modal", clearModalOverlay);
    $(document).on(
      "click",
      ".modal [data-bs-dismiss='modal']",
      function (event) {
        event.preventDefault();
        var modal = $(this).closest(".modal")[0];
        var modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
        window.setTimeout(clearModalOverlay, 500);
      },
    );

    $(document).on("submit", "#contactForm", function (event) {
      event.preventDefault();
      var form = this;
      var status = $("#contactFormStatus");
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        status
          .removeClass("d-none alert-success")
          .addClass("alert-danger")
          .text("Bitte füllen Sie alle Pflichtfelder korrekt aus.");
        return;
      }
      var submitButton = $(form).find("button[type='submit']");
      submitButton
        .prop("disabled", true)
        .html(
          '<i class="fas fa-spinner fa-spin me-2" aria-hidden="true"></i>Anfrage wird vorbereitet',
        );
      var subject = "Kontaktanfrage von " + $("#contactName").val();
      var body =
        "Name: " +
        $("#contactName").val() +
        "\nE-Mail: " +
        $("#contactEmail").val() +
        "\nTelefon: " +
        $("#contactPhone").val() +
        "\nBevorzugte Rückrufzeit: " +
        $("#contactPreferredTime").val() +
        "\nBetreff: " +
        $("#contactSubject").val() +
        "\n\nNachricht:\n" +
        $("#contactMessage").val();
      status
        .removeClass("d-none alert-danger")
        .addClass("alert-success")
        .text(
          "Ihre E-Mail-Anwendung wird geöffnet. Bitte senden Sie die vorbereitete Nachricht dort ab.",
        );
      window.setTimeout(function () {
        submitButton
          .prop("disabled", false)
          .html(
            '<i class="fas fa-envelope me-2" aria-hidden="true"></i>Anfrage per E-Mail vorbereiten',
          );
        window.location.href =
          "mailto:info@integralis-physio.de?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(body);
      }, 350);
    });

    var pageContent = {
      "appointment.html": {
        title: "Termin vereinbaren",
        eyebrow: "Termin vereinbaren",
        heading: "Wir nehmen uns Zeit fuer Sie.",
        text: "Rufen Sie uns an, um einen passenden Termin fuer Ihre Behandlung zu vereinbaren.",
        cards: [
          [
            "Oeffnungszeiten",
            "Montag und Mittwoch: 10 - 19 Uhr<br>Dienstag und Donnerstag: 08 - 16 Uhr<br>Freitag: 08 - 14 Uhr",
          ],
          [
            "Praxisadresse",
            "Vogelsbergstrasse 47, Alte Molkerei<br>63674 Altenstadt",
          ],
        ],
      },
      "feature.html": {
        title: "Ihre Praxis",
        eyebrow: "Integralis",
        heading: "Ganzheitlich behandeln. Persoenlich begleiten.",
        text: "Ihre individuellen Beschwerden, Lebensumstände und Ziele stehen im Mittelpunkt jeder Behandlung.",
        cards: [
          [
            "Seit 2010 erfahren",
            "Staatlich anerkannte Physiotherapie mit fundierter Berufserfahrung.",
          ],
          [
            "Individuell abgestimmt",
            "Behandlung und Übungen orientieren sich an Ihren persönlichen Bedürfnissen.",
          ],
          [
            "Neurologischer Schwerpunkt",
            "Krankengymnastik auf neurologischer Basis nach Bobath.",
          ],
          [
            "Alle Kassen und Privatrezepte",
            "Wir behandeln gesetzlich und privat Versicherte nach Verordnung.",
          ],
        ],
      },
      "team.html": {
        title: "Ihr Therapeut",
        eyebrow: "Ueber mich",
        heading: "Nico Gugliotta",
        text: "Seit 2010 staatlich anerkannter Physiotherapeut mit Schwerpunkt auf neurologischer physiotherapeutischer Behandlung.",
        cards: [
          [
            "Persoenlich fuer Sie da",
            "In der Praxis Integralis in der Alten Molkerei in Altenstadt.",
          ],
        ],
      },
    };

    document.documentElement.lang = "de";
    var benefitCards = [
      [
        "Erfahrung seit 2010",
        "Staatlich anerkannte Physiotherapie mit fundierter Berufserfahrung.",
      ],
      [
        "Individuelle Therapie",
        "Behandlung und Übungen werden auf Ihre persönlichen Bedürfnisse abgestimmt.",
      ],
      [
        "Neurologischer Schwerpunkt",
        "Krankengymnastik auf neurologischer Basis nach Bobath.",
      ],
      [
        "Ganzheitlicher Blick",
        "Wir berücksichtigen Beschwerden, Ursachen und Ihren Alltag.",
      ],
      [
        "Praxis in der Alten Molkerei",
        "Ihre Physiotherapiepraxis in der Vogelsbergstrasse 47 in Altenstadt.",
      ],
      [
        "Alle Kassen und Privatrezepte",
        "Wir behandeln gesetzlich und privat Versicherte nach Verordnung.",
      ],
      [
        "Hausbesuche",
        "Bei Bedarf kommen wir für Ihre physiotherapeutische Behandlung zu Ihnen.",
      ],
      [
        "Direkt erreichbar",
        "Vereinbaren Sie Ihren Termin telefonisch oder per E-Mail.",
      ],
    ];
    if (pageName === "about.html" || pageName === "service.html") {
      var benefits = $(".feature").last();
      benefits.find(".sub-title").text("Ihre Vorteile");
      benefits
        .find(".section-title h1")
        .text("Zeit fuer eine Therapie, die Sie sieht.");
      benefits
        .find(".section-title p")
        .text(
          "Im Mittelpunkt stehen Sie, Ihre Beschwerden und Ihre persönlichen Ziele. Wir nehmen uns Zeit für eine Behandlung, die zu Ihrer Lebenssituation passt.",
        );
      benefits.find(".feature-item").each(function (index) {
        var benefit = benefitCards[index];
        $(this).find("h5").text(benefit[0]);
        $(this).find("p").text(benefit[1]);
      });
      benefits
        .find(".btn")
        .attr("href", "tel:+4960473292615")
        .text("Termin vereinbaren");
    }
    if (pageName === "about.html") {
      $(".team").addClass("d-none");
    }
    if (pageContent[pageName]) {
      var content = pageContent[pageName];
      document.title = content.title + " - Integralis Physiotherapie";
      $(".bg-breadcrumb h3").text(content.title);
      $(".breadcrumb").html(
        '<li class="breadcrumb-item"><a href="index.html">Startseite</a></li><li class="breadcrumb-item active text-primary">' +
          content.title +
          "</li>",
      );
      var cards = content.cards
        .map(function (card, index) {
          return (
            '<div class="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.' +
            (index + 1) +
            's"><div class="feature-item p-4 h-100"><h5 class="mb-3"><i class="fa fa-check text-primary me-2"></i>' +
            card[0] +
            '</h5><p class="mb-0">' +
            card[1] +
            "</p></div></div>"
          );
        })
        .join("");
      var section =
        '<div class="container-fluid feature py-5"><div class="container py-5"><div class="section-title mb-5 wow fadeInUp"><div class="sub-style"><h4 class="sub-title px-3 mb-0">' +
        content.eyebrow +
        '</h4></div><h1 class="display-3 mb-4">' +
        content.heading +
        '</h1><p class="mb-0">' +
        content.text +
        '</p></div><div class="row g-4 justify-content-center">' +
        cards +
        '</div><div class="text-center mt-5"><a href="tel:+4960473292615" class="btn btn-primary rounded-pill text-white py-3 px-5">Termin vereinbaren</a></div></div></div>';
      $(".bg-breadcrumb").nextUntil(".footer").remove();
      $(".bg-breadcrumb").after(section);
    }

    if (pageName === "testimonial.html") {
      document.title = "Hinweise - Integralis Physiotherapie";
      $(".bg-breadcrumb h3").text("Ihre Behandlung");
      $(".breadcrumb").html(
        '<li class="breadcrumb-item"><a href="index.html">Startseite</a></li><li class="breadcrumb-item active text-primary">Ihre Behandlung</li>',
      );
      $(".bg-breadcrumb").nextUntil(".footer").remove();
      $(".bg-breadcrumb").after(
        '<div class="container-fluid feature py-5"><div class="container py-5"><div class="section-title mb-5"><div class="sub-style"><h4 class="sub-title px-3 mb-0">Integralis</h4></div><h1 class="display-3 mb-4">Gemeinsam den passenden Weg finden.</h1><p class="mb-0">Eine erfolgreiche Therapie beginnt mit einem persönlichen Gespräch. Wir klären Ihre Ziele und den passenden Behandlungsweg bei Ihrem Termin.</p></div><div class="text-center"><a href="tel:+4960473292615" class="btn btn-primary rounded-pill text-white py-3 px-5">Termin vereinbaren</a></div></div></div>',
      );
    }

    if (pageName === "blog.html") {
      document.title = "Wissenswertes - Integralis Physiotherapie";
      $(".bg-breadcrumb h3").text("Wissenswertes");
      $(".breadcrumb").html(
        '<li class="breadcrumb-item"><a href="index.html">Startseite</a></li><li class="breadcrumb-item active text-primary">Wissenswertes</li>',
      );
      $(".bg-breadcrumb").nextUntil(".footer").remove();
      $(".bg-breadcrumb").after(
        '<div class="container-fluid feature py-5"><div class="container py-5"><div class="section-title mb-5"><div class="sub-style"><h4 class="sub-title px-3 mb-0">Physiotherapie</h4></div><h1 class="display-3 mb-4">Ihre Fragen im Mittelpunkt.</h1><p class="mb-0">Ob Krankengymnastik, Lymphdrainage, neurologische Behandlung nach Bobath oder Hausbesuch: Wir informieren Sie im persönlichen Gespräch über die passende Therapie.</p></div><div class="text-center"><a href="mailto:info@integralis-physio.de" class="btn btn-secondary rounded-pill text-white py-3 px-5">E-Mail schreiben</a></div></div></div>',
      );
    }

    if (pageName === "404.html") {
      document.title = "Seite nicht gefunden - Integralis Physiotherapie";
      $(".bg-breadcrumb h3").text("Seite nicht gefunden");
      $(".breadcrumb").html(
        '<li class="breadcrumb-item"><a href="index.html">Startseite</a></li><li class="breadcrumb-item active text-primary">404</li>',
      );
      $(".bg-breadcrumb").nextUntil(".footer").remove();
      $(".bg-breadcrumb").after(
        '<div class="container-fluid py-5"><div class="container py-5 text-center"><i class="bi bi-exclamation-triangle display-1 text-secondary"></i><h1 class="display-1">404</h1><h2 class="mb-4">Diese Seite wurde nicht gefunden.</h2><p class="mb-4">Zurück zur Startseite oder direkt Kontakt aufnehmen.</p><a class="btn btn-primary rounded-pill py-3 px-5" href="index.html">Zur Startseite</a></div></div>',
      );
    }
  });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Hero Header carousel
  $(".header-carousel").owlCarousel({
    animateOut: "slideOutDown",
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // International carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
