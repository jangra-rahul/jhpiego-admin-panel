



import React from "react";
import Image from "next/image";
import cakeIcon from "../../public/images/svg/cakeIocn.svg";
import dateIcon from "../../public/images/svg/dateIcon.svg";
import fileIcon from "../../public/images/svg/fileIcon.svg";
import rightIcon from "../../public/images/svg/rightIocon.svg";

const activities = [
  {
    icon: cakeIcon,
    text: "Upcoming birthday: [Employee Name] from [Department].",
    time: "4th July",
  },
  {
    icon: dateIcon,
    text: "Project Zenith kick-off meeting scheduled",
    time: "5th July",
  },
  {
    icon: fileIcon,
    text: "Contract due soon: [Project Name].",
    time: "[Date].",
  },
  {
    icon: rightIcon,
    text: "Performance reviews for Q3 completed",
    time: "1 week ago",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow-sm">
      <h5 className="fw-bold mb-4 fs_24 fw-bold mb-0">Upcoming Events</h5>
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

export default UpcomingEvents;

