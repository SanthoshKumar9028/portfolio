import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Box } from "@chakra-ui/react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
    </Box>
  );
}

export default App;
