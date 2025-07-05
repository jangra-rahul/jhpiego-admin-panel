import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CommonInput from '../common/CommonInput'
import CommonSelect from '../common/CommonSelect'
import CommonButton from '../common/CommonButton'

export const EmployeeDetails = () => {
  return (
    <div className='pb-4'>
        <div style={{boxShadow:"box-shadow: 0px 8px 12px 0px #0000001A;"}} className="bg-white rounded-2 pb-2 p-4">
        <h3 className=' fs_22 fw-bold mb-0'>Basic Information</h3>
        <div className="border my-3"></div>
        <Row>
            <Col lg={4} md={6} >
              <CommonInput
    label="First Name*"
    type="text"
    placeholder="Enter first name"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Middle Name"
    type="text"
    placeholder="Enter middle name"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Last Name"
    type="text"
    placeholder="Enter last name"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Date of Birth*"
    type="date"
    placeholder="Select date of birth"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Email*"
    type="email"
    placeholder="Enter email address"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Phone No.*"
    type="number"
    placeholder="Enter phone number"
  />
            </Col>
        </Row>
        </div>
        <div style={{boxShadow:"box-shadow: 0px 8px 12px 0px #0000001A;"}} className="bg-white mt-4 rounded-2 pb-4 p-4">
        <h3 className=' fs_22 fw-bold mb-0'>Employment Details</h3>
        <div className="border my-3"></div>
        <Row>
            <Col lg={4} md={6} >
              <CommonInput
    label="Staff Employee code**"
    type="text"
    placeholder="Enter code"
  />
            </Col>
            <Col lg={4} md={6} >
            <CommonSelect
    label="Select state"
placeholder = "Select state"
    options={["Haryana", "ect."]}
    // value={} onChange={} optional
  />
            </Col>
            <Col lg={4} md={6} >
            <CommonSelect
    label="Location*"
placeholder = "Select location"
    options={["Haryana", "ect."]}
    // value={} onChange={} optional
  />
            </Col>
            
            
            <Col lg={4} md={6} >
            <CommonSelect
    label="Department*"
placeholder = "Select department"
    options={["Haryana", "ect."]}
    // value={} onChange={} optional
  />
            </Col>
            <Col lg={4} md={6} >
            <CommonSelect
    label="Designation*"
placeholder = "Select designation"
    options={["Haryana", "ect."]}
    // value={} onChange={} optional
  />
            </Col>

         
          
         
            <Col lg={4} md={6} >
              <CommonInput
    label="Title*"
    type="text"
    placeholder="Enter tittle"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Working Tittle*"
    type="text"
    placeholder="Enter working tittle"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Date of Joining*"
    type="date"
    placeholder="Select date of joining"
  />
            </Col>
            <Col lg={4} md={6} >
              <CommonInput
    label="Contract End Date (if any)*"
    type="date"
    placeholder="Select contract end date"
  />
            </Col>
            <Col lg={4} md={6} >
            <CommonSelect
    label="Supervisor*"
placeholder = "Select supervisor"
    options={["Haryana", "ect."]}
    // value={} onChange={} optional
  />
            </Col>
            <Col lg={4} md={6} >
            <CommonSelect
    label="Program*"
placeholder = "Select Programs"
    options={["Haryana", "ect."]}
    // value={} onChange={} optional
  />
            </Col>
            <Col lg={4} md={6} >
            <CommonSelect
    label="Head of Department*"
placeholder = "Select HOD"
    options={["Haryana", "ect."]}
    // value={} onChange={} optional
  />
            </Col>
        </Row>

        <h6 className='fs_16 fw-medium mb-0 '>Status*</h6>
     <div className='d-flex mt-2 gap-4'>
          <div className='d-flex align-items-center gap-1'>
         <input type="radio" id="html" name="fav_language" value="HTML"/>
<label className='fs_14 fw-normal' form="html">Active</label>
       </div>
<div className='d-flex align-items-center gap-1'>
    <input type="radio" id="css" name="fav_language" value="CSS"/>
<label className='fs_14 fw-normal' form="css">Inactive</label>
</div>
     </div>
        </div>
        <div className="d-flex gap-3 justify-content-end mt-4">
       
            <CommonButton
        text="Reset Form"
        color="#6C757D"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#fff"
       className=" custom_w w-md-auto" 
  
      />
            <CommonButton
        text="Save Credentials"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#00bcd4"
       className=" custom_w w-md-auto" 
  
      />
       </div>
        </div>
  )
}
