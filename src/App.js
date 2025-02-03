import React from "react";
import { LuckDrawForm } from './components/LuckDrawForm';
import { ThankYou } from './components/ThankYou';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LuckDrawForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
