import React from 'react';
import myImage from '../asset/img/img1.jpg';

function Homepage() {
  return (
    <div className='container'>
      <div className='leftcontainer'>
        <p>Welcome to Expence Tracker</p>
        <p>Manage your Expence here.</p>
        <img src={myImage} alt="My Example" />
      </div>
      <div className='rightcontainer'>
        <div className='formcard'>
          <div>
          
          </div>
          <h2>Register</h2>
          <div>
            <label>
              Name
            </label>
            <input
              required
              type="text"
              placeholder='Enter your Name'


            />
          </div>
          <div>
            <label>
              Email
            </label>
            <input
              required
              type="email"
              placeholder='Enter your email'
            />
          </div>
          <div>
            <label>
              Password
            </label>
            <input
              required
              type="password"
              placeholder='Enter password'
            />
          </div>
          <div>
            <label>
              Comform Password
            </label>
            <input
              required
              type="password"
              placeholder='Confirm your password'
            />
          </div>
          <div>
            <button>Summit</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Homepage;
