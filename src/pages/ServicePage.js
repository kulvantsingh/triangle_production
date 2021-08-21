import React from 'react'
import styled from 'styled-components'
import { ExpertiseList,ExpertiseDesc, ServiceList, ServiceDesc, PageHero} from '../components'
const ServicePage=()=>{
    return <main>
        <PageHero title="Service"/>
    <Wrapper>
          <div className="section-center products"> 
            <ServiceList/>
          
            <div >
            <ServiceDesc/>
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

export default ServicePage;