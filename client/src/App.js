import React, { useState } from 'react'
import { useForm} from 'react-hook-form'
import { GraphQL, GraphQLProvider} from 'graphql-react'
import 
    {   BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useHistory
    } from 'react-router-dom'
import {
    TextField,
    Button,
    Typography
} from '@material-ui/core';
import './App.css';

const graphql = new GraphQL();

const App = () => {

    // This is for forms
    const { register, errors } = useForm();
    const [serverError, setServerError] = useState();

    return(
       
       <GraphQLProvider graphql={graphql}>

           
           <div className="Container">

               <h1>Sign-Up Form</h1> 
                <form>

                <TextField
                    name="Create Username"
                    label="Username"
                    fullWidth
                    inputRef={register({
                        required: 'Required'})}
                    error={errors.username != null}
                >
                </TextField>
                    <Typography color="error">
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
                    error={errors.pasword != null}
                >
                </TextField>
                <Typography color="error">
                    {errors.password && errors.password.message}
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





        </GraphQLProvider>

    )

}

export default App;