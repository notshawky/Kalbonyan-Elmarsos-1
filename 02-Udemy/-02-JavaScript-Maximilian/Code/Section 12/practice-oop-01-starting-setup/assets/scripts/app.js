class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectSwitchButton();
    this.connectMoreInfoBtn();
  }
  connectMoreInfoBtn() {}
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click");
  }
}

class ProjectList {
  constructor(type) {
    projects = [];
    const projectItem = document.querySelectorAll(`#${type}-projects li`);
    for (const projectItem of projectItems) {
      this.projects.push(new ProjectItem(this.id));
    }
    console.log(this.projects);
  }
  addProject() {}

  switchProject(projectId) {
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}

App.init();
