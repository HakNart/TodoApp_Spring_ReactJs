import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';


export function LoginPage() {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(e) {
    setUserName(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  async function handleSubmit(e) {
    // Prevent sending the form to action link
    e.preventDefault(); 
    if (await authContext.login(username,password)) {
      navigate(`/welcome/${username}`)
    } else {
      setShowErrorMessage(true);
    }
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                onChange={handleUsernameChange} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={handlePasswordChange} />
              <label className="label">
                <a
                  href="#"
                  className="link-hover label-text-alt link"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
