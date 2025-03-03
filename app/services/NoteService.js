import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";

class NoteFileService {
  createNoteFile(rawNoteFile) {
    const noteFiles = AppState.notesFiles
    const newNoteFile = new Notes(rawNoteFile)
    noteFiles.push(newNoteFile)

  }
}

export const noteFileService = new NoteFileService()