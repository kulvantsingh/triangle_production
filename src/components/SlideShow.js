import React, { useState } from 'react'
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import SliderImg from '../data'
import Carousel from 'react-bootstrap/Carousel'
const SlideSlow = () => {
  const [sliderImg,SetSliderImg]=useState(SliderImg);
  const [index, setIndex] = useState(0);

  
  return <Wrapper>
    <Carousel>
      {sliderImg.map((img,index)=>{
        const {id,image,name,title,quote}=img;
      
      
      return <Carousel.Item interval={1000}>
        <img src={image}  className="d-block w-100 imgCss"/>
       
        <Carousel.Caption><p>{quote}</p></Carousel.Caption>
      </Carousel.Item>
      })}
      

    </Carousel>
   
  </Wrapper>
}
const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .imgCss{
    height:500px;
    width:auto;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default SlideSlow
