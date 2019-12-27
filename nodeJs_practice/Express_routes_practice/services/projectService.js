const projects = require("../database/projects").projects;

class ProjectServices {
  constructor() {
    this.projects = projects;
  }

  viewAll() {
    return this.projects;
  }

  addproject(project) {
    this.projects.push(project);
    return this.projects;
  }
}

module.exports.ProjectService = ProjectServices;
