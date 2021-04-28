import React from 'react'
import blog from "../images/blog.jpg";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <h1 class={style.h1}>Welcome to the Web Blog Searching System</h1>
            <h3>Please use the upper navigation bar to learn about our system or use it</h3>
            <img src={blog}/>
        </div>
    )
}

export default Home
