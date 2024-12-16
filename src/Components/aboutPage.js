import React from "react";
import "../styles/App.css";
import About from "./about";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

export default function aboutPage() {
  return (
    <div>
      <Header />
      <Navbar/>
      <About />
      <Footer/>
    </div>
  );
}
