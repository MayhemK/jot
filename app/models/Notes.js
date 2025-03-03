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

  get noteNumber() {
    return this.id.substring(this.id.length - 4)
  }
  get createdDate() {
    return this.createdAt.toLocaleDateString()
  }



  get listHTMLTemplate() {
    return `
      <div onclick="app.noteController.selectActiveNote('${this.id}')" class="card bg-purpdark text-light mb-2" role="button">
        <div class="d-flex justify-content-between card-header">
          <div class="fw-bold ">${this.title}</div>
          <div>${this.createdDate}</div>
          </div>
          <div class="card-body text-start">${this.content}
          </div>
          <div>${this.noteNumber}</div>
        </div>
      </div>
    `
  }








  get activeHTMLTemplate() {
    return `
    <div class="container-fluid dark-box">
            <div class="row">
              <div class="col-1">
                <p>color icon</p>
              </div>
              <div class="col-7">
                <div class="d-flex flex-column align-items-start">
                  <div id="activeNote" class="fs-2 fw-bold text-decoration-underline">
                    ${this.title}
                  </div>
                  <div>
                    Created on: ${this.createdAt}
                  </div>
                  <div>
                    last updated: ${this.lastEdited}
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex justify-content-end align-items-end">
                  <button class="btn btn-primary mdi mdi-content-save-plus me-2">Save</button><button
                    class="btn btn-outline-danger mdi mdi-delete">Delete</button>
                </div>
              </div>
            </div>
            <div class="row my-4 ">
              <div class="col-12">
                <textarea name="" id="" class="text-box  "></textarea>
              </div>
              <p class="d-flex justify-content-end">word count</p>
            </div>
          </div>
    `
  }
}