import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";
import { noteFileService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js"



export class NoteController {
  constructor() {
    AppState.on('noteFiles', this.drawNoteFiles);
    AppState.on('noteFiles', this.drawNoteCount);
    AppState.on('activeNoteFile', this.drawActiveNoteFile)
    this.drawNoteFiles()
    this.drawNoteCount()


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

  drawActiveNoteFile() {
    const noteFile = AppState.activeNoteFile
    const activeNoteFileElem = document.getElementById('activeNote')
    activeNoteFileElem.innerHTML = noteFile.activeHTMLTemplate
  }

  createNote() {
    event.preventDefault()
    const formElem = event.target
    const rawNoteData = getFormData(formElem)
    const colorInput = document.getElementById('favcolor');
    // @ts-ignore
    const colorValue = colorInput.value;
    console.log('selected color:', colorValue);
    console.log(rawNoteData);
    noteFileService.createNoteFile(rawNoteData)
  }

  selectActiveNote(noteFileId) {
    console.log('select active note with the id of' + noteFileId);
    noteFileService.setActiveNote(noteFileId)
  }
  editNoteFile() {
    console.log('activating note!', AppState.activeNoteFile);
    noteFileService.editActiveNoteFile()

  }

  saveNote() {
    event.preventDefault();
    console.log('savingNOTE!');
    const formElem = event.target;
    const contentFromTextArea = formElem.content.value;
    noteFileService.updateNote(contentFromTextArea);
    console.log('saved');


  }
}