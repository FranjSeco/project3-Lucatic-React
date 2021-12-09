import React from 'react';
import Api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import './login.css';


// REST_API: string = 'http://localhost:8080/api';
// httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
// constructor(private httpClient: HttpClient) {}
export const Login = () => {
  const [userEmail, setUsereEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const navigate = useNavigate();

  const api = new Api({
    baseUrl: 'http://localhost:8080/api',
    headers: {
      'content-type': 'application/json'
    }
  })

  const handleLogin = () => {
    api.login(userEmail, userPassword)
      .then(data => {
        console.log(data, 'this is data');
        localStorage.setItem('id', data._id);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        navigate('/main');
      })
  }



  return (
    <div className='login__form'>
      <input placeholder='email' id='inputLogin' onChange={e => setUsereEmail(e.target.value)} /> <br />
      <input placeholder='password' id='inputPassword' onChange={e => setUserPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};