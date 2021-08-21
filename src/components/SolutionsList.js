import React from 'react'
import styled from 'styled-components'
import {Solutions} from '../utils/constants'

const SolutionsList=()=>{
    return (
    <main>
    <Wrapper  className="section section-center">
          <div className="products-container"> 
           
          {Solutions.map((data)=>{
             return(<div>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
              </div>)
          })}   
        </div>
        
    </Wrapper>
    </main>);
    
}



const Wrapper = styled.section`
  img {
    height: 175px;
  }
h5{
  color:blue;
  font-size:1.3rem;
  font-weight:bold;
}
p{
  font-family:"Times New Roman", Times, serif;
  font-size:1.2rem;
}
  .products-container {
    width:90vw;
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      width:80vw;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export default SolutionsList;