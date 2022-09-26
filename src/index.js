import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/heroHeader";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import Services from "./components/Services";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
    <Blog />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
