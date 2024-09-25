import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import NewDocument from './components/NewDocument.js';
import Documents from './views/Documents.js';
import SingleDocument from './views/SingleDocument.js';
import Footer from './components/Footer.js';
import ResetDb from './components/ResetDb.js';
import DeleteDocument from './components/DeleteDocument.js';
import RegisterUser from './models/RegisterUser.js';
import SignUp from './views/SignUp.js'

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
            <Route path="/" element={<Documents />} />
            <Route path="/create" element={<NewDocument />} />
            <Route path="/docs/:id" element={<SingleDocument />} />
            <Route path="/delete/:id" element={<DeleteDocument />} />
            <Route path="/reset" element={<ResetDb />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
