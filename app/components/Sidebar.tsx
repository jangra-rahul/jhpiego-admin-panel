"use client";
import { Nav } from "react-bootstrap";
import sidebarlogo from "../../public/images/svg/sidebarLogo.svg";
import dashboardIcon from "../../public/images/svg/dashboardIcon.svg";
import profileIcon from "../../public/images/svg/profileIcon.svg";
import resumeIcon from "../../public/images/svg/resumeIcon.svg";
import SettingsIcon from "../../public/images/svg/sattingIcon.svg";
import HelpIcon from "../../public/images/svg/helpIcon.svg";
import toolkitIcon from "../../public/images/svg/toolkitIcon.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  const topNavItems = [
    { label: "Dashboard", icon: dashboardIcon, href: "/dashboard" },
    { label: "My Profile", icon: profileIcon, href: "/add-employee" },
    { label: "Resume", icon: resumeIcon, href: "/employee-directory" },
    { label: "HR Toolkit", icon: toolkitIcon, href: "/project-assignments" },
  ];

  const bottomNavItems = [
    { label: "Settings", icon: SettingsIcon, href: "/skill-mapping" },
    { label: "Help", icon: HelpIcon, href: "/reports-exports" },
  ];

  return (
    <div
      className="bg_darkTheme py-4 overflow-auto pb-0 text-white position-fixed top-0 start-0 h-100 d-flex flex-column justify-between"
      style={{ width: "250px" }}
    >
      <div className="px-3 d-flex  flex-column justify-content-between h-100">
      <div>
          <div className="text-center">
          <Image className="w-100" height={100} src={sidebarlogo} alt="logo" />
        
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
            >
              <Image width={24} height={24} src={icon} alt={`${label} icon`} />
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
      </div>

      <div className="px-3 pb-3">
        <Nav className="flex-column">
          {bottomNavItems.map(({ label, icon, href }) => (
            <Nav.Link
              as={Link}
              href={href}
              key={href}
              className={`sidebar-link text-white d-flex fs_14 mt-2 fw-medium gap-2 align-items-center nav-link ${
                pathname === href ? "active-link" : ""
              }`}
            >
              <Image width={24} height={24} src={icon} alt={`${label} icon`} />
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </div>
  );
}
