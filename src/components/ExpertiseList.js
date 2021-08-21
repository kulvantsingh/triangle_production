import React, { useEffect, useState } from 'react'
import { useProductsContext } from '../context/products_context';
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context';
const ExpertiseList = () => {
    const {expertise:expertise}=useProductsContext();
    const {filters:{desc,details}}=useFilterContext();
    const {updateFilters}=useFilterContext();
    
  return (
    <main>
    <Wrapper className="section">
        {expertise.map((data)=>{
            return(<button key={data.id} className={`${desc===data.description?'btn active':'btn expertise'}`}  onClick={(e)=>updateFilters(data)}>{data.title}</button>)
        })}
        
    </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
margin-top:-80px;
  width:100%;
  height:auto;
  .expertise{
    background-color:#91c6f7;
    margin:2px;
    
  }
  .btn {
    width:98%;
    margin-top:5px;
    display: flex;
    align-items: center;
    background:#Red;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }

  .active {
    border-color: var(--clr-grey-5);
    color:#FFFFFF;
  }
  
  .btn2 {
    width:100%;
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }`
export default ExpertiseList
