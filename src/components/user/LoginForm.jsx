import React, { useState } from 'react'

export default function LoginForm({ login }) {
  const formSubmit = {
    email: "",
    password: ""
  }

  const [user, setUser] = useState(formSubmit)

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user)
  }
  
  return (
    <div className="login_panel">
    <h3>Existing Customers</h3>
    <p>Sign in with the form below.</p>
    <form onSubmit={ handleSubmit }>
      <input name="email" type="text" defaultValue="Username" className="field" onChange={e => setUser({...user, email: e.target.value})} onFocus={e => e.target.value = ''} onBlur={e => e.target.value === '' ? e.target.value = 'Username' : 'user'} />
      <input name="password" type="password" defaultValue="Password" className="field" onChange={e => setUser( {...user, password: e.target.value})} onFocus={e => e.target.value = ''} onBlur={e => e.target.value === '' ? e.target.value = 'Password' : 'pasword'} />
    <div className="buttons"><div><button type="submit" className="grey">Sign In</button></div></div>
    </form>
    <p className="note">If you forgot your passoword just enter your email and click <a href="#">here</a></p>
  </div>
  )
}
