// "use client"
// import TopBar from './components/TopBar';
// import Sidebar from './components/Sidebar';
// import RecentActions from './components/RecentActivity';
// import UpcomingEvents from './components/UpcomingEvents';
// import DashboardComponent from './components/DashboardTabComponents/DashboardComponent';
// import { useState } from 'react';

// export default function DashboardPage() {
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <div className="d-flex">
//       <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
//       <div className="flex-grow-1 sidebarSpace" >
//         <TopBar onToggleSidebar={() => setShowSidebar(true)}  />
//         <main className="pt-5 px-4" style={{ marginTop: '56px', overflowY: 'auto', height: 'calc(100vh - 56px)' ,backgroundColor:"#F5F5F5"}}>
//           <DashboardComponent />
//           <div className="row mt-4">
//             <div className="col-md-6">
//               <RecentActions />
//             </div>
//             <div className="col-md-6">
//               <UpcomingEvents />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  redirect('/dashboard');
  return (
    <></>
  )
}

export default page