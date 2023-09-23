import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
    </div>
  );
};

export default App;
