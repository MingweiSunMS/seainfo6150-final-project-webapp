import React from "react";
import PropTypes from "prop-types";
import BlogListContent from "../BlogListContent/BlogListContent";
import { Switch, Route, Link } from "react-router-dom";
import style from "./BlogList.module.css"

const BlogList = (props) => {
  
  
    return (
    <div>
        <ul>
          {props.blogs.map((blog) => (
            <Link to={`/BlogListContent/${blog}`}>
                    <li key={blog.slug}>{blog.title}</li>
            </Link>
          ))}
        </ul>
    </div>
  );
};

BlogList.propTypes = {
    blogs: PropTypes.array.isRequired
}
export default BlogList;