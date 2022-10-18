import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
  //States
  const initialLoginState = {
    username: "",
    password: ""
  }
  const [loginCredentials, setLoginCredentials] = useState(initialLoginState) /* "" */
  const navigate = useNavigate()

  //Handlers
  const handleLoginCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginCredentials(
      {
        ...loginCredentials,
        [name]: value
      }
    )
  }

  const navigateToSignup = () => {
    navigate('/signup')
  }

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/login', { user: loginCredentials }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // If response is accepted then we store the token to local storage
      if (response.status === 202) {
        const data = response.data
        const jsonWebToken = data.jwt
        document.cookie = `jwt=${jsonWebToken}`
        navigate(`/profile/`)
      }
    } catch (err: any) {
      //If there's an error we throw a window alert
      const response = err.response
      const error = response.data.message
      alert(error)
    }
  }


  return (
    <>
      <h5>Please login:</h5>
      <form id="login-form" onSubmit={e => handleLoginSubmit(e)}>
        <div>
          <input
            type='text'
            name='username'
            className='authFormInputs'
            value={loginCredentials.username}
            placeholder='Username'
            onChange={handleLoginCredentials}
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            className='authFormInputs'
            value={loginCredentials.password}
            placeholder='Password'
            onChange={handleLoginCredentials}
          />
        </div>
        <button type='submit'>Login</button>
        <h5 className="authButton" onClick={navigateToSignup}><u>Sign Up Here</u></h5>
      </form>
    </>
  )
}

export default Login