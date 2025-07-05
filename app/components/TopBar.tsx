"use client";
import Image from "next/image";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import searchicon from "../../public/images/svg/searchIcon.svg";
import profilelogo from "../../public/images/svg/profilelogo.svg";
import notifactionIcon from "../../public/images/svg/notifactionIcon.svg";
import logo from "../logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function TopBar({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
      const [showSearchMobile, setShowSearchMobile] = useState(false);

  return (
    <header className="bg-white fixed-top shadow-sm  border-bottom sidebarSpace" >
      <Container fluid className="py-3 px-4">
        <Row className="align-items-center ">
          <Col  className="d-md-none d-block">
           <Image width={54} height={54} src={logo} alt=" icon"/>
          </Col>
          <Col >
           <div className="d-none d-md-flex align-items-center gap-2 fs_16 fw-normal input_box">
              <Image width={24} height={24} src={searchicon} alt="icon" />
              <input
                className="border-0 w-100 py-1 px-3"
                style={{ backgroundColor: "transparent" }}
                type="text"
                placeholder="Search Project"
              />
            </div>

            {/* Mobile View */}
            <div className="d-flex d-md-none justify-content-end align-items-center gap-2 fs_16 fw-normal ">
              <Image
                width={24}
                height={24}
                src={searchicon}
                alt="icon"
                onClick={() => setShowSearchMobile(!showSearchMobile)}
                role="button"
                style={{ cursor: "pointer" }}
              />
             
            </div>
          </Col>
          <Col className="text-end d-flex justify-content-end ">
<div className="d-flex gap-md-4 gap-3 align-items-center">
    <div className="d-flex align-items-center gap-2 ">
    <div className="d-md-block d-none">
        <h5 className="fs_14 mb-0 clr_darkgray">Siddharth Rao</h5>
        <p className="fs_14 mb-0 clr_gray">HR Manager</p>
    </div>
     <Image width={40} height={40} src={profilelogo} alt=" icon"/>
</div>
<Image width={40} height={40} src={notifactionIcon} alt=" icon"/>

 <Col xs="auto" className="d-md-none pe-0">
            <Button variant="link" className="p-0 me-3 text-dark" onClick={onToggleSidebar}>
              <FaBars size={22} />
            </Button>
          </Col>


</div>
          </Col>
        </Row>
         {showSearchMobile && (
                <input
                  className="border-0 mt-3  w-100 py-2 rounded-2 px-3"
                  style={{ backgroundColor: "#E4F5F7" }}
                  type="text"
                  placeholder="Search Project"
                  autoFocus
                />
              )}
      </Container>
    </header>
  );
}


