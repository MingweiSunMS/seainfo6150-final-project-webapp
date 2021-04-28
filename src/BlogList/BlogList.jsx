import React from "react";
import PropTypes from "prop-types";

const BlogList = (props) => {
  return (
    <div>
        <ul>
          {props.blogs.map((blog) => (
            <li>{blog.title}</li>
          ))}
        </ul>
    </div>
  );
};

BlogList.propTypes = {
    blogs: PropTypes.array.isRequired
}
export default BlogList;