(function () {
  var homeUrl = "/ai-academy-101-ops/";

  function initialize() {
    document.querySelectorAll("a.md-logo, a[data-md-component='logo']").forEach(function (logo) {
      logo.setAttribute("href", homeUrl);
      logo.removeAttribute("target");
      logo.removeAttribute("rel");
    });

    document.querySelectorAll(".md-header__title .md-ellipsis").forEach(function (title) {
      title.style.cursor = "pointer";
      title.addEventListener("click", function () {
        window.location.href = homeUrl;
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();