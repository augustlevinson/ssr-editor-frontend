import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
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
import { io } from "socket.io-client";
import { fetchUrl } from './environment.js';

let socket;

function App() {
  useEffect(() => {
    socket = io(fetchUrl);
    console.log(`socket: ${socket}`)

    return () => {
      socket.disconnect();
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
            <Route path="/" element={<Documents />} />
            <Route path="/create" element={<NewDocument />} />
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
