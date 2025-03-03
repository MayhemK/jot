import { generateId } from "../utils/GenerateId.js";


export class Notes {
  /**@param {{ title: string; content: string, color: string}} data*/
  constructor(data) {
    this.title = data.title
    this.content = data.content
    this.id = generateId()
    this.color = data.color
    this.createdAt = new Date()
    this.lastEdited = new Date()
  }

  get listHTMLTemplate() {
    return `
      <div onclick="app.noteController.selectActiveNote('${this.id}')" class="card bg-purpdark text-light mb-2" role="button">
        <div class="d-flex justify-content-between card-header">
          <div class="fw-bold">${this.title}</div>
          <div>${this.createdAt}</div>
          </div>
          <div class="card-body text-start">${this.content}
          </div>
          <div>${this.id}</div>
        </div>
      </div>
    `
  }
}