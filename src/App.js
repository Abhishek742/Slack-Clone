import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as BrowseRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import {useStateValue} from './StateProvider'
import ChatDefault from './components/ChatDefault'
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
      <BrowseRouter>
      {!user ? (
        <Login />
      ) : (
      <>
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<ChatDefault />} />
          <Route path="/room/:roomId" element={<Chat />} />
        </Routes>
      </div>
      </>
      )}
      </BrowseRouter>
    </div>
  );
}

export default App;
