import React from 'react';
import {useMesApi} from '../../../api';

export default function InfoMes({mes}){
  const {infoMes, alterarMes} = useMesApi(mes);

  const alterarPrevisaoEntrada = e =>{
    alterarMes({previsao_entrada:  e.target.value});
  };
  const alterarPrevisaoSaida = e =>{
    alterarMes({previsao_saida:  e.target.value});
  };

  if(infoMes.loading)
    return <p>Carregando dados do mês...</p>;

  if(infoMes.data )
    return (
      <div>
          <span>
            Previsão de entrada: 
            {infoMes.data.previsao_entrada}
          </span> 
          <input type='tel' onBlur={alterarPrevisaoEntrada} /> / 
          Previsão de saída: {infoMes.data.previsao_saida} <input type='tel' onBlur={alterarPrevisaoSaida} /><br/>
          Entradas: {infoMes.data.entradas} / 
          Saídas: {infoMes.data.saidas} <br/>
        </div>
    );
};