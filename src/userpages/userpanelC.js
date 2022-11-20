import { CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getDataFromDataBase } from '../config/firebasemethod'

function UserpanelC() {
    const [isLoading, setLoading] = useState(true)
    const [course, setcourse] = useState()
    const getStudentData = () => {
        getDataFromDataBase(`Coursedetails/`)
            .then((res) => {
                setcourse(res)
                setLoading(false)
                
                
            })
            .catch((error) => {
                alert(error)
                setLoading(false)
            })

    }
    useEffect(() => {
        getStudentData();
    }, [])

    return (
        <div className='mx-4'>
            {isLoading ?
                (<Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh'
                }}>
                    <CircularProgress />
                </Box>) : (
                    <>
                        <Typography variant="p" className="display-3">Current Courses</Typography>
                        <table className="table table-bordered w-90 mt-2" style={{ fontSize: '0.8rem' }}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th>Course Name</th>
                                    <th>Course Duration</th>
                                    <th>Course Fees</th>
                                    <th>Total Quiz</th>
                                    <th>Lead Trainers</th>
                                    <th>Assitant Trainers</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            {course.map((e, i) => {
                                return <tbody key={i}>
                                    <tr>
                                        <td scope='row'>{i}</td>
                                        <td>{e.course.CourseName}</td>
                                        <td>{e.course.CourseDuration}</td>
                                        <td>{e.course.Fees}</td>
                                        <td>{e.course.Quizes}</td>
                                        <td>{e.course.LeadTrainers}</td>
                                        <td>{e.course.AssitantTrainers}</td>
                                        <td>{e.course.status}</td>

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

export default UserpanelC
