import React from 'react'

export default function Signup() {
  return (
    <div className='containerrr'>
        <div class="body">
        <div class="containers">
            <form>
                <div class="head">
                    <span>Sign up</span>
                    <p>Create a free account with your email.</p>
                </div>
                <div class="inputs">
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Location"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Sign up</button>
            </form>
            <div class="form-footer">
                <p>Have an account? <a href="#">Log in</a></p> 
            </div>
    
        </div>

    </div>
    

    </div>
  )
}
