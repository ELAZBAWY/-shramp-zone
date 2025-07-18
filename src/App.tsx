// Main App component with routing and context providers
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { CartProvider } from "./CartContext";

function App() {
  // State for search term used in Navbar and Menu
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <BrowserRouter>
        {/* Navbar with search functionality */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* Application routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu searchTerm={searchTerm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
