import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Schedule from './components/Schedule';
import RegistrationForm from './components/RegistrationForm';
import AddTeam from './components/AddTeam';
import EventCard from './components/EventCard';
import Sidebar from './components/Sidebar'; // Import Sidebar
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className="bg-image"></div> {/* Background image div */}
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content" style={{ marginRight: isSidebarOpen ? '550px' : '0' }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/add-team" element={<AddTeam />} />
            <Route path="/events" element={<EventCard />} /> 

          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
