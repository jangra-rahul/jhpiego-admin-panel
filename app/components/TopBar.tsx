"use client";
import Image from "next/image";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import searchicon from "../../public/images/svg/searchIcon.svg";
import profilelogo from "../../public/images/svg/profilelogo.svg";
import notifactionIcon from "../../public/images/svg/notifactionIcon.svg";

export default function TopBar() {
  return (
    <header className="bg-white fixed-top shadow-sm  border-bottom" style={{marginLeft:"250px"}}>
      <Container fluid className="py-3 px-4">
        <Row className="align-items-center ">
          <Col md={4}>
           <div className=" d-flex align-items-center gap-0 fs_16 fw-normal input_box">
           <Image width={24} height={24} src={searchicon} alt=" icon"/>
           <input className=" border-0 w-100 py-1 px-3 " style={{backgroundColor:"transparent"}} type="text" placeholder="Search Project" />
           </div>
          </Col>
          <Col className="text-end d-flex justify-content-end ">
<div className="d-flex gap-4 align-items-center">
    <div className="d-flex align-items-center gap-2 ">
    <div>
        <h5 className="fs_14 mb-0 clr_darkgray">Siddharth Rao</h5>
        <p className="fs_14 mb-0 clr_gray">Employee</p>
    </div>
     <Image width={40} height={40} src={profilelogo} alt=" icon"/>
</div>
<Image width={40} height={40} src={notifactionIcon} alt=" icon"/>

</div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
