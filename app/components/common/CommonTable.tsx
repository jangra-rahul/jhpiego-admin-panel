import Image from 'next/image';
import React from 'react';
import { Table, } from 'react-bootstrap';
import eyeIcon from "../../../public/images/svg/eyeIcon.svg"
import editIcon from "../../../public/images/svg/editIcon.svg"
import threeDotIcon from "../../../public/images/svg/threeDotIcon.svg"
import PaginationIcon from "../../../public/images/svg/PaginationImg.svg"

interface Employee {
  id: string | number;
  name: string;
  location: string;
  department: string;
  designation: string;
  manager: string;
  status: 'Active' | 'Inactive' | string;
}

interface CommonTableProps {
  data: Employee[];
}

const CommonTable: React.FC<CommonTableProps> = ({ data }) => {
  return (
     <div className="mb-4" style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
    <div style={{ minWidth: "1200px" }}>
      <Table
        hover
        responsive
        className="align-middle "
        
      >
        <thead className="table-primary">
          <tr>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px", borderRadius: "10px 0px 0px 0px" }} className='fs_16 fw-bold '>Emp ID</th>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px" }} className='fs_16 fw-bold '>Full Name</th>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px" }} className='fs_16 fw-bold '>Location</th>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px" }} className='fs_16 fw-bold '>Department</th>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px" }} className='fs_16 fw-bold '>Designation</th>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px" }} className='fs_16 fw-bold '>Reporting Manager</th>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px" }} className='fs_16 fw-bold '>Status</th>
            <th style={{ backgroundColor: "#00BCD4", color: "white", padding: "20px 30px", borderRadius: "0px 10px 0px 0px" }} className='fs_16 fw-bold '>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              <td style={{ padding: "20px 30px" }} className=' fs_16 fw-normal clr_lightgray mb-0'>{emp.id}</td>
              <td style={{ padding: "20px 30px" }} className=' fs_16 fw-meduim clr_gray mb-0'><strong>{emp.name}</strong></td>
              <td style={{ padding: "20px 30px" }} className=' fs_16 fw-normal clr_lightgray mb-0'>{emp.location}</td>
              <td style={{ padding: "20px 30px" }} className=' fs_16 fw-normal clr_lightgray mb-0'>{emp.department}</td>
              <td style={{ padding: "20px 30px" }} className=' fs_16 fw-normal clr_lightgray mb-0'>{emp.designation}</td>
              <td style={{ padding: "20px 30px" }} className=' fs_16 fw-normal clr_lightgray mb-0'>{emp.manager}</td>
              <td style={{ padding: "20px 30px" }} className=' fs_16 fw-normal clr_lightgray mb-0'>
                <div >
                 <span className="d-flex px-2 justify-content-center align-items-center  " style={{backgroundColor:"#DFF2E3", borderRadius:"50px",maxWidth:"70px"}}><div style={{width:'8px',height:"8px" ,backgroundColor:"#28A745",borderRadius:'50px'}}></div><span className="fs_12 fw-semibold " style={{color:'#28A745',padding:"2px"}}> {emp?.status}</span></span>

                </div>
              </td>
              <td style={{ padding: "20px 30px" }}>
                <div className="d-flex gap-2">
                  <Image width={24} height={24} src={eyeIcon} alt='eyeIcon'/>
                  <Image width={24} height={24} src={editIcon} alt='eyeIcon'/>
                  <Image width={15} height={24} src={threeDotIcon} alt='eyeIcon'/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <p className=' fs_16 fw-normal mb-0'>Showing 1-10 out of 530 employees</p>
         <Image width={489} height={48} src={PaginationIcon} alt='eyeIcon'/>
      </div>

    </div>
    </div>
  );
};

export default CommonTable;
