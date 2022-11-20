import { CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getDataFromDataBase } from '../config/firebasemethod'
import Dashboard from './Dashboard'

function AdminpanelStu() {
  const [isLoading, setLoading] = useState(true)
  const [getData,setgetData]=useState()
  // console.log(getData);
  const getStudentData = () => {
    getDataFromDataBase(`student/`)
        .then((res) => {
            setgetData(res)
            setLoading(false)
        })
        .catch((error) => {
            alert(error)
        })
}
useEffect(() => {
    getStudentData();
    
}, [])
  return (
    <div className='mx-4'>
      {isLoading ? 
      ( <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'        
      }}>
        <CircularProgress/>
      </Box> ) : (
       <>
       <Typography variant="p" className="display-3">Student List</Typography>
        <table className="table table-bordered w-90 mt-2" style={{ fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Courses</th>
              <th>Section</th>
              <th>Date Of Birth</th>
              <th>Contact</th>
              <th>CNIC</th>
              <th>Father Name</th>
              <th>Father CNIC</th>
              <th>Father Contact</th>
              <th>Emergency Contact</th>
            </tr>
          </thead>
          {getData.map((e, i) => {
            return <tbody key={i}>
              <tr>
                <td scope='row'>{i}</td>
                <td>{e.data.firstName}</td>
                <td>{e.data.lastName}</td>
                <td>{e.data.Course}</td>
                <td>{e.data.Section}</td>
                <td>{e.data.date}</td>
                <td>{e.data.contact}</td>
                <td>{e.data.cnic}</td>
                <td>{e.data.fatherName}</td>
                <td>{e.data.fatherCnic}</td>
                <td>{e.data.fatherContact}</td>
                <td>{e.data.emergencyContact}</td>
              </tr>
            </tbody>
          })}
        </table>
       </>
        )
      }
    </div>
  )
}

export default AdminpanelStu
