export class Page {
    constructor(id, title, content) {
      this.content = content;
      this.id = id;
      this.title = title;
    }
  }
    
export function getPage(page) {
  return new Page(page.id, page.title.rendered, page.content.rendered);
}