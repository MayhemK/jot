import { AppState } from "../AppState.js";



export class NoteController {
  constructor() {
    console.log('note controller loaded');
    this.drawNoteFiles()
    console.log('help');

  }
  drawNoteFiles() {
    const noteFiles = AppState.notesFiles
    let noteFilesContent = ''
    noteFiles.forEach(noteFile => noteFilesContent += noteFile.listHTMLTemplate)
    const noteFilesListElem = document.getElementById('noteCard')
    noteFilesListElem.innerHTML = noteFilesContent

  }
}