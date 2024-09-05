import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegisterationForm';
import LoginUser from './components/LoginUser'
import Contact from './components/ContactUs';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/login-user" element={<LoginUser/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
