import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";
import { loadState, saveState } from "../utils/Store.js";

class NoteFileService {
  updateNote(updatedContent) {
    const noteFile = AppState.activeNoteFile
    noteFile.content = updatedContent
    AppState.emit('activeNoteFile')
  }


  createNoteFile(rawNoteFile) {
    const noteFiles = AppState.noteFiles
    const newNoteFile = new Notes(rawNoteFile)
    noteFiles.push(newNoteFile)
    this.saveNoteFiles()

  }

  saveNoteFiles() {
    saveState('noteFiles', AppState.noteFiles)
  }
  loadNoteFiles() {
    const noteFiles = loadState('noteFiles', [Notes])
    AppState.noteFiles = noteFiles
  }

  setActiveNote(noteFileId) {
    const noteFiles = AppState.noteFiles
    const foundNoteFile = noteFiles.find(noteFile => noteFile.id == noteFileId)
    console.log('found a note file', foundNoteFile);
    AppState.activeNoteFile = foundNoteFile

  }
  editActiveNoteFile() {
    const noteFile = AppState.activeNoteFile
    noteFile.lastEditedAt = new Date()
    AppState.emit('activeNoteFile')
  }


}

export const noteFileService = new NoteFileService()