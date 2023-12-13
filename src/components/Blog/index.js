import { exampleData } from './exampleData';
import BlogEntry from './BlogEntry';

function Blog() {
  return (
    <div className="blog-content">
      <h2 className="blog-header">Our Latest Updates</h2>
      <div className="blog-entry-row">
        {exampleData.map(({title, date, content}) => (
            <BlogEntry title={ title } content={ content } date={ date }/>
          ))}
      </div>
    </div>
  )
}
export default Blog;