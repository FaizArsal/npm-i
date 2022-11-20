import { Button, CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import { Box } from '@mui/system'
import { getDataFromDataBase, sendDataToDataBase } from '../config/firebasemethod'

function AdminpanelC() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const [course, setcourse] = useState([]);

  const courseadd = (event) => {
    let newInput = { [event.target.name]: event.target.value }
    setcourse({ ...course, ...newInput })
  }
  const { CourseName, CourseDuration, status, Quizes, Fees, LeadTrainers, AssitantTrainers } = course;

  const CourseSendInDataBase = () => {
    setloader(true)
    sendDataToDataBase({ course }, `Coursedetails/`)
      .then((resolve) => {
        navigate('adminpanelcourselist') 
        console.log(resolve)
        setloader(false)
      })
      .catch((error) => {
        console.log(error)
        setloader(false)
      });
    }
    const getStudentData = () => {
      setloader(true)
      getDataFromDataBase(`Coursedetails/`)
      .then((res) => {
        setcourse(res)
        setloader(false)
        
      })
      .catch((error) => {
        alert(error)
        setloader(false)
      })  
  }
  useEffect(() => {
    getStudentData();
  }, [])
  return (
    <div  >
      <Typography variant='h4' align='center'>Add Courses!</Typography>
      <Box align='center' >
        <Grid container justifyContent='center' spacing={0} >
          <Grid item mt={5} xs={8} >
            <TextField fullWidth required name="CourseName" onChange={(e) => courseadd(e)} label="Add Enter Course Name" />
          </Grid>
          <Grid item mt={5} xs={6}  >
            <TextField required
              name='CourseDuration'
              onChange={(e) => courseadd(e)} label="Add Course Duration" />
          </Grid>
          <Grid item mt={5} xs={6} >
            <TextField required
              name='status'
              onChange={(e) => courseadd(e)} label="Add Is Form Open" />
          </Grid>
          <Grid item mt={5} xs={6} >
            <TextField required
              name='Quizes'
              onChange={(e) => courseadd(e)} label="Add No of Quizes" />
          </Grid>
          <Grid item mt={5} xs={6} >
            <TextField required
              name='Fees'
              onChange={(e) => courseadd(e)} label="Add Fees Of this Course" />
          </Grid>
          <Grid item mt={5} xs={6} >
            <TextField required
              name='LeadTrainers'
              onChange={(e) => courseadd(e)} label="Add Lead Trainers" />
          </Grid>
          <Grid item mt={5} xs={6} >
            <TextField required
              name='AssitantTrainers'
              onChange={(e) => courseadd(e)} label="Add Assitant Trainers" />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center"  >
        <Button mt={3} align='center'  disabled={loader} onClick={CourseSendInDataBase} variant='contained' >{loader?<CircularProgress/>:"Course Added"}</Button>
        </Box>
      </Box>
    </div>
  )
}

export default AdminpanelC
