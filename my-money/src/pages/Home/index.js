import React from 'react';
import Meses from './Meses';
import AddMes from './AddMes';

export default function Home(){
  return(
    <div className='container' >
      <AddMes /> 
      <Meses /> 
    </div>
  );
}