export class Category {
    constructor(id, name, slug) {
      this.id = id;
      this.name = name;
      this.slug = slug;
    };
  };
    
export function getCateg(categ) {
  return new Category( categ.id, categ.name, categ.slug );
};