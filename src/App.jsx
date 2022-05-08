import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Theme from "./components/Theme/Theme";
import ThemeContext from "./ThemeContext/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(true);
  const contextValue = { theme, setTheme };
  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`${theme ? "lightTheme" : "darkTheme"}`}>
        <Theme />
        <Header />
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
