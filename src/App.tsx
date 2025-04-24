// React import can be removed since it's not directly used in this file
// First install react-router-dom using: npm install react-router-dom @types/react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// If the error persists, run: npm install react-router-dom @types/react-router-dom --save
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
// Create and import Home component once implemented
// import Home from './pages/Home';
const Home = () => <div>Home Page</div>; // Temporary component until proper Home page is created
import Success from './pages/Success'; // Import the new Success component
// Remove unused import since ContactForm is not currently used in the component

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <Routes>
        {/* Assuming your main page route */}
        <Route path="/" element={<Home />} />

        {/* Add the route for the success page */}
        <Route path="/success" element={<Success />} />

        {/* You might have other routes */}
        {/* If ContactForm is meant to be on its own page, add a route for it */}
        {/* <Route path="/contact" element={<ContactForm />} /> */}

        {/* Or if ContactForm is part of another page (like Home), it doesn't need its own route */}

      </Routes>
    </Router>
  );
}

export default App;