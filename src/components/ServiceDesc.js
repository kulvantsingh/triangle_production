import React, { useState } from 'react'
import { useProductsContext } from '../context/products_context';
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context';
const ServiceDesc = () => {
    
   const {filters:{desc,details,image,title}}=useFilterContext();
  return (
    <main>
    <Wrapper>
        <h5>{title}</h5>
        <div className="products-container">
        <img src={image}/>
        </div>
        <div className="desc">
        <p>{desc}</p>
        </div>
       
        <div>
            <ul>
                {details.map((data)=>{
                    return <li>{data}</li>
                })}
            </ul>
        </div>
       </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  width:100%;
  height:auto;
  .expertise{
    background-color:#91c6f7;
    margin:2px;

  }
  .desc{
    margin-top:20px;
  }
  
  img {
    width: 100%;
    height:250px;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;

  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  h5{
      font-size:1rem;
      display: flex;
      color:#413ef9;
      
  }
  ul {
    list-style-type: disc;
  }
  .btn {
    width:100%;
    margin-top:10px;
    display: flex;
    align-items: center;
    background:#Red;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
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
  }
  @media (min-width: 992px) {
    .products-container {
      margin-top:20px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      margin-top:20px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  
  `
export default ServiceDesc
