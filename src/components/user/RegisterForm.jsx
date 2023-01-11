import httpClient from 'configAxios'
import React, {useState} from 'react'

export default function RegisterForm({ usernameRef }) {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const formRegister = {
    name: username,
    email,
    password,
    phone
  }

  const selectCountry = (e) => {
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await httpClient.post("register", formRegister);
      console.log(data)
      if(data.status === 200) {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="register_account">
        <h3>Register New Account</h3>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody><tr><td><div><input type="text"  onChange={(e) => setUserName(e.target.value)} defaultValue="username" onFocus={e => e.target.value = ''} onBlur={e => e.target.value === '' ? e.target.value = "username" : ""}/></div>
              <div><input type="text" onChange={e => setEmail(e.target.value)} defaultValue="E-Mail" onFocus={e => e.target.value = ''} onBlur={e => e.target.value === '' ? e.target.value ="E-Mail" : ""} /></div>
              <div><input type="password" onChange={e => setPassword(e.target.value)} defaultValue="password" onFocus={e => e.target.value = ''} onBlur={e => e.target.value === '' ? e.target.value = "Password" : ""}/></div>
              <div><input type="password" onChange={e => setConfirmPassword(e.target.value)} defaultValue="confirm-password" onFocus={e => e.target.value = ''} onBlur={e => e.target.value === '' ? e.target.value = "Confirm-Password" : ""}/></div>
              <div><input type="text" onChange={e => setPhone(e.target.value)} defaultValue="number-phone" onFocus={e => e.target.value = ''} onBlur={e => e.target.value === '' ? e.target.value = "Phone Number" : ""}/></div>
            </td>
            </tr>
            </tbody></table>
          <div className="wrap-term-btn">
            <p className="terms">By clicking 'Create Account' you agree to the <a href="#">Terms &amp; Conditions</a>.</p>
            <div className="search"><div><button type="submit" className="grey" onClick={handleSubmit}>Create Account</button></div></div>
          </div>
          <div className="clear" />
        </form>
      </div>
  )
}
