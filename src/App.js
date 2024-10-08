import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import CreateDocument from './views/CreateDocument.js';
import NewDocument from './components/NewDocument.js';
import Documents from './views/Documents.js';
import SingleDocument from './views/SingleDocument.js';
import Footer from './components/Footer.js';
import ResetDb from './components/ResetDb.js';
import AcceptInvitation from './components/AcceptInvitation.js';
import DeleteDocument from './components/DeleteDocument.js';
import RegisterUser from './models/RegisterUser.js';
import SignUp from './views/SignUp.js'
import Login from './views/Login.js'

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
            <Route path="/" element={<Documents />} />
            <Route path="/create" element={< CreateDocument />} />
            <Route path="/create/:type" element={< NewDocument />} />
            <Route path="/docs/:id" element={<SingleDocument />} />
            <Route path="/accept/:id" element={< AcceptInvitation />} />
            <Route path="/delete/:id" element={<DeleteDocument />} />
            <Route path="/reset" element={<ResetDb />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
