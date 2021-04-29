import React from 'react'
import style from './AboutUs.module.css'

const AboutUs = () =>{
    return (
        <div>
            <h1>What you can do with us</h1>
            <p>This project can help you to search the web blog by using different filters. Here is the list of the filter you can use:
            </p>
            <ol>
                <li>
                    Search the blog by author's name
                </li>
                <li>
                    Read all the blog title
                </li>
                <li>
                    Search the blog by data and time(In Progress)
                </li>
            </ol>
            <p>This project is created by Mingwei Sun.</p>
            <p>Contact info: sun.mingw@northeastern.edu</p>
        </div>
    )
}

export default AboutUs;