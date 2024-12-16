import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../src/styles/App.css";
import Header from "./Components/header";
import RepairMaintain from "./Components/repairMaintain";
import Feature from "./Components/feature";
import AboutUs from "./Components/about";
import Professional from "./Components/professional";
import Service from "./Components/service";
import Client from "./Components/client";
import ContactUs from "./Components/contactUs";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

function App() {
  

  return (
    
      /*
      Structure of the Components
      <Header/>
      <Navbar/>
      <repairMaintain/>
      <feature/>
      <aboutUS/>
      <profession/>
      <services/>
      <client/>
      <contactUs/>
      <footer/>
      
      */

    <div>
      <Header />
      <Navbar />
      <RepairMaintain />
      <Feature />
      <AboutUs />
      <Professional />
      <Service />
      <Client />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
