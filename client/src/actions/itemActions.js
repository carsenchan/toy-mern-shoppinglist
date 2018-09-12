import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './constant'

export const getItems = ()=> dispatch =>{
  dispatch(setItemLoading());
  axios.get('/api/items')
  .then(res=>dispatch({type: GET_ITEMS, payload: res.data}))

  //return {type: GET_ITEMS}
}

export const deleteItem = id => dispatch =>{
  dispatch(setItemLoading());

  axios.delete(`api/items/${id}`)
  .then(res=>dispatch({type: DELETE_ITEM, payload:id}))
  

  //return {type: DELETE_ITEM, payload:id}
}

export const addItem = item => dispatch =>{
  dispatch(setItemLoading());
  axios.post('/api/items', item)
  .then(res=>dispatch({type: ADD_ITEM, payload:res.data}))

  //return {type: ADD_ITEM, payload:item}
}

export const setItemLoading = ()=>{
  return {type: ITEMS_LOADING}
}