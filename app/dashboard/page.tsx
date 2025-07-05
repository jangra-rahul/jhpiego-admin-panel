import React from 'react'
import DashboardComponent from '../components/DashboardTabComponents/DashboardComponent'
import UpcomingEvents from '../components/UpcomingEvents'
import RecentActions from '../components/RecentActivity'

const page = () => {
  return (
    <div> 
        <DashboardComponent />
          <div className="row mt-4">
            <div className="col-md-6">
              <RecentActions />
            </div>
            <div className="col-md-6">
              <UpcomingEvents />
            </div>
          </div>
          </div>
  )
}

export default page