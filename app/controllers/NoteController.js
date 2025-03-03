import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";
import { noteFileService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js"




export class NoteController {
  constructor() {
    AppState.on('noteFiles', this.drawNoteFiles);
    AppState.on('noteFiles', this.drawNoteCount);
    AppState.on('activeNoteFile', this.drawActiveNoteFile)
    noteFileService.loadNoteFiles()
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
  // FIXME add functionality, draw after delete, confirm the state is being saved after the delete
  drawActiveNoteFile() {
    const noteFile = AppState.activeNoteFile
    const activeNoteFileElem = document.getElementById('activeNote')
    if (noteFile == null) {
      activeNoteFileElem.innerHTML = ' <img src="https://static.vecteezy.com/system/resources/previews/009/384/616/large_2x/notebook-clipart-design-illustration-free-png.png" alt="asdf">'
      return
    }
    activeNoteFileElem.innerHTML = noteFile.activeHTMLTemplate
    console.log(noteFile);

  }

  createNote() {
    event.preventDefault()
    const formElem = event.target
    const rawNoteData = getFormData(formElem)
    const colorInput = document.getElementById('favcolor');
    // @ts-ignore
    const colorValue = colorInput.value;
    rawNoteData.color = colorValue;
    console.log('selected color:', colorValue);
    console.log(rawNoteData);
    noteFileService.createNoteFile(rawNoteData);
    const newNote = AppState.noteFiles[AppState.noteFiles.length - 1];
    this.selectActiveNote(newNote.id)

  }

  selectActiveNote(noteFileId) {
    console.log('select active note with the id of' + noteFileId);
    noteFileService.setActiveNote(noteFileId)
  }
  editNoteFile() {
    console.log('activating note!', AppState.activeNoteFile);
    noteFileService.editActiveNoteFile()

  }
  // FIXME add console log, log the text the user has typed in. add log in service to log the same text. change active note content with new note
  saveNote() {
    event.preventDefault();
    const formElem = event.target;
    // @ts-ignore
    const contentFromTextArea = formElem.content.value;
    noteFileService.updateNote(contentFromTextArea);
    noteFileService.saveNoteFiles();
    console.log('saved', contentFromTextArea);
  }

  deleteNote() {
    const confirmed = window.confirm("Are you sure you want to delete ${AppState.activeNoteFile.title}?");
    if (!confirmed) {
      return
    }
    noteFileService.deleteActiveNote();
  }

  //   deleteNote() {
  //     const confirmation = confirm("Are you sure you want to delete this note?");
  //     if (confirmation) {
  //       const noteFiles = AppState.noteFiles;
  //       const noteFileIndex = noteFiles.findIndex(noteFiles => noteFiles.id == AppState.activeNoteFile.id);
  //       noteFiles.splice(noteFileIndex, 1);

  //       AppState.activeNoteFile = null;
  //     } else {
  //       console.log("Deletion cancelled");
  //     }

  //   }
  // }
}