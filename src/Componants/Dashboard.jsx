import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { DashboardTable } from "./DashboardTable";
import { Register } from "./register";
export const Dashboard = () => {
  const [data, setData] = useState([])

  // get data by using api 

  const getData = async () => {
    const result = await axios.get("https://react-tasks-nodejs-api.herokuapp.com/user/register")
    setData(result.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='login'>
      <h1 className='main'>Dashboard</h1>

      {/* Store data in table format  */}

      {
        data.map(item =>
          <DashboardTable item={item} />
        )
      }
    </div>
  )
}