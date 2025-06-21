import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Details = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [registerDetails, setRegisterDetails] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedin(true);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    alert('Successfully registered!');
    setIsRegistered(true);
  };

  return (
    <div className="container">
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleMenuClick}>
          Click me!
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <button onClick={() => setShowMenu(false)}>Login</button>
            <button onClick={() => setShowMenu(false)}>Register</button>
          </div>
        )}
      </div>
      {showMenu && (
        <div>
          {isLoggedin ? (
            <div>
              <h2>Login Details:</h2>
              <p>Username: {loginDetails.username}</p>
              <p>Email: {loginDetails.email}</p>
              <p>Password: {loginDetails.password}</p>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <h2>Login</h2>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={loginDetails.username}
                  onChange={handleLoginChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={loginDetails.email}
                  onChange={handleLoginChange}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={loginDetails.password}
                  onChange={handleLoginChange}
                />
              </label>
              <br />
              <button type="submit">Login</button>
            </form>
          )}
          {isRegistered ? (
            <p>Successfully registered!</p>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <h2>Register</h2>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={registerDetails.username}
                  onChange={handleRegisterChange}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={registerDetails.email}
                  onChange={handleRegisterChange}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={registerDetails.password}
                  onChange={handleRegisterChange}
                />
              </label>
              <br />
              <button type="submit">Register</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;