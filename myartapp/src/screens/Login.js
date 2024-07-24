import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';

export default function Login() {

  const [credentials, setCredentials] = useState({  email: "", password: ""});
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
           
          email: credentials.email, 
          password: credentials.password, 
          
        })
      });
      const temp = await response.json();
      console.log(temp);

      if (!temp.success) {
        alert("Enter Valid Credentials");
      }
      if (temp.success) {
        navigate("/");
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
              <span>Log in</span>
              <p>Welcome back!</p>
            </div>
            <div className="inputs">
              
              <input type="email" placeholder="Email" name='email' value={credentials.email} onChange={onChange} />
              <input type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <button>log in</button>
            <div className="form-footer">
              <p>Are you a new user? <Link to="/signup">Signup</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
