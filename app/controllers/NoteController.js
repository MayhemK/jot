import { AppState } from "../AppState.js";
import { noteFileService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js"



export class NoteController {
  constructor() {
    AppState.on('noteFiles', this.drawNoteFiles);
    AppState.on('noteFiles', this.drawNoteCount);

    this.drawNoteFiles()
    this.drawNoteCount()
    // console.log('data from form', rawNoteData);
    // noteFileService.createNoteFile(rawNoteFile)

  }
  drawNoteFiles() {
    const noteFiles = AppState.noteFiles
    let noteFilesContent = ''
    noteFiles.forEach(noteFile => noteFilesContent += noteFile.listHTMLTemplate)
    const noteFilesListElem = document.getElementById('noteCard')
    noteFilesListElem.innerHTML = noteFilesContent
  }

  drawNoteCount() {
    const noteFiles = AppState.noteFiles
    const noteCountElem = document.getElementById('noteCount')
    noteCountElem.setAttribute('title', `${noteFiles.length} reports`)
    const boldElem = noteCountElem.querySelector('b')
    boldElem.innerText = noteFiles.length.toString()
  }

  createNote() {
    event.preventDefault()
    const formElem = event.target
    const rawNoteData = getFormData(formElem)
    console.log(rawNoteData);
    const colorInput = document.getElementById('favcolor');
    // @ts-ignore
    const colorValue = colorInput.value;
    console.log('selected color:', colorValue);
  }

  selectActiveNote(noteFileId) {
    console.log('select active note with the id of' + noteFileId);
    noteFileService.setActiveNote(noteFileId)
  }
}