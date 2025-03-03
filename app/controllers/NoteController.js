import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js"



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

  createNote() {
    event.preventDefault()
    console.log('creating Note!');
    const colorInput = document.getElementById('favcolor');
    // @ts-ignore
    const colorValue = colorInput.value;
    console.log('selected color:', colorValue);
    const formElem = event.target
    const rawNoteData = getFormData(formElem)
    console.log((rawNoteData));

  }
}