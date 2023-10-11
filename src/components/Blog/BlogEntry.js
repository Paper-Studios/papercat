import React from 'react';

function BlogEntry({title, content}) {
  return (
    <div className="blog-entry">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}
export default BlogEntry;