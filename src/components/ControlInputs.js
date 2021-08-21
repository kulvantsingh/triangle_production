
import React, { useRef, useState } from 'react'
import { formatPrice } from "../utils/helpers"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCandyCane, FaCross, FaTimes } from 'react-icons/fa'
import {courseStream,qualifications,latestOpening,twelthSubjects} from '../utils/constants'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
const ControlInputs=()=>{

  //validation methods
  const isEmpty=(value)=>value.trim()!=='';
  const isMobileValid=(value)=>value.trim().length!==10;
  const [formInputsValidity,setFormInputsValidity]=useState({
        isDiplomaValid:true,
        isUgCourseValid:true,
        isPgCourseValid:true,
        isnameValid:true,
        isMobileValid:true,
        isCtcValid:true,
        isEmailValid:true,
        isExperianceValid:true,
        isIndustryValid:true,
        isExpectedCTCValid:true,
        isMobile2Valid:true,
        isHEValid:true,
        isDiplomaStreamValid:true,
        isDiplomaMarksValid:true,
        isTenthMarksValid:true,
        isTwelthMarksValid:true,
        isTwelthSubjectValid:true,
        isUgStreamValid:true,
        isUgMarksValid:true,
        isPgStreamValid:true,
        isPgMarksValid:true

  })


  const [isDiploma,setDiploma]=useState(true);
  const [isCourseUg,setCourseUg]=useState(true);
  const [ugCourseId,setUgCourseId]=useState(null);
  const [ugStream,setUgStream]=useState(null);
  const [isTenthHE,setTenthHE]=useState(false);
  const [isTwelthHE,setTwelthHE]=useState(false);
  const [isUGHE,setUGHE]=useState(false);
  const [isPGHE,setPGHE]=useState(false);
  const [isCoursePg,setCoursePg]=useState(true);
  const [pgCourseId,setpgCourseId]=useState(null);
  
  const isDiplomaRef=useRef();
  const ugCourseRef=useRef();
  const pgCourseRef=useRef();
 

  const nameRef=useRef("");
  const mobileRef=useRef("");
  const ctcRef=useRef("");
  const emailRef=useRef("");
  const experianceRef=useRef("");
  const industryRef=useRef("");
  const expectedCTCRef=useRef("");
  const mobile2Ref=useRef("");
  const HERef=useRef("");
  const diplomaStreamRef=useRef("");
  const diplomaMarksRef=useRef("");
  const tenthMarksRef=useRef("");
  const twelthMarksRef=useRef("");
  const twelthSubjectRef=useRef("");
  const ugStreamRef=useRef("");
  const ugMarksRef=useRef("");
  const pgStreamRef=useRef("");
  const pgMarksRef=useRef("");
  const fileRef=useRef(null);
 
  

  const formSubmit=(event)=>{
    event. preventDefault();
    let tenthMarks=null;
    let twelthSubjectSelected=null;
    let twelthMarks=null;
    let ugStream=null;
    let ugMarks=null;
    let pgStream=null;
    let pgMarks=null;
    let diplomaStream=null;
    let diplomaMarks=null;

    setFormInputsValidity({
      isnameValid:isEmpty(nameRef.current.value)
    });
    //to check the over-all form validity
    const isFormValid=formInputsValidity.isnameValid;
    alert(isFormValid);

    const candidateName=nameRef.current.value;
    const mobile=mobileRef.current.value;
    const industry=industryRef.current.value;
    const ctc=ctcRef.current.value;
    const expectedCTC=expectedCTCRef.current.value;
    const email=emailRef.current.value;
    const experiance=experianceRef.current.value;
    const mobile2=mobile2Ref.current.value;
    const HigherEducation=HERef.current.value;
    if(diplomaStreamRef.current!==null){
    diplomaStream=diplomaStreamRef.current.value;}
    if(diplomaMarksRef.current!==null){
     diplomaMarks=diplomaMarksRef.current.value;}
     else{
      diplomaMarks="NA"
     }
    
    if(tenthMarksRef.current!==null){
      tenthMarks=tenthMarksRef.current.value;
    }
    else{
      tenthMarks="NA"
    }
    if(twelthSubjectRef.current!==null){
      twelthSubjectSelected=twelthSubjectRef.current.value;}
      else{
        twelthSubjectSelected="NA"
      }
    if(twelthMarksRef.current!==null){
      twelthMarks=twelthMarksRef.current.value;}
      else{
        twelthMarks="NA"
      }
    if(ugStreamRef.current!==null){
      ugStream=ugStreamRef.current.value;}
      else{
        ugStream="NA"
      }
    if(ugMarksRef.current!==null){
      ugMarks=ugMarksRef.current.value;}
      else{
        ugMarks="NA"
      }
    if(pgStreamRef.current!==null){
      pgStream=pgStreamRef.current.value;}
      else{
        pgStream="NA"
      }
    if(pgMarksRef.current!==null){
      pgMarks=pgMarksRef.current.value;}
      else{
        pgMarks="NA"
      }

    if(isFormValid){

      fetch('https://triangel-bcb19-default-rtdb.firebaseio.com/users.json',{
        method:'POST',
        body:JSON.stringify({
        name:candidateName,
        email:email,
        mobile:mobile,
        ctc:ctc,
        expectedCTC:expectedCTC,
        industry:industry,
        experiance:experiance,
        mobile2:mobile2,
        highnerEduction:HigherEducation,
        diplomaStream:diplomaStream,
        diplomaMarks:diplomaMarks,
        tenthMarks:tenthMarks,
        twelthSubjects:twelthSubjectSelected,
        twelthMarks:twelthMarks,
        ugStream:ugStream,
        ugMarks:ugMarks,
        pgStream:pgStream,
        pgMarks:pgMarks

        }
        )
      })
    }
  }

  const diplomaSelected=(e)=>{
    if(isDiplomaRef.current.value==='3'){
      setDiploma(false);
    }
    else{
      setDiploma(true);
    }
  }
  const ugCourseSelected=(e)=>{
   
    if(ugCourseRef.current.value!==0){
      
      setCourseUg(false);
      setUgCourseId(ugCourseRef.current.value);
    }
    else{
      setCourseUg(true);
      setUgCourseId("0");
    }
  }

  const pgCourseSelected=(e)=>{
   
    if(pgCourseRef.current.value!==0){
      
      setCoursePg(false);
      setpgCourseId(pgCourseRef.current.value);
    }
    else{
      setCoursePg(true);
      setpgCourseId("0");
    }
  }
  const higherEducation=(e)=>{
   
    if(HERef.current.value==='10th'){
      setTenthHE(true);
      setTwelthHE(false);
      setUGHE(false);
      setPGHE(false);
    }
    else if(HERef.current.value==='12th'){
      setTenthHE(true);
      setTwelthHE(true);
      setUGHE(false);
      setPGHE(false);
    }
    else if(HERef.current.value==='UG'){
      setTenthHE(true);
      setTwelthHE(true);
      setUGHE(true);
      setPGHE(false);
    }
    else if(HERef.current.value==='PG'){
      setTenthHE(true);
      setTwelthHE(true);
      setUGHE(true);
      setPGHE(true);
    }
    else if(HERef.current.value==='0'){
      setTenthHE(false);
      setTwelthHE(false);
      setUGHE(false);
      setPGHE(false);
    }
  }


return(
    <main>
        <Wrapper >
            
            { <div className="section">
          
           

            <form>
                <div  className="form"> 
                <div className="form-control">
                  <h5>Personal Details</h5>
                  <div>
                  {!formInputsValidity.isnameValid&&<label for="name">Please input valid name</label>}
                  
                    <input type="text" id="name" name="name" className="text-input" placeholder="Name" ref={nameRef}/>
                    <input type="text" id="mobile" name="mobile" className="text-input" placeholder="10-digit mobile number" ref={mobileRef}/>
                    </div>
                    <input type="text" id="ctc" name="ctc" className="text-input" placeholder="Current CTC" ref={ctcRef}/>
                    <input type="text" id="email" name="email" className="text-input" placeholder="Email" ref={emailRef}/>
              
                    <input type="text" id="industry" name="industry" className="text-input" placeholder="industry" ref={industryRef}/>
                    <input type="text" id="experiance" name="experiance" className="text-input" placeholder="experiance" ref={experianceRef}/>
                
                    <input type="text" id="expectedCTC" name="expectedCTC" className="text-input" placeholder="expectedCTC" ref={expectedCTCRef}/>
                    <input type="text" id="mobile2" name="mobile2" className="text-input" placeholder="Alternate Phone(Optional)" ref={mobile2Ref}/>
                </div>
                <div className="form-control">
                <h5>Higher Education??</h5>
                <select name='higherEductaion'  className='subCategory' onChange={higherEducation} ref={HERef}>
            
                  <option value="0" >
                  Select Higher Education.
                  </option>
                  <option value="10th">
                  10th
                  </option>
                  <option value="12th" >
                  12th
                  </option>
                  <option value="UG" >
                 Graduate
                  </option>
                  <option value="PG" >
                 Post Graduate
                  </option>

            </select>
                 </div>

            <div className="form-control">
              <h5>Educational Details</h5>
               {isTenthHE&&<div> <select name='isDiploma'  className='subCategory' onChange={diplomaSelected} ref={isDiplomaRef}>
            
                  <option value="" >
                   Are you Diploma holder?
                  </option>
                  <option value="3">
                  Yes
                  </option>
                  <option value="0" >
                  No
                  </option>

            </select>

            <select name='diploma_stream'  className={`${!isDiploma?'subCategory':'subCategory inputDisabled'}`} disabled={isDiploma} ref={diplomaStreamRef}>
            <option value="" defaultValue>Select Stream</option>
                {courseStream.filter(function (data){
                  return(data.qualificationId===4)
                }).map((data)=>{
                
                return(<option value={data.courseStreamName}>{data.courseStreamName}</option>)
                
                })}

            </select>
            <input type="text" id="diplomar_marks" name="diplomaMarks" className={`${!isDiploma?'subCategory':'subCategory inputDisabled'}`} placeholder="Marks" ref={diplomaMarksRef} disabled={isDiploma}/>
         </div>} 
          {isTenthHE&&<div>
          <input value="10th" className="subCategory" disabled="true"></input>
          <input type="text" id="tenth_marks" name="tenthMarks" className="subCategory" placeholder="Marks" ref={tenthMarksRef} disabled={isDiploma}/>
          </div>}
          {isTenthHE&&isTwelthHE&&<div>
           <input value="12th" className="subCategory" disabled="true"></input>
           <select name='12thSubject'  className='subCategory' ref={twelthSubjectRef} >
            
                  <option value="" defaultValue>
                   Select 12th Subject
                  </option>
                {twelthSubjects.map((data)=>{
                  return (<option value={data.courseStreamAlias}>{data.courseStreamAlias}</option>)
                })}

            </select>
            <input type="text" id="twelth_marks" name="twelthMarks" className="subCategory" placeholder="Marks" ref={twelthMarksRef} disabled={isDiploma}/>
           </div>}
           
          {isTenthHE&&isTwelthHE&&isUGHE&&<div> <select name='ug'  className='subCategory' onChange={ugCourseSelected} ref={ugCourseRef} >
            
                  <option value="0" defaultValue>
                   Select UG Course
                  </option>
                {qualifications.filter(function (data){return data.eduLevelId==2}).map((data)=>{
                  return (<option value={data.qualificationId}>{data.qualificationName}</option>)
                })}

            </select>
            {<select name='ug_stream'  className={`${!isCourseUg?'subCategory':'subCategory inputDisabled'}`} disabled={isCourseUg} ref={ugStreamRef}>
            <option value="" defaultValue>Select Stream</option>
                {courseStream.filter(function (data){
                  return data.qualificationId==ugCourseId
                }).map((data)=>{
                
                return(<option value={data.courseStreamName}>{data.courseStreamName}</option>)
                
                })}

            </select>}
            <input type="text" id="ug_marks" name="ugMarks" className={`${!isCourseUg?'subCategory':'subCategory inputDisabled'}`} placeholder="Marks" ref={ugMarksRef} disabled={isCourseUg}/>
          </div>
          }
            {isTenthHE&&isTwelthHE&&isUGHE&&isPGHE&&<div>   <select name='pg'  className='subCategory'  ref={pgCourseRef} onChange={pgCourseSelected}>
            
                  <option value="0" defaultValue>
                   Select PG Course
                  </option>
                  {qualifications.filter(function (data){return data.eduLevelId==3}).map((data)=>{
                  return (<option value={data.qualificationId}>{data.qualificationName}</option>)
                })}

            </select>
            <select name='pg_stream'  className={`${!isCoursePg?'subCategory':'subCategory inputDisabled'}`} disabled={isCoursePg} ref={pgStreamRef}>
            <option value="" defaultValue>Select Stream</option>
            {courseStream.filter(function (data){
                  return data.qualificationId==pgCourseId
                }).map((data)=>{
                
                return(<option value={data.courseStreamName}>{data.courseStreamName}</option>)
                
                })}

            </select>
            <input type="text" id="pg_marks" name="pgMarks" className={`${!isCoursePg?'subCategory':'subCategory inputDisabled'}`} placeholder="Marks" ref={pgMarksRef} disabled={isCoursePg}/>
          </div>
            }
          </div>

                <div className="form-control">
                  <h5>Curriculum vitae</h5>
                  <span>Upload CV</span>
                  <input type="file" name="file"  className="subCategory"/>
                </div>
                <div>
                <button type="submit" className="btn btn-info" onClick={formSubmit}>Submit</button>
                <button type="reset" className="btn btn-clear">Clear</button>
                </div>
                </div>
            </form>
            
            </div>}
        </Wrapper>
    </main>
);
}

const Wrapper = styled.div`
.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border:1px solid black
}

form{
  width:100%;
  padding:auto;
  
 
}
.info{
  margin-top:0px;
 
}
.btn-toggle{
  width:20rem;
}
.subCategory{
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  border-color: transparent;
  padding: 0.25rem;
  margin-left:0.5rem;
  width:12.8rem;
}
.inputDisabled{
  cursor: not-allowed;
}
.products {
  display: block;
  gap: 3rem 1.5rem;
  margin:1rem auto;
  width:100%;
  
}


  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .rec{
    border:1px solid black;
  }
  .text-input {
    
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    width:30rem;
    margin-left:.1rem;
    margin-top:10px;
   
  }
 
  .radio{
      margin-left:2rem
  }
  .text-input::placeholder {
    text-transform: capitalize;
  }
  
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background:var(--clr-grey-5);
    border-color: transparent;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    cursor: pointer;
    float:left;
  }

  .btn {
    margin-left:-10px;
    width:19vw;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    margin-left:30px;
   
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .btn-clear{
    background:var(--clr-grey-10);
    color: var(--clr-grey-1);
  }
  
  .active {
    border-color: var(--clr-grey-5);
  }
  
  
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 360px) {

    .text-input {
        padding: 0.5rem;
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        letter-spacing: var(--spacing);
        margin-bottom:1rem;
        width:20rem;
        
      }
      .inputDisabled{
        cursor: not-allowed;
      }
      .subCategory {
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        padding: 0.25rem;
        margin:0.5rem;
        width:20rem;
        border:1px solid black;
      }
      .btn {
        margin-left:10px;
        width: 95%;
        margin-top: 1rem;
        text-align: center;
        font-weight: 700;
      }
      .text-area{
        padding: 0.5rem;
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        letter-spacing: var(--spacing);
        width:20rem;
      }
  }
  @media (min-width: 698px) {

    .text-input {
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
      margin-bottom:1rem;
      width:20rem;   
    }
    .inputDisabled{
      cursor: not-allowed;
    }
    .subCategory {
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      padding: 0.25rem;
      margin:0.5rem;
      width:12.8rem;
    }
    .btn {
      margin-left:-10px;
      width:19vw;
      margin-top: 1rem;
      text-align: center;
      font-weight: 700;
      margin-left:30px;
     
    }
    .btn-clear{
      background:var(--clr-grey-10);
      color: var(--clr-grey-1);
    }
    
    .text-area{
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
      width:42rem;
    }
    .products {
      grid-template-columns: 200px 1fr;
    }
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`
export default ControlInputs;