import {useEffect, useReducer} from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  if(action.type === 'REQUEST'){
    return {
      ...state,
      loading: true
    }
  }
  if(action.type === 'SUCCESS'){
    return {
      ...state,
      loading:false,
      data:action.data
    }
  }
  //manipular estado
  return state;
};

const useGet = url => {
  const [data, dispatch] = useReducer(reducer,{
    loading:true,
    data:{}
  } );

  useEffect(() => {
    dispatch({type:'REQUEST'});
    axios.get(url).then(({data}) => {
      dispatch({type:'SUCCESS', data})
    });
  },[url]);

  return data;
};
export default useGet;