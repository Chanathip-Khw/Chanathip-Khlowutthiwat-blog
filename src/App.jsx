import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/Hero";
import { Footer } from "./components/Footer";
import ArticleSection from "./components/ArticleSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
