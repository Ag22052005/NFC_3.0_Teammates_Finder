import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="flex gap-y-3">
      <DashboardSidebar/>
    </div>
  )
}

export default Dashboard