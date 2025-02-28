import { NoteController } from "./controllers/NoteController.js"

class App {
  noteController = new NoteController()


}

window['app'] = new App()


