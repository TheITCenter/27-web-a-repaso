import { useContext } from 'react';
import '../styles/login.scss'
import { AuthContext } from '../context/AuthContext';
import { Link} from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const loginData = {
  username: '',
  password: ''
}

export const Login = () => {
  const { login } = useContext(AuthContext);

  const { onInputChange, username, password, isFormValid,formState } = useForm(loginData)


  const handleSubmit = (e) => {
    e.preventDefault();
    login(formState);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className='title is-2 login-form__custom-title--blue'>Login</h1>
      <div className='fields'>
        <input 
          className="input fields__input-fields" 
          type="text" 
          placeholder="username" 
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input 
          className="input fields__input-fields" 
          type="password" 
          placeholder="password" 
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <button 
          className='button is-info' 
          disabled={!isFormValid}
          type="submit"
        >
          Login
        </button>
      </div>
      <small className='is-align-self-flex-end'>
          Dont have a account? <Link to="/register">Register</Link>
      </small>
    </form>
  )
}
