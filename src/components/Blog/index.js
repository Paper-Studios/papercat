import { exampleData } from './exampleData';
import BlogEntry from './BlogEntry';

function Blog() {
  return (
    <div className="blog-content">
      {
        exampleData.map(({title, content}) => (
          <BlogEntry title={ title } content={ content } />
        ))
      }
    </div>
  )
}
export default Blog;