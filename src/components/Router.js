import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Home from "./Home";
import Collatz from "./Collatz";

export default class Router extends Component {
  render() {
    function ElementoCollatz() {
      let { numerillo } = useParams();

      return <Collatz numero={numerillo} />;
    }

    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/collatz/:numerillo" element={<ElementoCollatz/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
