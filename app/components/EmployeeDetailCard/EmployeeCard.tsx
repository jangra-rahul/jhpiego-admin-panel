


import React from "react";
import Image from "next/image";
import { Badge, Col, Row } from "react-bootstrap";
import profileImage from "../../../public/images/svg/profilelogo.svg"; // Replace with your image path

const EmployeeCard = () => {
  return (
    <div className="bg-white my-4 mt-md-0 rounded detailCard p-4 d-flex flex-column flex-md-row gap-4">
      {/* Profile Image and Name */}
     
<div className="w-100">
   <Row className="mt-md-3 ">
    <Col lg={11}>
     <Row>
        <Col md={3} className="px-4 ">
            <p className="mb-0 fs_16 text-nowarp text-center mb-md-3 mb-1 mt-4 mt-md-0 fw-semibold clr_theme">Current Employment</p>
            <div className="border border-2 rounded-5"></div>
        </Col>
        <Col md={3} className="px-4 ">
            <p className="mb-0 fs_16 text-nowarp text-center mb-md-3 mb-1 mt-4 mt-md-0 fw-semibold clr_lightblack">Previous Employment <span className="fw-normal"> (if any)</span></p>
            <div className="border border-2 rounded-5"></div>
        </Col>
        <Col md={2} className="px-4 ">
            <p className="mb-0 fs_16 text-nowarp text-center mb-md-3 mb-1 mt-4 mt-md-0 fw-semibold clr_lightblack">Personal Details</p>
            <div className="border border-2 rounded-5"></div>
        </Col>
        <Col md={2} className="px-4 ">
            <p className="mb-0 fs_16 text-nowarp text-center mb-md-3 mb-1 mt-4 mt-md-0 fw-semibold clr_lightblack">Employment Details</p>
            <div className="border border-2 rounded-5"></div>
        </Col>
        <Col md={2} className="px-4 ">
            <p className="mb-0 fs_16 text-nowarp text-center mb-md-3 mb-1 mt-4 mt-md-0 fw-semibold clr_lightblack">HR Toolkit</p>
            <div className="border border-2 rounded-5"></div>
        </Col>
    </Row>
    </Col>
   </Row>
    <div className="border w-100 mb-4"></div>
      {/* Detail Info Section */}
      <div className="row w-100 mt-5">
         <div className="d-flex col-md-5 align-items-center gap-3">
        <Image
          src={profileImage}
          alt="Profile"
          width={128}
          height={128}
          className="rounded-circle object-fit-cover"
        />
        <div>
          <h5 className="mb-1 fw-bold clr_lightblack mb-0 fs_22 ">Aarushi Mehta</h5>
<span className="d-flex justify-content-center align-items-center  " style={{backgroundColor:"#DFF2E3", borderRadius:"50px",maxWidth:"70px"}}><div style={{width:'8px',height:"8px" ,backgroundColor:"#28A745",borderRadius:'50px'}}></div><span className="fs_12 fw-semibold " style={{color:'#28A745',padding:"2px"}}> Active</span></span>
        </div>
      </div>
      <div className="col-md-7 mt-4 mt-md-0">
         <Row>
         {[
          { label: "Staff Emp ID:", value: "7890172" },
          { label: "Date of joining:", value: "25-06-2022" },
          { label: "Location:", value: "New York" },
          { label: "Department:", value: "Marketing" },
          { label: "Designation:", value: "Marketing Manager" },
          { label: "Job Title:", value: "Content & Campaigns" },
        ].map((item, index) => (
          <div className=" col-6 col-md-4 mb-3" key={index}>
            <small className=" fs_14 fw-nomal clr_gray mb-0">{item.label}</small>
            <div className="fw-semibold fs_14 fw-bold clr_lightblack mb-0">{item.value}</div>
          </div>
        ))}
       </Row>
      </div>
      </div>
</div>
    </div>
  );
};

export default EmployeeCard;
