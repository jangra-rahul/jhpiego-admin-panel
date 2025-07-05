"use client";
import { Card, Row, Col } from "react-bootstrap";
import CommonTitle from "../common/CommonTitle";
// import UserDetailCard from "../common/UserDetailCard";
// import DashboardProfileStats from "./DashboardProfileStats";
// import DashboardKeyInfoComponent from "./DashboardKeyInfoComponent";
import DashboardQuickStatsComponent from "./DashboardQuickStatsComponent";
import CommonButton from "../common/CommonButton";
import addemployeeIcon from "../../../public/images/svg/addemployeeIcon.svg"
import trackIcon from "../../../public/images/svg/trackIcon.svg"
import ContractsIcon from "../../../public/images/svg/contractsIcon.svg"




export default function DashboardComponent() {
  return (
   <>
   <div className="d-md-flex gap-3 align-items-center justify-content-between">
    <CommonTitle title="Dashboard"/>
    <div className="d-flex flex-wrap align-items-center gap-3">
    
       <CommonButton
        text="Add Employee"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#00bcd4"
       image={addemployeeIcon}
       className=" custom_w w-md-auto" 
  
      />
       <CommonButton
        text="Track Employee"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#FD7E14"
       image={trackIcon}
       className=" custom_w w-md-auto" 
  
      />
       <CommonButton
        text="Contracts"
        color="#fff"
        width="100%"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#28A745"
       image={ContractsIcon}
       className=" custom_w w-md-auto" 
  
      />
      </div>
   </div>
   
   <DashboardQuickStatsComponent/>
   {/* <UserDetailCard/>
   <DashboardProfileStats/> */}
   {/* <DashboardKeyInfoComponent/> */}
    </>
  );
}
