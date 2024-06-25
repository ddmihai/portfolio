import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import ProjectIndividual from './pages/ProjectIndividual/ProjectIndividual';



function App() {


  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-individual" element={<ProjectIndividual />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
