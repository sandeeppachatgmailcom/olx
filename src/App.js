import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./Pages/Signup"
import Login from './Pages/Login'
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {  // Checking user is signed in or not
    const auth = firebase.firebaseAuth.getAuth();
    firebase.firebaseAuth.onAuthStateChanged(auth, (user) => {
      setUser(user)     
    });
  })

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
