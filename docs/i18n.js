(function () {
  var KEY = "cv-ecom-lang";
  var DEFAULT = "zh";
  var EN = window.CV_I18N_EN || {};

  function current() {
    var saved = localStorage.getItem(KEY);
    return saved === "en" || saved === "zh" ? saved : DEFAULT;
  }

  function apply(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem(KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.hasAttribute("data-zh")) el.setAttribute("data-zh", el.innerHTML);
      var key = el.getAttribute("data-i18n");
      if (lang === "zh") el.innerHTML = el.getAttribute("data-zh");
      else if (EN[key]) el.innerHTML = EN[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr").split(":");
      var attr = spec[0];
      var key = spec[1];
      var zhKey = "data-zh-" + attr;
      if (!el.hasAttribute(zhKey)) el.setAttribute(zhKey, el.getAttribute(attr) || "");
      if (lang === "zh") el.setAttribute(attr, el.getAttribute(zhKey));
      else if (EN[key]) el.setAttribute(attr, EN[key]);
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    var titleKey = document.body.getAttribute("data-title-key");
    if (titleKey) {
      if (!document.body.hasAttribute("data-zh-title")) {
        document.body.setAttribute("data-zh-title", document.title);
      }
      document.title = lang === "zh" ? document.body.getAttribute("data-zh-title") : (EN[titleKey] || document.title);
    }
  }

  window.setCvLang = function (lang) {
    apply(lang === "en" ? "en" : "zh");
  };

  window.CV_I18N_EN = EN;

  document.addEventListener("DOMContentLoaded", function () {
    apply(current());
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang-btn"));
      });
    });
  });
})();
