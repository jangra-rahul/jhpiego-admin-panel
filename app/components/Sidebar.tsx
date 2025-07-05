
"use client";
import { Nav } from "react-bootstrap";
import sidebarlogo from "../../public/images/svg/sidebarLogo.svg";
import dashboardIcon from "../../public/images/svg/dashboardIcon.svg";
import addEmployeesIcon from "../../public/images/svg/addemployeeIcon1.svg";
import resumeIcon from "../../public/images/svg/resumeIcon.svg";
import SettingsIcon from "../../public/images/svg/sattingIcon.svg";
import HelpIcon from "../../public/images/svg/helpIcon.svg";
import toolkitIcon from "../../public/images/svg/toolkitIcon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export default function Sidebar({ show, handleClose }: { show: boolean; handleClose: () => void }) {
  const pathname = usePathname();

  const topNavItems = [
    { label: "Dashboard", icon: dashboardIcon, href: "/dashboard" },
    { label: "Add Employee", icon: addEmployeesIcon, href: "/dashboard/add-employee" },
    { label: "Employee Directory", icon: resumeIcon, href: "/employee-directory" },
    { label: "Project Assignments", icon: toolkitIcon, href: "/project-assignments" },
    { label: "Skill Mapping", icon: toolkitIcon, href: "/project-assignments" },
    { label: "Reports & Exports", icon: toolkitIcon, href: "/project-assignments" },
  ];

  const bottomNavItems = [
    { label: "Settings", icon: SettingsIcon, href: "/skill-mapping" },
    { label: "Help", icon: HelpIcon, href: "/reports-exports" },
  ];

  const SidebarContent = () => (
    <div className="h-100 d-flex flex-column justify-content-between bg_darkTheme text-white py-4 px-3" style={{ width: "250px" }}>
      <div>
        <div className="text-center">
          <Image className="w-100" height={110} src={sidebarlogo} alt="logo" />
        </div>
        <p className="pt-5 text-center mb-0 fs_16 color-lightwhite">EMS</p>
        <Nav className="flex-column mt-3">
          {topNavItems.map(({ label, icon, href }) => (
            <Nav.Link
              as={Link}
              href={href}
              key={href}
              className={`sidebar-link text-white d-flex fs_14 mt-2 fw-medium gap-2 align-items-center nav-link ${
                pathname === href ? "active-link" : ""
              }`}
              onClick={handleClose}
            >
              <Image width={24} height={24} src={icon} alt={`${label} icon`} />
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
      <div>
        <Nav className="flex-column">
          {bottomNavItems.map(({ label, icon, href }) => (
            <Nav.Link
              as={Link}
              href={href}
              key={href}
              className={`sidebar-link text-white d-flex fs_14 mt-2 fw-medium gap-2 align-items-center nav-link ${
                pathname === href ? "active-link" : ""
              }`}
              onClick={handleClose}
            >
              <Image width={24} height={24} src={icon} alt={`${label} icon`} />
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="d-none d-md-block position-fixed top-0 start-0 h-100" style={{ width: "250px", zIndex: 1030 }}>
        <SidebarContent />
      </div>

      {/* Offcanvas for mobile */}
      <Offcanvas show={show} onHide={handleClose} className="bg_darkTheme text-white" placement="end">
        <Offcanvas.Header closeButton className="  bg-white px-3">
    
  </Offcanvas.Header >
        <Offcanvas.Body className="p-0">
          <SidebarContent  />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
