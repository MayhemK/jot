import { AppState } from "../AppState.js";



export class NoteController {
  constructor() {
    console.log('note controller loaded');
    this.drawNoteFiles()
    this.drawNoteCount()
    console.log('help');

  }
  drawNoteFiles() {
    const noteFiles = AppState.notesFiles
    let noteFilesContent = ''
    noteFiles.forEach(noteFile => noteFilesContent += noteFile.listHTMLTemplate)
    const noteFilesListElem = document.getElementById('noteCard')
    noteFilesListElem.innerHTML = noteFilesContent

  }

  drawNoteCount() {
    const noteFiles = AppState.notesFiles
    const noteCountElem = document.getElementById('noteCount')
    noteCountElem.setAttribute('title', `${noteFiles.length} reports`)
    const boldElem = noteCountElem.querySelector('b')
    boldElem.innerText = noteFiles.length.toString()
  }
}