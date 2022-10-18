import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  //States
  const initialSignUpState = {
    username: "",
    full_name: "",
    email: "",
    phone_number: "",
    profile_picture: "",
    password: "",
    password_confirmation: ""
  }
  const [signUpCredentials, setSignUpCredentials] = useState(initialSignUpState)
  const [anyErrors, setAnyErrors] = useState([])
  const navigate = useNavigate()

  //Handlers
  const handleSignUpCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSignUpCredentials(
      {
        ...signUpCredentials,
        [name]: value
      }
    )

  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/users', { user: { ...signUpCredentials } })
      const data = res.data
      //If signup succeeds, we set the user data and navigate to homepage
      if (data) {
        const user = data.user
        navigate(`/user/${data.username}/`)
      }
    } catch (err: any) { //If errors we save to state and render them on the front for the user to see
      setAnyErrors(err.response.data.errors)
      console.log(err)
    }
  }

  return (
    <>
      <h5>Please SignUp:</h5>
      <form id="signUp-form" onSubmit={handleSignUp}>
        <div>
          <input
            type='text'
            name='username'
            className='authFormInputs'
            value={signUpCredentials.username}
            placeholder='Username'
            onChange={handleSignUpCredentials}
          />
        </div>
        <div>
          <input
            type='text'
            name='first_name'
            className='authFormInputs'
            value={signUpCredentials.full_name}
            placeholder='First Name'
            onChange={handleSignUpCredentials}
          />
        </div>
        <div>
          <input
            type='email'
            name='email'
            className='authFormInputs'
            value={signUpCredentials.email}
            placeholder='Email'
            onChange={handleSignUpCredentials}
          />
        </div>
        <div>
          <input
            type='tel'
            name='phone_number'
            className='authFormInputs'
            value={signUpCredentials.phone_number}
            placeholder='Phone-Number'
            onChange={handleSignUpCredentials}
          />
        </div>
        <div>
          <input
            type='text'
            name='password'
            className='authFormInputs'
            value={signUpCredentials.password}
            placeholder='Password'
            onChange={handleSignUpCredentials}
          />
        </div>
        <div>
          <input
            type='text'
            name='password_confirmation'
            className='authFormInputs'
            value={signUpCredentials.password_confirmation}
            placeholder='Confirm Password'
            onChange={handleSignUpCredentials}
          />
        </div>
        {/* TODO: ADD CSS to error messages */}
        {anyErrors && anyErrors.map(err => <div>{err}</div>)}
        <button type='submit'>SignUp</button>
        <h5 className="authButton" onClick={navigateToLogin}><u>Go to Login</u></h5>
      </form>
    </>
  )
}
export default Signup