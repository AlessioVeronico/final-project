export class Post {
  constructor(id, title, body, imgPath, link) {
    this.body = body;
    this.id = id;
    this.imgPath = imgPath;
    this.link = link;
    this.title = title;
  }
}
  
// export function getPost(post) {
//   return new Post(post.id, post.title, post.body, post.imgPath, post.link);
// }