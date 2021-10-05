export class Post {
  constructor(id, title, content, imgPath, link) {
    this.content = content;
    this.id = id;
    // this.imgPath = imgPath;
    // this.link = link;
    this.title = title;
  }
}
  
export function getPost(post) {
  return new Post(post.id, post.title.rendered, post.content.rendered, 
    //post.imgPath, post.link
    );
}