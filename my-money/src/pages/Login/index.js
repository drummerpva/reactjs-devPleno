import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';

import {usePost} from '../../functions/rest';

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrgABNyfLxS678jERO73O9rkvHyAFm7Ys';

export default function Login(){
  const [postData, signIn] = usePost(url);
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  useEffect(() => {
    if(Object.keys(postData.data).length > 0){
      localStorage.setItem('token', postData.data.idToken);
      window.location.reload();
    }
  },[postData]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setLogado(true);
    }
  },[]);

  const login = async () =>{
    await signIn({
        email,
        password:senha,
        returnSecureToken: true
      }
    );
  };

  const onChangeEmail = e =>{
    setEmail(e.target.value);
  };
  const onChangeSenha = e =>{
    setSenha(e.target.value);
  };


  if(logado) return <Redirect to='/' />;

  return (
    <div className='container' >
      <h1>Login</h1>
      {postData.error && postData.error.length > 0 &&
        <p>E-mail e/ou senha inválidos</p>
      }
      <div className='form-group'>
        <input  className='form-control' type='email' value={email} placeholder='E-mail...' onChange={onChangeEmail} />
      </div>
      <div className='form-group'>
        <input  className='form-control' type='password' value={senha} placeholder='Senha...' onChange={onChangeSenha} />
      </div>
      <div className='form-group'>
        <button className='btn btn-success' onClick={login} >Login</button>
      </div>
    </div>
    );
}