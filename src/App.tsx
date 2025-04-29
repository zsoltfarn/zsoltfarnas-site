// React import can be removed since it's not directly used in this file
// First install react-router-dom using: npm install react-router-dom @types/react-router-dom
import * as reactRouterDom from 'react-router-dom';
// If the error persists, run: npm install react-router-dom @types/react-router-dom --save
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
function App() {
  return (
    <reactRouterDom.BrowserRouter>
      <reactRouterDom.Routes>
        <reactRouterDom.Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <Pricing />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </>
        } />
      
      </reactRouterDom.Routes>
    </reactRouterDom.BrowserRouter>
  );
}

export default App;