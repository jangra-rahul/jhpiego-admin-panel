

import React from "react";
import bagIcon from "../../public/images/svg/bagIcon.svg"
import Image from "next/image";
import tvIcon from "../../public/images/svg/tvIcon.svg";
import userIcon from "../../public/images/svg/userPulsIcon.svg";
import fileIcon from "../../public/images/svg/fileIcon1.svg";
import rightIcon from "../../public/images/svg/rightIocon.svg";

const activities = [
  {
    icon: bagIcon,
    text: "Arjun Sharma assigned to Project Yantra",
    time: "2 hours ago",
  },
  {
    icon: tvIcon,
    text: "Priya Kapoor promoted to Sr. Developer",
    time: "Yesterday",
  },
  {
    icon:userIcon,
    text: "New hire, Rohan Verma, joined the team",
    time: "2 days ago",
  },
  {
    icon: fileIcon,
    text: "New Company Policy Update regarding the remote work policy",
    time: "2 days ago",
  },
  {
    icon: rightIcon,
    text: "Performance reviews for Q3 completed",
    time: "1 week ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow-sm">
      <h5 className="fw-bold mb-4 fs_24 fw-bold mb-0">Activity Feed / Recent Actions</h5>
      <div className="position-relative mt-5 ps-4">
        {/* Vertical Line */}
        <div
          className="position-absolute ms-3 top-0 start-0 h-100 border-start border-2 "
          style={{ left: "10px", zIndex: 0,border:"2px solid #E4F5F7" }}
        ></div>

        {/* Activity Items */}
        {activities.map((item, index) => (
          <div key={index} className="mb-5 position-relative">
            {/* Icon Circle */}
            <div
              className="position-absolute  bg-white rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "20px",
                height: "20px",
                left: "-17px",
                top: "0px",
                zIndex: 1,
              }}
            >
             <Image width={30} height={30} src={item.icon} alt=""/>
            </div>

            {/* Content */}
            <div className="ms-4">
              <div className="fw-medium fs_16 fw-meduim ">{item.text}</div>
              <small className="fw-medium fs_16 fw-normal mt-1 clr_theme">{item.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

