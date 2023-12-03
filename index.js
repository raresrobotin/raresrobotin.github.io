function showLanguages() {
  var oldPage = document.getElementById("projects");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("skills");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("home");
  oldPage.style.display = "none";

  var page = document.getElementById("languages");
  page.style.display = "block";
}

function showProjects() {
  var oldPage = document.getElementById("skills");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("home");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("languages");
  oldPage.style.display = "none";

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showSkills() {
  var oldPage = document.getElementById("home");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("languages");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("projects");
  oldPage.style.display = "none";

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showHome() {
  var oldPage = document.getElementById("languages");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("projects");
  oldPage.style.display = "none";
  var oldPage = document.getElementById("skills");
  oldPage.style.display = "none";

  var page = document.getElementById("home");
  page.style.display = "block";
}
