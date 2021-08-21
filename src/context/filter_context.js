import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  GET_EXPERTISE,
  SET_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filters:{
    id:'',
    desc:'',
    image:'',
    title:'',
    details:[]
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {expertise:expertise}=useProductsContext();
  const [state,dispatch]=useReducer(reducer,initialState);


  const updateFilters=(data)=>{
    let desc=data.description;
    let title=data.title;
    let details=data.details;
    let image=data.image;
   
    if(image){
      dispatch({type:UPDATE_FILTERS,payload:{desc,details,image,title}})
    }
    else{
    dispatch({type:UPDATE_FILTERS,payload:{desc,details,title}})
    }
  }

  useEffect(()=>{
      dispatch({type:GET_EXPERTISE,payload:expertise});
      

  },[expertise])
  useEffect(()=>{
    dispatch({type:SET_FILTERS,payload:expertise});
  },[])
  return (
    <FilterContext.Provider value={{...state,updateFilters}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
