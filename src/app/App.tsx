import React from "react";
import Div from "../hok/Div";
import Course from "../screen/Course/Course"; // *
import Landing from "../screen/Landing/Landing"; // *
import Login from "../screen/Login/Login"; //*
import News from "../screen/News/News"; // *
import NotFound from "../screen/404/404";
import NewsInfo from "../screen/NewsInfo/Newsinfo";
import CourseDetail from "../screen/CourseDetail/CourseDetail";
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  let history = useHistory()
  return (
    <React.Fragment>
      <Div>
      
        
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>

          <Route path="/courses">
            <Course />
          </Route>

          <Route path="/news">
            <News />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/newsInfo/:id">
            <NewsInfo />
          </Route>

          <Route path="/courseDetail/:id">
            <CourseDetail />
          </Route>

          <Route>
            <NotFound />
            {setTimeout(() => {
              history.push("/")
            }, 4000)}
          </Route>


        </Switch>

        {/* <NewsInfo/> */}

      </Div>
    </React.Fragment>
  );
}

export default App;
