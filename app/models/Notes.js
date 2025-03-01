import { generateId } from "../utils/GenerateId.js";


export class Notes {
  /**@param {{ title: string; content: string}} data*/
  constructor(data) {
    this.title = data.title
    this.content = data.content
    this.id = generateId()
    // this.createdAt() = new Date()
    // this.lastEdited() = new Date()
  }

  get listHTMLTemplate() {
    return `
      <div class="card bg-purpdark text-light mb-2" role="button">
        <div class="d-flex justify-content-between card-header">
          <div class="fw-bold">${this.title}</div>
          <div>Date Created</div>
        </div>
        <div class="card-body text-start">${this.content}</div>
      </div>
    `
  }
}