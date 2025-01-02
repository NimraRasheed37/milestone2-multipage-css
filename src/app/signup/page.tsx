import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="signup-container">
  <div className="signup-form">
    <h2>Create Your Account</h2>
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <button type="submit" className="signup-btn">Sign Up</button>
      <p className="login-link">
        Already have an account? <span>Log In</span>
      </p>
    </form>
  </div>
</div>

    </>
  )
}

export default Signup