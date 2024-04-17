import { useContext, useState } from 'react';
import '../styles/login.scss'
import { AuthContext } from '../context/AuthContext';
import { Link} from 'react-router-dom';

const loginData = {
  username: '',
  password: ''
}

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState(loginData)

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
        ...formData,
        [ name ]: value
    });
}

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  }

  const isButtonDisabled = () =>{ return formData.username === '' || formData.password === '' }
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className='title is-2 login-form__custom-title--blue'>Login</h1>
      <div className='fields'>
        <input 
          className="input fields__input-fields" 
          type="text" 
          placeholder="username" 
          name="username"
          value={formData.username}
          onChange={onInputChange}
        />
        <input 
          className="input fields__input-fields" 
          type="password" 
          placeholder="password" 
          name="password"
          value={formData.password}
          onChange={onInputChange}
        />
        <button 
          className='button is-info' 
          disabled={isButtonDisabled()}
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
