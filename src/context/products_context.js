import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import { featuredServices } from '../utils/constants'
import { expertise } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_EXPERTISE,
} from '../actions'

const initialState = {
  isSidebarOpen:false,
  products_loading:false,
  products_error:false,
  products:[],
  featured_products:[],
  expertise:[]
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
const [state,dispatch]=useReducer(reducer,initialState);

const openSidebar=()=>{
  dispatch({type:SIDEBAR_OPEN})
}
const closeSidebar=()=>{
  dispatch({type:SIDEBAR_CLOSE})
}
const fetchServices=()=>{
    dispatch({type:GET_PRODUCTS_BEGIN});
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:featuredServices});
    dispatch({type:GET_EXPERTISE,payload:expertise});
}

useEffect(()=>{
fetchServices();
},[])

  return (
    <ProductsContext.Provider value={{...state,openSidebar,closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
