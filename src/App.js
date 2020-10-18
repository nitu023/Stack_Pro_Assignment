import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import BookMarked from "./components/MovieBookMarked";
import Filter from "./components/Filter";

function App() {
  const isAuth = window.localStorage.getItem("isAuth");
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={LoginPage}></Route>
        <Route
          path="/homepage"
          render={() => (!isAuth ? <Redirect to="/" /> : <HomePage />)}
        />
        <Route
          path="/bookmarks"
          render={() => (!isAuth ? <Redirect to="/" /> : <BookMarked />)}
        />
        <Route
          path="/upcomingmovies"
          render={() => (!isAuth ? <Redirect to="/" /> : <Filter />)}
        />
      </BrowserRouter>
      {/* <Filter/> */}
    </div>
  );
}

export default App;
