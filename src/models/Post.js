export class Post {
  constructor(id, title, content, excerpt, slug, img) {
    this.content = content;
    this.excerpt = excerpt;
    this.id = id;
    this.img = img
    this.slug = slug;
    this.title = title;
  }
}
  
export function getPost(post) {
  return new Post( 
    post.id, 
    post.title.rendered, 
    post.content.rendered, 
    post.excerpt.rendered, 
    post.slug, 
    post.better_featured_image.media_details.sizes.thumbnail.source_url 
  );
}