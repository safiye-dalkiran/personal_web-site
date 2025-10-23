import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import ModelSwitch from './components/modelSwitch/ModelSwitch'
import Skills from "./components/skills/Skills"
import About from "./components/About/About"
import Projects from "./components/projects/Projects"
import Contact from './components/footer/Contact'
function App() {

  
  return (
    <div className="dark:bg-[#252128]">
      <ModelSwitch/>
      <Header/>
      <Hero/>
      <Skills/>
      <hr className="border border-[#BAB2E7] my-4" />
      <About/>
      <hr className="border border-[#BAB2E7] my-4" />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
