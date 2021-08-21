
import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';
import styled from 'styled-components'
import {latestOpening} from '../utils/constants'

const Opening= () => {

  const [show, setShow] = useState(false);
  const [titleOpening,setTitleOpening]=useState();
  const [position,setPosition]=useState();
  const [location,setLocation]=useState();
  const [industry,setIndustry]=useState();
  const [experience,setExperience]=useState();
  const [ctc,setCTC]=useState();
  const [skills,setSkills]=useState([]);
  const [jd,setJD]=useState([]);
  const [interviewProcess,setInterviewProcess]=useState([]);
  const [otherDetails,setOtherDetails]=useState();



  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true)
    setTitleOpening(data.title);
    setPosition(data.position);
    setLocation(data.location)
    setIndustry(data.industry)
    setExperience(data.experience)
    setCTC(data.ctc)
    setSkills(data.skills)
    setJD(data.jd)
    setInterviewProcess(data.interview_process)
    setOtherDetails(data.otherDetails)
  }
  return (
    <Wrapper className="section">
     <h3>latest opening...</h3>
     {latestOpening.map((data)=>{
       return(
         
        <div className="openinig_div">
        <button key={data.id} className={`${false?'btn active':'btn expertise'}`} variant="primary" onClick={()=>handleShow(data)}>{data.title}</button>
        <div className={`${false?'job_details_show':'job_details_hide'}`}>
          <p>Details</p>
        </div>
        </div>

       );
     })}
    <Modal show={show} onHide={handleClose} className="modalWidth">
        <Modal.Header closeButton>
          <Modal.Title> {titleOpening}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
        
          <tbody>
            <tr>
              <td><b>Position</b></td>
              <td>{position}</td>
            </tr>
            <tr>
              <td><b>Location</b></td>
              <td>{location}</td>
            </tr>
            <tr>
              <td><b>Industry</b></td>
              <td>{industry}</td>
            </tr>
            <tr>
              <td><b>Experiance</b></td>
              <td>{experience}</td>
            </tr>
            <tr>
              <td><b>Skills</b></td>
              <td>{skills.map((data)=>{
                return (<ul>
                  <li>{data}</li>
                </ul>)
              })}</td>
            </tr>
            <tr>
              <td><b>Job descriptions</b></td>
              <td>{jd.map((data)=>{
                return (<ul>
                  <li>{data}</li>
                </ul>)
              })}</td>
            </tr>
            <tr>
              <td><b>Interview Process</b></td>
              <td>{interviewProcess.map((data)=>{
                return (<ul>
                  <li>{data}</li>
                </ul>)
              })}</td>
            </tr>
            <tr>
              <td colSpan="2">{otherDetails}</td>
             
            </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
        <button variant="secondary" onClick={handleClose} className="btn expertise">
            Apply
          </button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
    </Wrapper>
  )
}
const Wrapper = styled.section`

margin-top:-80px;
  width:100%;
  height:auto;
  margin-top:.1rem;
  .expertise{
    background-color:#91c6f7;
    margin:2px;
  }
  .job_details_show{
    
  }
  .job_details_hide{
    display:none;
  }
  
  .btn {
    width:98%;
    margin-top:5px;
    display: flex;
    align-items: center;
    border-color: transparent;
    font-size: .8rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .btnApply{
    width:98%;
    margin-top:5px;
    display: flex;
    align-items: center;
    background:Red;
    border-color: transparent;
    font-size: .8rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
    border:1px solid black;
  }
  .active {
    border-color: var(--clr-grey-5);
    color:#FFFFFF;
  }
  
  .btn2 {
    width:100%;
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }`
export default Opening