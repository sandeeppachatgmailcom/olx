import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    try {
      event.preventDefault()
      setEmail((email).toLowerCase().trimEnd())

      console.log(email, password)   //test mode

      const auth = firebase.firebaseAuth.getAuth();
      await firebase.firebaseAuth.signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          alert("Logged IN")
          navigate('/')
        }).catch((err)=>{
          alert(err.message)
        })

    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <div>
      <div className="row mx-5 p-4 ">
        <div className="col-12 col-md-4 p-4"></div>
        <div className="col-12 col-md-4 p-4 box">
          <div className="text-center ">
            <img width="150em" src={Logo} alt='OLX-Logo'></img>
          </div>

          <div className="p-3">
            <form className="formData" onSubmit={handleLogin}>
              <div className="col-12 px-2">

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" name="email" className="form-control" id="email" pattern="^(?=.*[@])(?=.*[.]).{5,}$"
                    placeholder="Enter email ID" required
                    value={email} onChange={(input) => setEmail(input.target.value)} />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password"
                    id="password" pattern="^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-=|]).{6,}$" required
                    value={password} onChange={(input) => setPassword(input.target.value)} />
                </div>

                <div className="text-center mb-2">
                  <button type="submit" className="btn btn-primary w-50">Login</button>
                </div>
                <p className="text-center">New to OLX? <a href="/signup">Signup</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
