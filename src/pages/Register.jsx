import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.scss'
import { useForm } from '../hooks/useForm';

const registerData = {
  username: '',
  password: '',
  name: '',
  email: ''
}

export const Register = () => {

  const { onResetForm, onInputChange, username, password, name, email, isFormValid } = useForm(registerData)

  const navigate = useNavigate();

  const handleRegister =(e) => {
    e.preventDefault();
    onResetForm();
    navigate('/login');
  }
  return (
    <form className="login-form">
      <h1 className='title is-2 login-form__custom-title--blue'>Register</h1>
      <div className='fields'>
        <input className="input fields__input-fields" 
          type="text" 
          placeholder="username" 
          name= "username"
          value={username}
          onChange={onInputChange}
        />
        <input className="input fields__input-fields" 
          type="password" 
          placeholder="password" 
          name= "password"
          value={password}
          onChange={onInputChange}
        />
        <input className="input fields__input-fields" 
          type="text" 
          placeholder="name" 
          name= "name"
          value={name}
          onChange={onInputChange}
        />
        <input className="input fields__input-fields" 
          type="email" 
          placeholder="email" 
          name= "email"
          value={email}
          onChange={onInputChange}
        />
        <button 
          onClick={handleRegister} 
          className='button is-info' 
          type="submit"
          disabled={!isFormValid}
        >
          Register
        </button>
      </div>
      <small className='is-align-self-flex-end'>
          Have an Account? <Link to="/login">Log in</Link>
      </small>
    </form>
  )
}
