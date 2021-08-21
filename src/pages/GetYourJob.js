import React from 'react'
import styled from 'styled-components'
import { Opening, PageHero} from '../components'
import ControlInputs from '../components/ControlInputs.js'


const Address=()=>{
    
   
    return (
        <Wrapper>
             <PageHero title="Get Your Job"/>
        <div className="section-center products"> 
             <Opening/>
             <div className="container">
                    <ControlInputs/>
              </div> 
        </div>
        
        </Wrapper>
    );
}
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 400px 1fr;
    }
  }
`
export default Address;