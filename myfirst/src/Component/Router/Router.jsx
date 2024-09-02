import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Todo from "../Todo/Todo";
import Contact from "./Contact";
import Single from "./Single";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact/:abc" element={<Contact />} />
          <Route path="/single/:abc" element={<Single />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
