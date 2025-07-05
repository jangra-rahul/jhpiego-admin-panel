import CommonButton from '@/app/components/common/CommonButton'
import CommonTitle from '@/app/components/common/CommonTitle'
import editIconWhite from "../../../public/images/svg/editIconwhite.svg"
import updateIcon from "../../../public/images/svg/updateIcon.svg"
import flagIcon from "../../../public/images/svg/flagIcon.svg"
import React from 'react'
import EmployeeCard from '@/app/components/EmployeeDetailCard/EmployeeCard'
import { Col, Row } from 'react-bootstrap'
import CommonInput from '@/app/components/common/CommonInput'
import excalIcon from "../../../public/images/svg/excelFileIcon.svg";
import pdfIcon from "../../../public/images/svg/pdfIcon.svg";


const page = () => {
  return (
    <div>
        <div className="d-md-flex gap-3 align-items-center justify-content-between">
    <CommonTitle title="Employee Profile"/>
    <div className="d-flex flex-wrap align-items-center gap-3">
    
       <CommonButton
        text="Request Update"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#00bcd4"
       image={updateIcon}
       className=" custom_w w-md-auto" 
  
      />
       <CommonButton
        text="Flag for Review"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#FD7E14"
       image={flagIcon}
       className=" custom_w w-md-auto" 
  
      />
       <CommonButton
        text="Edit Profile"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#28A745"
       image={editIconWhite}
       className=" custom_w w-md-auto" 
  
      />
      </div>
   </div>

   <EmployeeCard/>

   <div style={{boxShadow:" 0px 8px 12px 0px #0000001A;"}} className="bg-white rounded-2 p-4 py-3 border-0">
    <Row className='justify-content-between align-items-center'>
        <Col md={5}>
<Row>
    <Col md={6}>
        <CommonInput
    label=""
    type="date"
    placeholder="Date From"
  />
</Col>
    <Col md={6}>
        <CommonInput
    label=""
    type="date"
    placeholder="Date From"
  />
</Col>
</Row>
        </Col>
        <Col md={5}>
<Row>
    <Col md={6}>
         <CommonButton
        text="Export PDF"
        color="#00bcd4"
        width="100%"
        height="45px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#fff"
       image={pdfIcon}
       style={{border: "1px solid #00BCD4"}}
       className="  w-md-auto" 
  
      />
</Col>
    <Col md={6}>
         <CommonButton
        text="Export Excel"
        color="#00bcd4"
        width="100%"
        height="45px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#fff"
       image={excalIcon}
       style={{border: "1px solid #00BCD4"}}
       className="  w-md-auto" 
  
      />
</Col>
</Row>
        </Col>
    </Row>
   </div>
    </div>
  )
}

export default page