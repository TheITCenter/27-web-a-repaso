import { Link } from 'react-router-dom'
import '../styles/login.scss'
import { useState } from 'react'

const loginData = {
  username:'',
  password:''
}

export const Login = () => {

  const [formData, setFormData] = useState(loginData)


  return (
    <form className="login-form">
      <h2 className='title is-2 login-form__custom-title--blue'> Login </h2>
      <div className='fields'>
        <input className='input mb-4' 
          type="text" 
          placeholder='User Name'
          name="username"
          value={formData.username}
          onChange={(event)=>{setFormData(
            {...formData ,username: event.target.value}
          )}}
        />
        <input 
          className='input mb-6' 
          type="password" 
          name="password"
          value={formData.password}
          placeholder='Password'
          onChange={(event)=>{setFormData(
            {...formData ,password: event.target.value}
          )}}
          />
        <button className='button is-info'> Login </button>

      </div>
      <small className='is-align-self-flex-end'> 
      Dont have an Account? <Link to='/register'> Register </Link>
      </small>

    </form>
  )
}
