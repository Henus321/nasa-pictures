import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
