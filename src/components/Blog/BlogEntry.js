import React from 'react';
import Button from '../Shared/Button';

function BlogEntry({title, date, content}) {
  return (
    <div className="blog-entry">
      <img src="/assets/screenshot1.jpg" alt='' className="blog-img"/>
      <div className="content-container">
        <h2>{title}</h2>
        <p>{content.length + title.length > 250 ? `${content.slice(0, (content.indexOf(' ', 225) - title.length))}...` : content}</p>
      </div>
      <div className='more-info-container'>
        <span>{date}</span>
        <Button text='Read Article' className='blog-button'/>
      </div>
    </div>
  )
}
export default BlogEntry;