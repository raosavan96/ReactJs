import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Single from "./Single";
import Header from "./Header";

function RouterP() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:abc" element={<Single />} />
        </Routes>
      </BrowserRouter>

      <h1>Router Prectice</h1>
    </>
  );
}

export default RouterP;
