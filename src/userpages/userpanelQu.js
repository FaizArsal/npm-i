import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { getDataFromDataBase } from '../config/firebasemethod'

export default function UserpanelQu() {
  //Data 
  const [questionFromDB, setquestionFromDB] = useState([]);
  const getStudentData = () => {
    getDataFromDataBase(`Quiz/`)
      .then((res) => {
        setquestionFromDB(res)

      })
      .catch((error) => {
        alert(error)
      })

  }

  useEffect(() => {
    getStudentData();
  }, [])
  let [indexNumber, setindexNumber] = useState(0)
  let [sorce, setsorce] = useState(0)
  let [showResult, setshowResult] = useState(false)
  let [second, setsecond] = useState(59)
  let [Minutes, setMinutes] = useState(4)
  let [correct, setcorrect] = useState(0)
  let [wrong, setwrong] = useState(0)

  {questionFromDB.map((e,i)=>{
    console.log(e)
  })}
  
  return (
    <div>
      {questionFromDB.map((e, i) => {
        return <Box className="main"  >
          <Box>
            <Typography variant='h4' >Course Name={e.course}</Typography>
          </Box>
          <Box>
            <Typography variant='h4' align="left" >Question#{indexNumber + 1}/{e.questionsArray.length} </Typography>
            <Typography variant='h4' align="right" className='Timer' >Remaining Time:{Minutes < 10 ? "0" + Minutes : Minutes}:{second < 10 ? "0" + second : second}</Typography>
          </Box>
          <Box>
            <Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      })}
    </div>
  )
}
