import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import DashboardStats from './components/DashboardStats';
import RecentActions from './components/RecentActivity';
import UpcomingEvents from './components/UpcomingEvents';

export default function DashboardPage() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
        <TopBar />
        <main className="pt-5 px-4" style={{ marginTop: '56px', overflowY: 'auto', height: 'calc(100vh - 56px)' }}>
          <DashboardStats />
          <div className="row mt-4">
            <div className="col-md-6">
              <RecentActions />
            </div>
            <div className="col-md-6">
              <UpcomingEvents />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
