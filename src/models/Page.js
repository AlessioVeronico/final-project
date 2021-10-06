export class Page {
    constructor(id, title, slug, content) {
      this.content = content;
      this.id = id;
      this.slug = slug;
      this.title = title;
    }
  }
    
export function getPage(page) {
  return new Page(page.id, page.title.rendered, page.slug, page.content.rendered);
}