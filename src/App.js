import React,{useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import { isEmpty } from "lodash";
import style from "./App.module.css"
import AboutUs from "./AboutUs/AboutUs.jsx"
import BlogList from "./BlogList/BlogList.jsx"
import AuthorList from "./AuthorList/AuthorList.jsx"
import BlogListContent from "./BlogListContent/BlogListContent.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      console.log("Downloaded the article from the link");
      const responseJson = await response.json();
      setFetchedData(responseJson);
      console.log("FetchedData set");
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


  return isEmpty(fetchedData) ? null:(
    <>
      <header>
        <nav>
          <ul className={style.navTop}>
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogList">Blog List</Link>
            </li>
            <li>
              <Link to="/authorList">Author List</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs}/>
        <Route exact path="/blogList">    
          <BlogList blogs={Object.values(fetchedData)}/>
        </Route>
        <Route exact path="/authorList">    
          <AuthorList blogs={Object.values(fetchedData)}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
