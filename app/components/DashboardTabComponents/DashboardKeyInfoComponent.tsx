import React from "react";

const keyInfo = [
  {
    label: "Supervisor",
    value: "Vivek Malhotra",
  },
  {
    label: "Contract End Date",
    value: "15 July, 2026",
  },
  {
    label: "Last Profile Update",
    value: "93 Days ago",
  },
];

const DashboardKeyInfoComponent = () => {
  return (
    <div className=" mt-5">
      <h5 className="fw-semibold fs_22 clr_lightblack mb-3">Key Info</h5>
      <div className="row px-4">
        {keyInfo.map((item, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-3" key={index}>
        <div className="border rounded overflow-hidden  h-100" style={{boxShadow: "0px 8px 12px 0px #0000001A"
}}>
              <div className="bg_lightTheme text-white text-center fw-semibold py-3 fs_18 fw-bold ">
                {item.label}
              </div>
              <div className="text-center py-3 fs_20 fw-normal clr_lightblack fw-medium">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardKeyInfoComponent;
