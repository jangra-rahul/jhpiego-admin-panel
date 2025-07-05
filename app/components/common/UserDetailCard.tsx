import React from "react";
import Image from "next/image";
import { Badge, Row } from "react-bootstrap";
import profileImage from "../../../public/images/svg/profilelogo.svg"; // Replace with your image path

const UserDetailCard = () => {
  return (
    <div className="bg-white rounded detailCard p-4 d-flex flex-column flex-md-row gap-4">
      {/* Profile Image and Name */}
     

      {/* Detail Info Section */}
      <div className="row w-100 mt-3 mt-md-0">
         <div className="d-flex col-5 align-items-center gap-3">
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
      <div className="col-7">
         <Row>
         {[
          { label: "Staff Emp ID:", value: "7890172" },
          { label: "Date of joining:", value: "25-06-2022" },
          { label: "Location:", value: "New York" },
          { label: "Department:", value: "Marketing" },
          { label: "Designation:", value: "Marketing Manager" },
          { label: "Job Title:", value: "Content & Campaigns" },
        ].map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
            <small className=" fs_14 fw-nomal clr_gray mb-0">{item.label}</small>
            <div className="fw-semibold fs_14 fw-bold clr_lightblack mb-0">{item.value}</div>
          </div>
        ))}
       </Row>
      </div>
      </div>
    </div>
  );
};

export default UserDetailCard;
