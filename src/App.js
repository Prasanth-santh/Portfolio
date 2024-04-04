
import './App.css';
import Nav from './nav'
import Home from './home'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
// import Blog from './Blog'
// import Home from './home';
// import About from './about';
// import Service from './service';
// import Contact from './contact';
// import { Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      {/* <Home/>
      <About/>
      <Service/>
      <Contact/> */}
      {/* <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Nav/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter> */}
      <Nav/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
