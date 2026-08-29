(function ($) {
  "use strict";

  $(function () {
    var pageName = window.location.pathname.split("/").pop() || "index.html";
    var navigation = [
      ["index.html", "Startseite"],
      ["about.html", "Praxis"],
      ["service.html", "Therapieangebote"],
      ["appointment.html", "Termin"],
      ["contact.html", "Kontakt"],
    ];
    var links = navigation
      .map(function (item) {
        var active = item[0] === pageName ? " active" : "";
        return (
          '<a href="' +
          item[0] +
          '" class="nav-item nav-link' +
          active +
          '">' +
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
      '<img class="integralis-logo" src="img/brave_screenshot_www.google.de.png" alt="Integralis Praxis fuer Physiotherapie">',
    );
    $(".navbar-nav").html(links);
    $(".navbar .navbar-collapse > .btn")
      .attr("href", "tel:+4960473292615")
      .text("Termin vereinbaren");
    $(".sr-only").text("Wird geladen...");

    $(".footer .row").html(
      '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="text-white mb-4">Integralis</h4><p>Praxis fuer Physiotherapie in der Alten Molkerei in Altenstadt.</p></div></div>' +
        '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="mb-4 text-white">Schnellzugriff</h4><a href="index.html"><i class="fas fa-angle-right me-2"></i> Startseite</a><a href="about.html"><i class="fas fa-angle-right me-2"></i> Praxis</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Therapieangebote</a><a href="contact.html"><i class="fas fa-angle-right me-2"></i> Kontakt</a><a href="#impressum" data-bs-toggle="modal" data-bs-target="#impressumModal"><i class="fas fa-angle-right me-2"></i> Impressum</a><a href="#datenschutz" data-bs-toggle="modal" data-bs-target="#datenschutzModal"><i class="fas fa-angle-right me-2"></i> Datenschutz</a></div></div>' +
        '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="mb-4 text-white">Therapieangebote</h4><a href="service.html"><i class="fas fa-angle-right me-2"></i> Klassische Massage</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Krankengymnastik</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Bobath</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Lymphdrainage</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Wärme- und Kältetherapie</a><a href="service.html"><i class="fas fa-angle-right me-2"></i> Hausbesuche</a></div></div>' +
        '<div class="col-md-6 col-lg-6 col-xl-3"><div class="footer-item d-flex flex-column"><h4 class="mb-4 text-white">Kontakt</h4><a href="https://www.google.com/maps/search/?api=1&amp;query=Vogelsbergstra%C3%9Fe+47%2C+63674+Altenstadt"><i class="fa fa-map-marker-alt me-2"></i> Vogelsbergstrasse 47, 63674 Altenstadt</a><a href="mailto:info@integralis-physio.de"><i class="fas fa-envelope me-2"></i> info@integralis-physio.de</a><a href="tel:+4960473292615"><i class="fas fa-phone me-2"></i> 06047 / 3292615</a><span class="mb-3"><i class="fas fa-clock me-2"></i> Mo + Mi 10 - 19 Uhr</span></div></div>',
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
    $(".copyright .text-md-end a").before("Gestaltet von ");

    var serviceDetails = {
      "Klassische Massage": ["Klassische Massage", "Gezielte Massagegriffe helfen, verspannte Muskulatur zu lockern und die Durchblutung des Gewebes zu unterstützen.", "Geeignet bei muskulären Verspannungen und als ergänzende Maßnahme innerhalb Ihrer physiotherapeutischen Behandlung."],
      "Krankengymnastik": ["Krankengymnastik", "Die Behandlung verbindet individuell angeleitete Übungen mit therapeutischen Maßnahmen für Kraft, Beweglichkeit und Koordination.", "Geeignet für Menschen, die Bewegungsabläufe verbessern, Beschwerden reduzieren oder ihre Belastbarkeit steigern möchten."],
      "Krankengymnastik nach Bobath": ["Krankengymnastik nach Bobath", "Die neurologische Behandlung nach Bobath unterstützt funktionelle Bewegungen und orientiert sich an Ihren persönlichen Fähigkeiten.", "Geeignet bei neurologischen Erkrankungen oder nach neurologischen Beeinträchtigungen."],
      "Lymphdrainage": ["Lymphdrainage", "Sanfte, rhythmische Griffe unterstützen den Lymphabfluss und können Schwellungen im Gewebe reduzieren.", "Geeignet bei ärztlich verordneter Behandlung von Lymphödemen oder nach bestimmten Eingriffen."],
      "Kaeltetherapie": ["Kaeltetherapie", "Kälte wird gezielt als ergänzende therapeutische Maßnahme eingesetzt und auf Ihre Behandlung abgestimmt.", "Geeignet bei Beschwerden, bei denen eine lokale Kälteanwendung sinnvoll ist."],
      "Waermetherapie": ["Waermetherapie", "Wärmeanwendungen können die Durchblutung fördern und verspannte Muskulatur auf die weitere Behandlung vorbereiten.", "Geeignet als ergänzende Maßnahme bei muskulären Verspannungen und eingeschränkter Beweglichkeit."],
      "Hausbesuche": ["Hausbesuche", "Wenn ein Besuch in der Praxis nicht möglich ist, führen wir die physiotherapeutische Behandlung nach ärztlicher Verordnung bei Ihnen zu Hause durch.", "Geeignet für Patientinnen und Patienten mit eingeschränkter Mobilität."],
      "Alle Kassen und Privatrezepte": ["Behandlung auf Verordnung", "Wir behandeln gesetzlich und privat Versicherte auf Grundlage einer ärztlichen Verordnung.", "Bringen Sie Ihre gültige Verordnung zum ersten Termin mit."]
    };

    $("body").append('<div class="modal fade" id="serviceModal" tabindex="-1" aria-labelledby="serviceModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered"><div class="modal-content integralis-modal"><div class="modal-header"><h2 class="modal-title h4" id="serviceModalTitle"></h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button></div><div class="modal-body"><p id="serviceModalDescription"></p><h3 class="h5">Für wen ist diese Leistung geeignet?</h3><p id="serviceModalAudience"></p><h3 class="h5">Ihr nächster Schritt</h3><p>In einem persönlichen Gespräch klären wir, ob diese Behandlung zu Ihrer Verordnung und Ihren Zielen passt.</p></div><div class="modal-footer"><a href="tel:+4960473292615" class="btn btn-primary">Jetzt Termin vereinbaren</a></div></div></div></div><div class="modal fade" id="impressumModal" tabindex="-1" aria-labelledby="impressumModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered"><div class="modal-content integralis-modal"><div class="modal-header"><h2 class="modal-title h4" id="impressumModalTitle">Impressum</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button></div><div class="modal-body"><h3 class="h5">Angaben gemäß § 5 TMG</h3><p>Integralis Praxis für Physiotherapie<br>Nico Gugliotta<br>Vogelsbergstrasse 47, Alte Molkerei<br>63674 Altenstadt</p><h3 class="h5">Kontakt</h3><p>Telefon: <a href="tel:+4960473292615">06047 / 3292615</a><br>E-Mail: <a href="mailto:info@integralis-physio.de">info@integralis-physio.de</a></p><h3 class="h5">Verantwortlich für den Inhalt</h3><p>Nico Gugliotta, Vogelsbergstrasse 47, 63674 Altenstadt</p><p class="small text-muted mb-0">Bitte vor Veröffentlichung gegebenenfalls Berufsbezeichnung, zuständige Kammer, Aufsichtsbehörde und Umsatzsteuer-Identifikationsnummer ergänzen.</p></div></div></div></div><div class="modal fade" id="datenschutzModal" tabindex="-1" aria-labelledby="datenschutzModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered"><div class="modal-content integralis-modal"><div class="modal-header"><h2 class="modal-title h4" id="datenschutzModalTitle">Datenschutzerklärung</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button></div><div class="modal-body"><p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verarbeitet Daten nur, soweit dies für die technische Bereitstellung und Ihre Kontaktaufnahme erforderlich ist.</p><h3 class="h5">Verantwortliche Stelle</h3><p>Integralis Praxis für Physiotherapie, Nico Gugliotta, Vogelsbergstrasse 47, 63674 Altenstadt<br><a href="mailto:info@integralis-physio.de">info@integralis-physio.de</a></p><h3 class="h5">Kontaktaufnahme</h3><p>Ihre Angaben verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage und geben sie nicht ohne Ihre Einwilligung weiter.</p><h3 class="h5">Ihre Rechte</h3><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch. Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.</p><p class="small text-muted mb-0">Bitte diese Datenschutzerklärung vor Veröffentlichung rechtlich prüfen und um Angaben zu Hosting, Server-Protokollen, Karten und weiteren eingesetzten Diensten ergänzen.</p></div></div></div></div>');

    $(document).on("click", ".service-item, .service-item a", function (event) {
      var detail = serviceDetails[$(this).closest(".service-item").find("h5").text().trim()];
      if (!detail) return;
      event.preventDefault();
      $("#serviceModalTitle").text(detail[0]);
      $("#serviceModalDescription").text(detail[1]);
      $("#serviceModalAudience").text(detail[2]);
      bootstrap.Modal.getOrCreateInstance(document.getElementById("serviceModal")).show();
    });

    $(document).on("submit", "#contactForm", function (event) {
      event.preventDefault();
      var form = this;
      var status = $("#contactFormStatus");
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        status.removeClass("d-none alert-success").addClass("alert-danger").text("Bitte füllen Sie alle Pflichtfelder korrekt aus.");
        return;
      }
      var subject = "Kontaktanfrage von " + $("#contactName").val();
      var body = "Name: " + $("#contactName").val() + "\nE-Mail: " + $("#contactEmail").val() + "\nTelefon: " + $("#contactPhone").val() + "\nBetreff: " + $("#contactSubject").val() + "\n\nNachricht:\n" + $("#contactMessage").val();
      status.removeClass("d-none alert-danger").addClass("alert-success").text("Ihre E-Mail-Anwendung wird geöffnet. Bitte senden Sie die vorbereitete Nachricht dort ab.");
      window.location.href = "mailto:info@integralis-physio.de?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
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
