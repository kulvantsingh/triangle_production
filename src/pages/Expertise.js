import React from 'react'
import styled from 'styled-components'
import { ExpertiseList,ExpertiseDesc} from '../components'
const Expertise=()=>{
    return <main>
    <Wrapper>
          <div className="section-center products"> 
            <ExpertiseList/>
          
            <div >
            <ExpertiseDesc/>
            </div>
        </div>
  
    </Wrapper>
    
</main>
}

const Wrapper = styled.div`
.products {
  display: grid;
  gap: 3rem 1.5rem;
  margin: 4rem auto;
}
@media (min-width: 768px) {
  .products {
    grid-template-columns: 500px 1fr;
  }
}
`

export default Expertise;