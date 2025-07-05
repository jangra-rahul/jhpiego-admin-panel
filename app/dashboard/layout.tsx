

"use client"
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

export default function layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
      <div className="flex-grow-1 sidebarSpace" >
        <TopBar onToggleSidebar={() => setShowSidebar(true)}  />
        <main className="pt-5 px-4" style={{ marginTop: '56px', overflowY: 'auto', height: 'calc(100vh - 56px)' ,backgroundColor:"#F5F5F5"}}>
          {/* <DashboardComponent />
          <div className="row mt-4">
            <div className="col-md-6">
              <RecentActions />
            </div>
            <div className="col-md-6">
              <UpcomingEvents />
            </div>
          </div> */}
          {children}
        </main>
      </div>
    </div>
  );
}
