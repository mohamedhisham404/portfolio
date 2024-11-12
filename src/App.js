import styled,{ThemeProvider} from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom"
import HeroSection from "./components/sections/HeroSection";
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects" 
import Education from "./components/sections/Education" 
import Footer from "./components/sections/Footer" 

const Body= styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`

function App() {
  return <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Navbar/>
        <Body>
          <HeroSection/>
          <Skills/>
          <Projects/>
          <Education/>
          <Footer/>
        </Body>
    </BrowserRouter>
  </ThemeProvider>;
}

export default App;
