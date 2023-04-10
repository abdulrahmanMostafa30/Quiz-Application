import translations from "../js/translations.js";
var userFromLocalStorage;
var loginDone = false
var languageSelector = document.querySelector("select");

if (languageSelector) {
  languageSelector.addEventListener("change", (event) => {
    localStorage.setItem("lang", event.target.value);
    // location.reload();
    setLanguage(event.target.value);
  });
}


window.addEventListener("DOMContentLoaded", function () {
  var language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  document.getElementById('languageList').value = language;
  setLanguage(language);
});

var setLanguage = (language) => {

  var elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    var translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
Object.keys(localStorage).forEach(function (key) {
  if (key != 'lang' || key != 'theme') {
    try {
      userFromLocalStorage = JSON.parse(localStorage.getItem(key));
      if (userFromLocalStorage.login === true) {
        // alert('logged in successfully');
        document.getElementById('SignUpNav').style.display = 'none'
        document.getElementById('LogInNav').setAttribute('data-i18n', 'logout')
        document.getElementById('LogInNav').href = "#";
        loginDone = true
        if (window.location.pathname.indexOf('index.html')) {
          document.getElementById('SignUpHome').setAttribute('data-i18n', 'quizes')
          document.getElementById('SignUpHome').href = 'dashboard.html'
        }
        if (window.location.pathname.indexOf('dashboard.html')) {
          alert('dashboard')
          document.getElementById('uName').textContent = userFromLocalStorage.name
        }
        return
      }
    }
    catch {
    }
  }
});
if (!loginDone) {
  if (window.location.pathname.indexOf('dashboard.html')) {
    document.getElementById('uName').setAttribute('data-i18n', 'anonymous')
  }
}




$(window).on('load', function () {
  $(".se-pre-con").fadeOut(500);;

});
