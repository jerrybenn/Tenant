import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import GoogleIcon from '@mui/icons-material/Google';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // No auth yet – just navigate to dashboard
    navigate('/');
  }

  return (
    <div className="signInPageContainer">
      <div className="signInCard">
        <div className="signInHeader">
          <div className="signInBrand">Tenant</div>
          <h1 className="signInTitle">Sign in</h1>
        </div>

        <form className="signInForm" onSubmit={handleSubmit}>
          <label className="signInLabel" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="signInInput"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="signInLabel" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="signInInput"
            placeholder="•••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="signInRow">
            <label className="rememberMe">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span>Remember me</span>
            </label>
          </div>

          <button type="submit" className="signInButton">Sign in</button>

          <button type="button" className="ghostLink">Forgot your password?</button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="providerButton">
            <GoogleIcon fontSize="small" />
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}


