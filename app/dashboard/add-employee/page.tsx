import CommonTitle from '@/app/components/common/CommonTitle'
import { EmployeeDetails } from '@/app/components/EmployeeComponents/EmployeeDetails'
import React from 'react'

const page = () => {
  return (
    <div>
      <CommonTitle title="Add Employee"/> 
      <EmployeeDetails/>
    </div>
  )
}

export default page
