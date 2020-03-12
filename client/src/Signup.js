import React, { useState } from 'react'
import { useForm, ErrorMessage} from 'react-hook-form'

import {
    TextField,
    Button,
    Typography,
} from '@material-ui/core'
import './App.css'


const Signup = () => {

    const { handleSubmit, register, errors } = useForm();
    const [serverError, setServerError] = useState();
    const onSubmit = async values => {

        setServerError(null)

    }

    return (
        <div className="Container">
            <h1> Sign-Up Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    name="username"
                    label="Username"
                    fullWidth
                    inputRef={register({
                        required: 'Required'})}
                        error={errors.username != null}
                >
               </TextField>
                    <Typography color ='error'>
                        {errors.username && errors.username.message}
                    </Typography>     
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    inputRef={register({
                        required: 'Required',
                    })}    
                    error={errors.password != null}
                >

                </TextField>
                <Typography color="error">
                    {errors.password && errors.password.message}
                </Typography>
                <Typography color="error">
                    {serverError}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                >
                    Log In
                </Button>
            </form>

            
        </div>
    )


}

export default Signup