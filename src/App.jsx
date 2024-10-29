import React from 'react';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from './components/Admin/Admin'; 
import Home from './components/Home/Home';

const App = () => {
  React.useEffect(() => {})
  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App
