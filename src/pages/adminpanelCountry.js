import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Muidropdown from '../component/dropdown';
import { getDataFromDataBase, sendDataToDataBase } from '../config/firebasemethod';

function AdminpanelCountry() {
    const [model, setmodel] = useState();
    const [country, setcountry] = useState([]);
    // send data To data Base only
    let InfoGo=()=>{
        console.log(model)
        sendDataToDataBase(
            model,
         `Countries/`)
            .then((userID) => {
                console.log(userID);
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const getCountryData = () => {
        getDataFromDataBase(`Countries/`)
            .then((res) => {
                setcountry(res.map(e=>e))
                // console.log(res)
            })
            .catch((error) => {
                alert(error)
            })
    }

    useEffect(()=>{
        getCountryData();
    },[])


    return (
        <div>
            <h1>Country</h1>
            <Grid container spacing={2} >
                <Grid item  md={2} >
                    <TextField
                        fullWidth
                        required
                        label="Country Name"
                        onChange={(e) => setmodel({...model,countryName:e.target.value})}
                    />
                </Grid>
                <Grid item  md={2} >
                    <TextField
                        fullWidth
                        required
                        label="Country Code"
                        onChange={(e) => setmodel({...model,countryCode:e.target.value})}
                    />
                </Grid>
                <Grid item  md={2} >
                    <TextField
                        fullWidth
                        required
                        label="Country Money"
                        onChange={(e) => setmodel({...model,countryMoney:e.target.value})}
                    />
                </Grid>
                <Grid item  md={2} >
                    <Button variant='contained'  onClick={InfoGo} >Send</Button>
                </Grid>
            </Grid>
            <table className="table table-bordered w-90 mt-2" style={{ fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Country Name</th>
              <th>Country Code</th>
              <th>Currency</th>

            </tr>
          </thead>
          <tbody >
          {country.map((e, i) => {
          return <tr key={i} >
                <td scope='row'>{i}</td>
                <td>{e.countryName}</td>
                <td>{e.countryCode}</td>
                <td>{e.countryMoney}</td>
              </tr>
          })}
          </tbody>
        </table>
        </div>
    )
}

export default AdminpanelCountry
