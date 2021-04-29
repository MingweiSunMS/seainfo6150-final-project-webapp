import React from "react";
import BlogList from '../BlogList/BlogList.jsx';

const BlogListContent = ({blog}) => {
  return (
    <article>
      <h3>{blog.title}</h3>
      <time dateTime={blog.timeStamp}>{blog.displayDate}</time>
      <p>{blog.shortText}</p>
      <p>{blog.text}</p>
    </article>
  );
};

export default BlogListContent; 