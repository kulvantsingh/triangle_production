import React from 'react'
import styled from 'styled-components'
import { PageHero, SolutionsList} from '../components'

const Solutions=()=>{
    return <>
        <PageHero title="Solutions"/>
    <Wrapper>
          <div> 
            <SolutionsList/>
        </div>
  
    </Wrapper>
    
</>
}

const Wrapper = styled.div`

`

export default Solutions;