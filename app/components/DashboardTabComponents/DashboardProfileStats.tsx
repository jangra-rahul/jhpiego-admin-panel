import React from "react";
import { ProgressBar } from "react-bootstrap";
import userIcon from "../../../public/images/svg/userIcon.svg";
import bagIcon from "../../../public/images/svg/bagIcon.svg";
import capIcon from "../../../public/images/svg/capIcon.svg";
import fileIcon from "../../../public/images/svg/fileIcon.svg";
import Image from "next/image";

const stats = [
  {
    title: "Personal Details",
    icon: userIcon,
    percent: 78,
  },
  {
    title: "Experience Details",
    icon: bagIcon,
    percent: 50,
  },
  {
    title: "Educational Details",
    icon: capIcon,
    percent: 80,
  },
  {
    title: "Document Uploads",
    icon:fileIcon,
    percent: 25,
  },
];

const DashboardProfileStats = () => {
  return (
    <div className=" mt-5">
      <h5 className="fw-semibold fs_22 clr_lightblack mb-3">Profile Stats</h5>
      <div className="row px-4">
        {stats.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <div className="d-flex justify-content-between align-items-center mb-2">
        <Image width={40} height={40} src={item?.icon} alt=""/>
                <div className="fw-bold fs_22 clr_lightblack">{item.percent}%</div>
              </div>
              <div className=" fs_14 fw-normal clr_lightback mt-4 small mb-2">{item.title}</div>
              <ProgressBar
                now={item.percent}
                style={{ height: "7px" }}
                variant="info"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardProfileStats;
