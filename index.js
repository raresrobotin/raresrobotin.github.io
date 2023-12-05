function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showLanguages() {
  hide("projects");
  hide("skills");
  hide("home");

  var page = document.getElementById("languages");
  page.style.display = "block";
}

function showProjects() {
  hide("skills");
  hide("home");
  hide("languages");

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showSkills() {
  hide("home");
  hide("languages");
  hide("projects");

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showHome() {
  hide("languages");
  hide("projects");
  hide("skills");

  var page = document.getElementById("home");
  page.style.display = "block";
}
