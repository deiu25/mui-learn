// import Navbar from "./grid-navbar/Navbar";
import Test from "./Test";
// const linksArray = ["Products", "Services", "Overview", "Contact Us"];
// import Header from "./flexbox-navbar/Header";
// import { Routes, Route } from "react-router-dom";

import Auth from "./autentication/Auth";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Test />} />
      </Routes> */}
      <Test />
      {/* <Navbar links={linksArray} /> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
