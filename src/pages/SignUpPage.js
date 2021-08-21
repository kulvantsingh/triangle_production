import { Button } from 'bootstrap'
import React, { useRef }  from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { PageHero, SignUpForm } from '../components';


const SignUpPage=()=>{

    



return(

    <main>
    <PageHero title="Sign Up"/>

<Wrapper>
    <SignUpForm/>
</Wrapper>
</main>
);
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
  `
export default SignUpPage;