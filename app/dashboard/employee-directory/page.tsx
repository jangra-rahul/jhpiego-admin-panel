import CommonButton from '@/app/components/common/CommonButton'
import CommonTitle from '@/app/components/common/CommonTitle'
import React from 'react'
import downoaldIcon from "../../../public/images/svg/downloadIcon.svg";
import pdfIcon from "../../../public/images/svg/pdfIcon.svg";
import filterIcon from "../../../public/images/svg/filterIcon.svg";
import excalIcon from "../../../public/images/svg/excelFileIcon.svg";
import { Col, Row } from 'react-bootstrap';
import CommonSelect from '@/app/components/common/CommonSelect';
import CommonTable from '@/app/components/common/CommonTable';



const employeeData = [
  {
    id: '7654321',
    name: 'Pranav Kumar',
    location: 'Gurugram, India',
    department: 'Design',
    designation: 'Project Manager',
    manager: 'Ritika Malhotra',
    status: 'Active',
  },
  {
    id: '7654654',
    name: 'Sneha Joshi',
    location: 'Gurugram, India',
    department: 'Community Development',
    designation: 'Project Manager',
    manager: 'Aditya Nair',
    status: 'Inactive',
  },
  {
    id: '7654877',
    name: 'Tanvi Bhattacharya',
    location: 'Hyderabad, India',
    department: 'IT & Systems',
    designation: 'Project Manager',
    manager: 'Manish Choudhary',
    status: 'Active',
  },
  // ...add rest from image
];

const page = () => {
  return (
    <div>
        <CommonTitle title="Employee Directory"/> 
      <div className="bg-white rounded-2 p-4 pb-1 mt-5">
        <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex gap-3 align-items-center">
 <CommonButton
        text="Import CSV"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#00bcd4"
       image={downoaldIcon}
       
       className=" custom_w w-md-auto" 
  
      />
 <CommonButton
        text="Export PDF"
        color="#00bcd4"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#fff"
        style={{border: "1px solid #00BCD4"}}
       image={pdfIcon}
       className=" custom_w w-md-auto" 
  
      />
 <CommonButton
        text="Export Excel"
        color="#00bcd4"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#fff"
       image={excalIcon}
       style={{border: "1px solid #00BCD4"}}
       className=" custom_w w-md-auto" 
  
      />
            </div>
            <CommonButton
        text="Advanced Filters"
        color="#00bcd4"
        width="100%"
        height="40px"
        fontSize="13px"
        fontWeight="700"
        backgroundColor="#fff"
       image={filterIcon}
       style={{border: "1px solid #00BCD4"}}
       className=" custom_w w-md
       -auto" 
  
      />
        </div>
        <Row>

            <Col lg={3} mb={6}>
                <CommonSelect
    label=""
    options={["HR", "Employees"]}
    placeholder = "Location"
    style={{backgroundColor:"#F5F5F5"}}
    // value={} onChange={} optional
  />
            </Col>
            <Col lg={3} mb={6}>
                <CommonSelect
    label=""
    options={["HR", "Employees"]}
    placeholder = "Department"
    style={{backgroundColor:"#F5F5F5"}}
    // value={} onChange={} optional
  />
            </Col>
            <Col lg={3} mb={6}>
                <CommonSelect
    label=""
    options={["HR", "Employees"]}
    placeholder = "Designation"
    style={{backgroundColor:"#F5F5F5"}}
    // value={} onChange={} optional
  />
            </Col>
            <Col lg={3} mb={6}>
                <CommonSelect
    label=""
    options={["HR", "Employees"]}
    placeholder = "Status"
    style={{backgroundColor:"#F5F5F5"}}
    // value={} onChange={} optional
  />
            </Col>
        </Row>
       
      </div>
       <div className='mt-4'>
            <CommonTable data={employeeData}/>
        </div>
    </div>
  )
}

export default page
