import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/main.jpg'
import heroBcg2 from '../assets/secondary.jpg'

const Hero = () => {
  return <Wrapper className="section-center">
    <article className="content">
      <h1>
        Get your <br/>
        Dream Job

      </h1>
      <p>
        
      With a Google My Business Account, you get more than a business listing. Your free Business Profile lets you easily connect with customers across Google Search and Maps.
      </p>
      <div className="jobDiv">
      <div className="jobDiv_sub">
        <h5>Looking for better job?</h5>
        <Link to="/products" className="btn hero-btn">Submit CV</Link>
      </div>
      <div className="jobDiv_sub">
        <h5>Are you an Employer?</h5>
        <Link to="/products" className="btn hero-btn">Start hiring now</Link>
      </div>
    </div>
    
    </article>
    <article className="img-container">
          <img src={heroBcg} alt="" className="main-img"/>
          <img src={heroBcg2} alt="" className="accent-img"/>
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  
  .jobDiv{
    width:100%;
  }
  .jobDiv_sub{
    width:50%;
    float:left;
    margin-left:0px;
  }
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (max-width: 492px) {
    h5{
      font-size: 10px;
    }

    .hero-btn {
      font-size:10px;
      width:90%;
     
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      width:90%;
     
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
