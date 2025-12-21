// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import LogCalculator from './pages/LogCalculator.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Services />
              <Portfolio />
              <Contact />
            </Layout>
          }
        />
        <Route 
          path="/log-calculator" 
          element={
            <Layout showFooter={true}>
              <LogCalculator />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
