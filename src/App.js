import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CarList from './components/CarList';
import BookingForm from './components/BookingForm';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
