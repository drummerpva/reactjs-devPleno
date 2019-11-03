import React, {useState} from 'react';

export default function AddMovimentacao({save}){
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const onChangeDescricao = e =>{
    setDescricao(e.target.value);
  };
  const onChangeValor = e =>{
    setValor(e.target.value);
  };

  const saveMovimentacao = async () =>{
    if(!isNaN(valor) && valor.search(/^[-]?\d+(\.)?\d+?$/) >= 0){
      await save({valor:parseFloat(valor).toFixed(2), descricao});
      setDescricao('');
      setValor('');
    }
  };

  return (
    <tr>
      <td><input className='form-control' placeholder='Descrição' type='text' value={descricao} onChange={onChangeDescricao} /></td>
      <td>
          <div className='form-inline' >
          <input className='form-control md-8' placeholder='Valor' type='tel' value={valor} onChange={onChangeValor} /> &nbsp;&nbsp;&nbsp;
          <button  className='btn btn-success' onClick={saveMovimentacao} >+</button>  
        </div>
      </td>
    </tr>
  );
};