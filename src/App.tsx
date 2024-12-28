import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Box } from "@chakra-ui/react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Box
      _dark={{
        bgColor: "bg.darkBg",
      }}
    >
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
