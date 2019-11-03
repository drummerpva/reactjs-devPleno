import Rest from '../functions/rest';

const baseURL = 'https://mymoney-ad0ed.firebaseio.com/';
const {useGet, usePost, useDelete, usePatch} = Rest(baseURL);

export const useMesApi = mes => {
  const infoMes = useGet('meses/'+mes);
  const [, alterarMes] = usePatch('meses/'+mes);
  return {infoMes, alterarMes};
};
export const useMovimentacaoApi = mes =>{
  const {data: movimentacoes, refetch, error} = useGet('movimentacoes/'+mes);
  const [, salvarNovaMovimentacao] = usePost('movimentacoes/'+mes);
  const [, removeMovimentacao] = useDelete();

  return {movimentacoes, refetch, error, salvarNovaMovimentacao, removeMovimentacao};
};
