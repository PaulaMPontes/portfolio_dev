(function () {
  "use strict";

  var copy = {
    pt: {
      homeLabel: "Paula Pontes — início",
      menu: "menu",
      close: "fechar",
      nav: ["sobre", "projetos", "contato"],
      role: "PAULA PONTES — DESENVOLVEDORA WEB",
      heroFirst: "Código que",
      heroSecond: "faz",
      heroAccent: "acontecer.",
      heroDescription:
        "Transformo ideias em experiências digitais funcionais, expressivas e feitas para pessoas.",
      viewProjects: "Ver projetos",
      imageCredit: "VIDEO POR",
      aboutLabel: "01 / SOBRE",
      aboutTitle: "Aprendendo, construindo",
      aboutTitleSecond: "e entendendo como tudo funciona.",
      aboutParagraphs: [
        "Minha trajetória na tecnologia começou pela curiosidade de entender o que existe por trás das telas. Desde então, venho transformando estudo em projetos e projetos em aprendizado.",
        "Tenho interesse tanto pela lógica que sustenta uma aplicação quanto pelos detalhes que tornam seu uso mais claro e agradável."
      ],
      education: "FORMAÇÃO",
      studies: [
        {
          title: "Engenharia de Software",
          institution: "Pontífica Universidade Católica (PUCPR) — 2025 / --"
        },
        {
          title: "Técnica em Desenvolvimento de Sistemas",
          institution: "ETEC — 2023/2024"
        }
      ],
      skills: ["FRONTEND", "BACKEND", "APIS", "INTERFACES WEB"],
      projectsLabel: "02 / PROJETOS",
      projectsTitle: "Alguns projetos que já construí.",
      projects: [
        { title: "Printly", description: "Conecta quem precisa imprimir a quem oferece serviços de impressão." },
        { title: "EsperaZero", description: "Sistema de gerenciamento de filas de espera para atendimento em UPA, desenvolvido como projeto de TCC." },
        { title: "Experimento digital", description: "Frontend e interação" }
      ],
      openProject: "Abrir",
      contactLabel: "03 / CONTATO",
      openToWork: "ABERTA A NOVOS PROJETOS E OPORTUNIDADES",
      contactTitle: "Tem uma ideia?",
      contactTitleSecond: "Vamos conversar.",
      available: "DISPONÍVEL PARA CONVERSAR",
      contactDescription:
        "Seja para construir um projeto, colaborar em uma ideia ou simplesmente trocar experiências sobre tecnologia.",
      startConversation: "começar uma conversa",
      statusLabel: "Status online, tempo de resposta de aproximadamente 24 horas",
      resumeLabel: "insira seu e-mail se quiser receber meu currículo",
      emailPlaceholder: "seu@email.com",
      send: "Enviar",
      sent: "Enviado! Confira seu e-mail (e a caixa de spam). Obrigada!",
      invalidEmail: "E-mail inválido. Confira e tente de novo.",
      rateLimited: "Muitas tentativas. Tente novamente mais tarde.",
      sendError: "Não consegui enviar agora. Tente novamente em instantes.",
      elsewhere: "onde me encontrar",
      email: "e-mail",
      rights: "2026 TODOS OS DIREITOS RESERVADOS",
      backToTop: "voltar ao topo ↑"
    },
    en: {
      homeLabel: "Paula Pontes — home",
      menu: "menu",
      close: "close",
      nav: ["about", "projects", "contact"],
      role: "PAULA PONTES — WEB DEVELOPER",
      heroFirst: "Code that",
      heroSecond: "makes things",
      heroAccent: "happen.",
      heroDescription:
        "I turn ideas into functional, expressive digital experiences made for people.",
      viewProjects: "View projects",
      imageCredit: "VIDEO BY",
      aboutLabel: "01 / ABOUT",
      aboutTitle: "Learning, building",
      aboutTitleSecond: "and understanding how everything works.",
      aboutParagraphs: [
        "My journey in technology began with the curiosity to understand what happens behind the screen. Since then, I have turned studying into projects and projects into learning.",
        "I am interested in both the logic that supports an application and the details that make it clearer and more enjoyable to use."
      ],
      education: "EDUCATION",
      studies: [
        {
          title: "Software Engineering",
          institution: "Pontifical Catholic University (PUCPR) — 2025 / --"
        },
        {
          title: "Systems Development Technician",
          institution: "ETEC — 2023/2024"
        }
      ],
      skills: ["FRONTEND", "BACKEND", "APIS", "WEB INTERFACES"],
      projectsLabel: "02 / PROJECTS",
      projectsTitle: "A few projects I have built.",
      projects: [
        { title: "Printly", description: "Connects people who need printing with those who offer printing services." },
        { title: "EsperaZero", description: "Waiting-queue management system for emergency care (UPA) service, developed as a capstone project." },
        { title: "Digital experiment", description: "Frontend and interaction" }
      ],
      openProject: "Open",
      contactLabel: "03 / CONTACT",
      openToWork: "OPEN TO NEW PROJECTS AND OPPORTUNITIES",
      contactTitle: "Have an idea?",
      contactTitleSecond: "Let's talk.",
      available: "AVAILABLE TO TALK",
      contactDescription:
        "Whether you want to build a project, collaborate on an idea or simply exchange experiences about technology.",
      startConversation: "start a conversation",
      statusLabel: "Online status, approximate response time of 24 hours",
      resumeLabel: "enter your email if you would like to receive my résumé",
      emailPlaceholder: "your@email.com",
      send: "Send",
      sent: "Sent! Check your email (and your spam folder). Thank you!",
      invalidEmail: "Invalid email. Please check it and try again.",
      rateLimited: "Too many attempts. Please try again later.",
      sendError: "I couldn't send it right now. Please try again shortly.",
      elsewhere: "where find me",
      email: "email",
      rights: "2026 ALL RIGHTS RESERVED",
      backToTop: "back to top ↑"
    }
  };

  var language = "pt";
  var menuOpen = false;

  function lookup(text, path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? value : value[key];
    }, text);
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  function applyLanguage() {
    var text = copy[language];

    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = lookup(text, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var value = lookup(text, parts[1]);
        if (typeof value === "string") el.setAttribute(parts[0], value);
      });
    });

    document.querySelectorAll("[data-project-link]").forEach(function (link) {
      var project = text.projects[Number(link.getAttribute("data-project-link"))];
      link.setAttribute("aria-label", text.openProject + " " + project.title);
    });

    var toggle = $("#language-toggle");
    toggle.setAttribute(
      "aria-label",
      language === "pt" ? "Change language to English" : "Mudar idioma para português"
    );
    toggle.querySelectorAll("[data-lang]").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === language);
    });

    updateMenuButton();
  }

  /* Menu mobile */
  function updateMenuButton() {
    var button = $("#menu-button");
    button.textContent = menuOpen ? copy[language].close : copy[language].menu;
    button.setAttribute("aria-expanded", String(menuOpen));
    $("#nav").classList.toggle("nav--open", menuOpen);
  }

  function setMenu(open) {
    menuOpen = open;
    updateMenuButton();
  }

  /* Formulário de e-mail: envia para enviar.php (PHPMailer) e mostra o resultado */
  var errorKeys = {
    invalid_email: "invalidEmail",
    rate_limited: "rateLimited"
  };

  function initForm() {
    var form = $("#resume-form");
    var input = $("#email");
    var success = $("#success");
    var error = $("#error");
    var button = form.querySelector("button[type=submit]");

    function hideMessages() {
      success.hidden = true;
      error.hidden = true;
    }

    function showError(code) {
      error.textContent = copy[language][errorKeys[code] || "sendError"];
      error.hidden = false;
    }

    input.addEventListener("input", hideMessages);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!input.value.trim() || button.disabled) return;

      hideMessages();
      button.disabled = true;

      var data = new FormData(form);
      data.append("lang", language);

      fetch(form.getAttribute("action"), {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          return response.json().catch(function () {
            return { ok: false, code: "error" };
          });
        })
        .then(function (result) {
          if (result.ok) {
            success.hidden = false;
            input.value = "";
          } else {
            showError(result.code);
          }
        })
        .catch(function () {
          showError("error");
        })
        .then(function () {
          button.disabled = false;
        });
    });
  }

  function init() {
    $("#language-toggle").addEventListener("click", function () {
      language = language === "pt" ? "en" : "pt";
      applyLanguage();
    });

    $("#menu-button").addEventListener("click", function () {
      setMenu(!menuOpen);
    });

    document.querySelectorAll("#nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    if ($("#resume-form")) initForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  
})();
