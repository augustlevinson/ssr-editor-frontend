import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Documents from './views/Documents.js';
import SingleDocument from './views/SingleDocument.js';
import Footer from './components/Footer.js';
import ResetDatabase from './views/ResetDatabase.js';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
            <Route path="~caas23/editor/" element={<Documents />} />
            <Route path="~caas23/editor/docs/:id" element={<SingleDocument />} />
            <Route path="~caas23/editor/reset" element={<ResetDatabase />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
