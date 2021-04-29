import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link } from "react-router-dom";
import style from "./AuthorList.module.css"

const BlogList = (props) => {
  
  
    return (
    <div>
        <h2>Here are our great author who provide their blogs</h2>
        <ul>
          {props.blogs.map((blog) => (
            <li key={blog.slug}>{blog.author}</li>
          ))}
        </ul>
    </div>
  );
};

BlogList.propTypes = {
    blogs: PropTypes.array.isRequired
}
export default BlogList;