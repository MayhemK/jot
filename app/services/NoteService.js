import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";

class NoteFileService {
  createNoteFile(rawNoteFile) {
    const noteFiles = AppState.noteFiles
    const newNoteFile = new Notes(rawNoteFile)
    noteFiles.push(newNoteFile)

  }
  setActiveNote(noteFileId) {
    const noteFiles = AppState.noteFiles
    const foundNoteFile = noteFiles.find(noteFile => noteFile.id == noteFileId)
    console.log('found a note file', foundNoteFile);
    AppState.activeNoteFile = foundNoteFile

  }

}

export const noteFileService = new NoteFileService()