

import React from "react";
import quickIcon1 from '../../../public/images/svg/quickIcon1.svg';
import quickIcon2 from '../../../public/images/svg/quickIcon2.svg';
import quickIcon3 from '../../../public/images/svg/quickIcon3.svg';
import quickIcon4 from '../../../public/images/svg/quickIcon4.svg';
import Image from "next/image";

const keyInfo = [
  {
    icon:quickIcon1,
    label: "Total Employees",
    value: "750",
  },
  {
    icon:quickIcon2,
    label: "New Joinees This Month",
    value: "15",
  },
  {
    icon:quickIcon3,
    label: "Ongoing Projects",
    value: "10",
  },
  {
    icon:quickIcon4,
    label: "Contracts Due",
    value: "5",
  },
];

const DashboardQuickStatsComponent = () => {
  return (
    <div className=" mt-5">
      <h5 className="fw-semibold fs_22 clr_lightblack mb-3">Quick Stats</h5>
      <div className="row px-md-4">
        {keyInfo.map((item, index) => (
          <div className="col-12 col-sm-6 col-lg-3 mb-3" key={index}>
        <div className="border rounded overflow-hidden  h-100" style={{boxShadow: "0px 8px 12px 0px #0000001A"
}}>
              <div className="bg_lightTheme px-2 text-white text-center fw-semibold py-3 fs_18 fw-bold ">
                {item.label}
              </div>
        <div className="d-flex align-items-center py-2 justify-content-center  gap-3 ">
            <Image src={item.icon} alt="" width={30} height={30}/>
             <div className="text-center  fs_36 fw-bold clr_lightblack fw-medium">{item.value}</div>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardQuickStatsComponent;
