import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Layouts/NavBar";
import Home from "./views/Home";
import NoPage from "./views/NoPage";

function App() {

  return (
    <>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
