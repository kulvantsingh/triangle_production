import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/aboutEmployee.png'
import ProductPage from '../pages/ProductsPage'
import Expertise from '../pages/Expertise'
const AboutPage = () => {
  return <main>
    <PageHero title="About"/>
    <Wrapper className="page section section-center">
    <img src={aboutImg} alt="about"/>
    <article>
    <div className="title">
      <h2>Our Soul</h2>
      <div className="underline"></div>
      
    </div>
    <p>
      
SOUL Foundation is a leading Mumbai based organisation which has its focus in the field of Soft skills training, Recruitment outsourcing and Talent acquisitions. We are the leaders in the field of manpower consulting and corporate training. With our dedication, sincerity, hard work and passion to excel, we have built a unique name which
our 
    </p>
    </article>
    
    </Wrapper>
    <div className="title">
      <h2>Our Core Activities</h2>
      <div className="underline"></div>
      
    </div>
    <ProductPage/>
<article className="section section-center">
    <div className="title">
      <h2>Why Soul</h2>
      <div className="underline"></div>
      
    </div>
    <p>
We provide customised Training and consulting solutions as per the requirements and enhance the  efficiency of organisations and individuals. We have a team of dedicated and experienced people in the field of Consulting and Training who will help you in giving the right guidance and provide  exceptional result oriented training that prepares individuals to succeed in their career and communities. Our Industry expert team includes Business, Human resource Executives, Project Managers, Consultants specialist and Management Trainers.We strive to be honest. We always believe in establishing long term relationship with our clients, Employees & Employers and helping them achieve their business goal. With us you can be rest assured about all your needs.</p>
 </article>
 <article className="section section-center">
    <div className="title">
      <h5>Our areas of expertise are in :</h5>
      <div className="underline"></div>
      
    </div>
    <Expertise/>
  </article>
  
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
