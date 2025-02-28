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

  get listHTMLTemplate() {
    return `
      <div class="card bg-purpdark text-light mb-2" role="button">
        <div class="d-flex justify-content-between card-header">
          <div class="fw-bold">Text Name 1</div>
          <div>Date Created</div>
        </div>
        <div class="card-body text-start">Text body field 1</div>
      </div>
    `
  }
}