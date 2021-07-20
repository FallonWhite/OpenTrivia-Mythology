import MythsController from "./Controllers/MythsController.js";

class App {
  mythsController = new MythsController()
}

window["app"] = new App();
