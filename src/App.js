import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Documents from './views/Documents.js';
import SingleDocument from './views/SingleDocument.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
            <Route path="/" element={<Documents />} />
            <Route path="/docs/:id" element={<SingleDocument />} />
        </Routes>
       </>
      <Footer />
    </div>
  );
}

export default App;
