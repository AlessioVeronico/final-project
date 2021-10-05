export class Category {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
    
export function getCateg(categ) {
  return new Category(categ.id, categ.name);
}