import {useReducer, useEffect} from 'react';
import axios from 'axios';
axios.defaults.validateStatus = code => code < 500;

const INITIAL_STATE = {
  loading:false,
  data:{},
  error:'',
};

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
  if(action.type === 'FAILURE'){
    return {
      ...state,
      loading:false,
      error:action.error
    }
  }
  return state;
};

const getAuth = () => {
   const token =localStorage.getItem('token');
   if(token){
     return '?auth='+token;
   }
   return '';
};

const init = baseURL =>{
  const useGet = resource => {
    const [data, dispatch] = useReducer(reducer,{...INITIAL_STATE, loading:true });
    const carregar = async () => {
      try {
        dispatch({type:'REQUEST'});
        const {data} = await axios.get(baseURL+resource+'.json'+getAuth());
        if(data.error && Object.keys(data.error).length > 0){
          dispatch({
            type:'FAILURE',
            error: data.error
          });
        }else{
          dispatch({type:'SUCCESS', data});
        }
      } catch (error) {
        dispatch({
          type:'FAILURE',
          error: 'unknow error'
        });
      }
    };

    useEffect(() => { 
      carregar();
    },[resource]);
  
    return {
      ...data,
      refetch:carregar
    };
  };
  const usePost = (resource) => {
    const [data, dispatch] = useReducer(reducer,INITIAL_STATE);
    const post = async data =>{
      dispatch({type: 'REQUEST'});
      const res = await axios.post(baseURL+resource+'.json'+getAuth(), data)
      dispatch({
        type:'SUCCESS',
        data: res.data
      });

    };
    return [data, post];
  };
  const useDelete = () => {
    const [data, dispatch] = useReducer(reducer,INITIAL_STATE);
    const remove = async resource =>{
      dispatch({type: 'REQUEST'});
      await axios.delete(baseURL+resource+'.json'+getAuth());
      dispatch({
        type:'SUCCESS'
      });

    };
    return [data, remove];
  };
  const usePatch = resource => {
    const [data, dispatch] = useReducer(reducer,INITIAL_STATE);
    const patch = async (data) =>{
      dispatch({type: 'REQUEST'});
      await axios.patch(baseURL+resource+'.json'+getAuth(),data);
      dispatch({
        type:'SUCCESS'
      });

    };
    return [data, patch];
  };

  return {
    useGet,
    usePost,
    useDelete,
    usePatch
  };
};

export const usePost = (url) => {
  const [data, dispatch] = useReducer(reducer,INITIAL_STATE);
  const post = async data =>{
    dispatch({type: 'REQUEST'});
    try {
      const res = await axios.post(url, data)
      if(res.data.error && Object.keys(res.data.error).length > 0){
        dispatch({
          type:'FAILURE',
          error: res.data.error.message
        });
      }else{
        dispatch({
          type:'SUCCESS',
          data: res.data
        });
        return res.data;
      }
    } catch (error) {
      dispatch({
        type:'FAILURE',
        error: 'unknow error'
      });
    }

  };
  return [data, post];
};




export default init;