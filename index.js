var activePage = "home";

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
  hide(activePage);
  show("languages");
  activePage = "languages";
}

function showProjects() {
  hide(activePage);
  show("projects");
  activePage = "projects";
}

function showSkills() {
  hide(activePage);
  show("skills");
  activePage = "skills";
}

function showHome() {
  hide(activePage);
  show("home");
  activePage = "home";
}
