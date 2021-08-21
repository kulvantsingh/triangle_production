
import React from 'react'
import styled from 'styled-components'
import { AuthForm, PageHero } from '../components'
const AuthPage = () => {
    return(<main>
        <PageHero title="Authentication"/>
    
    <Wrapper>
        <AuthForm/>
    </Wrapper>
    </main>
    )
  }
  
  const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
  `
  
  export default AuthPage