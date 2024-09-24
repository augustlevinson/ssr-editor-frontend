import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import NewDocument from './components/NewDocument.js';
import Documents from './views/Documents.js';
import SingleDocument from './views/SingleDocument.js';
import Footer from './components/Footer.js';
import ResetDb from './components/ResetDb.js';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
            <Route path="/" element={<Documents />} />
            <Route path="/create" element={<NewDocument />} />
            <Route path="/docs/:id" element={<SingleDocument />} />
            <Route path="/reset" element={<ResetDb />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
