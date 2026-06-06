import React, { Fragment, FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import config from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";

interface AppConfig {
  showNavigationbar: boolean;
  showBlog: boolean;
}

const { showNavigationbar, showBlog } = config as AppConfig;

const Home: FC = () => {
  return (
    <Fragment>
      <MainBody />
      <main id="main-content">
        <AboutMe />
        <Project />
      </main>
    </Fragment>
  );
};

const App: FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    {showBlog && <Route path="/blog" exact component={Blog} />}
    {showBlog && <Route path="/blog/:id" component={BlogPost} />}
    <Footer />
  </BrowserRouter>
);

export default App;
