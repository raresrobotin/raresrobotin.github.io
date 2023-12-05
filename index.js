function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showLanguages() {
  hide("projects");
  hide("skills");
  hide("home");

  show("languages");
}

function showProjects() {
  hide("skills");
  hide("home");
  hide("languages");

  show("projects");
}

function showSkills() {
  hide("home");
  hide("languages");
  hide("projects");

  show("skills");
}

function showHome() {
  hide("languages");
  hide("projects");
  hide("skills");

  show("home");
}
