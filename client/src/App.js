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
import Signup from './Signup.js'
import './App.css';

const graphql = new GraphQL();

const App = () => {

    // This is for forms
    const { register, errors } = useForm();
    const [serverError, setServerError] = useState();

    return(
       
       <GraphQLProvider graphql={graphql}>

           <Signup />

    





        </GraphQLProvider>

    )

}

export default App;