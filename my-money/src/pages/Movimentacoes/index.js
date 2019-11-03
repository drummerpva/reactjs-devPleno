import React from 'react';
import {Redirect} from 'react-router-dom';

import {useMovimentacaoApi} from '../../api';
import InfoMes from './InfoMes';
import AddMovimentacao from './AddMovimentacao';

export default function Movimentacoes({match}){

  const {
    movimentacoes, refetch, error, salvarNovaMovimentacao, removeMovimentacao
  } = useMovimentacaoApi(match.params.data);

  const saveMovimentacao = async (dados) =>{
      await salvarNovaMovimentacao(dados);
      refetch();
      setTimeout(() => {
        //infoMes.refetch();
      },3000);

  };

  const removerMovimentacao = async id => {
    await removeMovimentacao('movimentacoes/'+match.params.data+'/'+id);
    refetch();
    setTimeout(() => {
      //infoMes.refetch();
    },3000);
    
  };



  if(error === 'Permission denied')
    return <Redirect to='/login' />;

  return (
    <div className='container' >
      <h1>Movimentações</h1>
      <InfoMes mes={match.params.data} />
      <table className='table table-hover' >
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor R$</th>
          </tr>
        </thead>
        <tbody> 
          { movimentacoes &&
            Object.keys(movimentacoes).map(item =>{
              return(
                <tr key={item}>
                  <td>{movimentacoes[item].descricao}</td>
                  <td className='text-right' >
                    {movimentacoes[item].valor} {' '}
                    <button className='btn btn-danger btn-sm' onClick={() => removerMovimentacao(item)} >-</button>
                  </td>
                </tr>
              );
            })
          }
          <AddMovimentacao save={saveMovimentacao} />
        </tbody>
      </table>
    </div>
  );
}