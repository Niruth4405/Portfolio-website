import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />

      <SocialLinks/>
    </>
  );
}

export default App;
