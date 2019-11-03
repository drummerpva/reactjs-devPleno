import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

export default function Header(){
  const [logado, setLogado] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setLogado(true);
    }else{
      setLogado(false);
    }
  },[]);
  const logOut = () => {
    localStorage.removeItem('token');
    setLogado(false);
    window.location.reload();
  };


  return(
    <nav className='navbar navbar-light bg-light' >
      <div className='container' >
        <Link to="/" className='navbar-brand'>MyMoney</Link>
        {logado && 
          <ul className='navbar-nav mr-auto' >
            <li className='nav-item' >
              <button type='button' onClick={logOut} className='btn nav-link'  >Sair</button>
            </li>
          </ul>
        }
      </div>

    </nav>
  );
}