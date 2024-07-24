import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          name: credentials.name, 
          email: credentials.email, 
          password: credentials.password, 
          location: credentials.geolocation 
        })
      });
      const temp = await response.json();
      console.log(temp);

      if (!temp.success) {
        alert("Enter Valid Credentials");
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className='containerrr'>
      <div className="body">
        <div className="containers">
          <form onSubmit={handleSubmit}>
            <div className="head">
              <span>Sign up</span>
              <p>Create a free account with your email.</p>
            </div>
            <div className="inputs">
              <input type="text" placeholder="Full Name" name='name' value={credentials.name} onChange={onChange} />
              <input type="text" placeholder="Location" name='geolocation' value={credentials.geolocation} onChange={onChange} />
              <input type="email" placeholder="Email" name='email' value={credentials.email} onChange={onChange} />
              <input type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <button>Sign up</button>
            <div className="form-footer">
              <p>Already a user? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
