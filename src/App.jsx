import './App.css';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/App.jsx" element={<Home />} /> */}
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
