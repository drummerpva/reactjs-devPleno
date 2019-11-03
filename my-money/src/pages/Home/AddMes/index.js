import React, {useRef, useState} from 'react';
import {Redirect} from 'react-router-dom';

const minAno = 2019;
const maxAno = 2022;


export default function AddMes() {
  const refAno = useRef();
  const refMes = useRef();
  const [redir, setRedir] = useState('');

  const anos = [];
  const meses = [];
  for(let i = minAno; i <= maxAno;i++)
    anos.push(i);
  
  for(let i = 1; i <= 12;i++)
    meses.push(i<10 ? `0${i}` : i);

  const verMes = () => {
    setRedir(`${refAno.current.value}-${refMes.current.value}`);
  };
  if(redir){
    return <Redirect to={'/movimentacoes/'+redir} />;
  }
  

  console.log(anos);
  return(
    <>
      <h2>Adiconar mês</h2>
      <select ref={refAno} >
        {anos.map(ano => <option key={ano} value={ano} >{ano}</option>)}
      </select>
      <select ref={refMes}>
        {meses.map(mes => <option key={mes} value={mes} >{mes}</option>)}
      </select>
      <button onClick={verMes} >Adicionar mês</button>
    </>
  );
}