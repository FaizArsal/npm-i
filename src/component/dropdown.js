import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { getDataFromDataBase } from '../config/firebasemethod'

function Muidropdown(props) {
    const { label, onChange, value, name, error, fullWidth, id, labelId, dataSource, required, nodeName, displayValue, fieldValue } = props
    const [dtSource, setdtSource] = useState(dataSource)
    const selectValueFromDB = () => {
        if (nodeName) {
            return getDataFromDataBase(nodeName)
                .then((res) => {
                    setdtSource(res.map(e => e.course))
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }
    useEffect(() => {
        selectValueFromDB();
    }, [])
    return (
        <>
            <FormControl fullWidth required={required}>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id={id}
                    label={label}
                    onChange={onChange}
                    name={name}
                    error={error}
                >
                    {dtSource && dtSource.length > 0 ? dtSource.map((e, i) => {
                        return <MenuItem key={i} value={e[fieldValue ? fieldValue : 'option']}>
                            {e[displayValue ? displayValue : 'option']}
                        </MenuItem>
                    }) : null}
                </Select>
            </FormControl>
        </>
    )
}

export default Muidropdown