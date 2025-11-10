import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/home';
import Footer from './components/common/footer';
import Navbar from './components/common/navbar';
import MyResume from './pages/resume';
import Projects from './pages/projects';
import SingleProject from './pages/singleProject';
import Skills from './pages/skills';
import Achievements from './pages/achievements ';
import Contact from './pages/contact';
import LoadingBar from 'react-top-loading-bar';
import { useState, useEffect } from 'react';
import NotFound from './pages/notFound';

// Create a component to handle loading bar logic
function LoadingBarHandler({ setProgress }) {
  const location = useLocation();

  useEffect(() => {
    // Start loading bar when route changes
    setProgress(30);
    
    // Simulate loading completion
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500);

    return () => clearTimeout(timer);
  }, [location, setProgress]);

  return null;
}

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#2563eb'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <LoadingBarHandler setProgress={setProgress} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<MyResume />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/singleProject/:id" element={<SingleProject />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/achievements" element={<Achievements />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;