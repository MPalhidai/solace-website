/* SOLACE — minimal progressive enhancement. The site works without JavaScript. */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); toggle.focus(); }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Forms are not connected to a backend yet (see README). Until a form
  // endpoint is configured in the form's action attribute, show a friendly
  // message instead of submitting.
  var forms = document.querySelectorAll("form[data-placeholder-form]");
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (action === "" || action === "#") {
        e.preventDefault();
        var status = form.querySelector(".form-status");
        if (status) {
          status.innerHTML = "";
          var p = document.createElement("p");
          p.className = "notice";
          p.textContent = "Thank you. This form is not connected yet, so your message was not sent. " +
            "Please email us directly using the address on our Contact page.";
          status.appendChild(p);
          status.focus();
        }
      }
    });
  });
})();
