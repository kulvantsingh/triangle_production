import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { useProductsContext } from '../context/products_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

  const {products:products}=useProductsContext()
  console.log(products);
  return <GridView products={products}>


  </GridView>
}

export default ProductList
