import { generateId } from "../utils/GenerateId.js";


export class Notes {
  /**@param {{ title: string; content: string}} */
  constructor(data) {
    this.title = data.title
    this.content = data.content
    this.id = generateId()
    this.createdAt() = new Date()
    this.lastEdited() = new Date()
  }
}