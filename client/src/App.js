import React from 'react'
import { GraphQL, GraphQLProvider} from 'graphql-react'
import 
    {   Browser as Router,
        Router,
        Route,
        Link
    } from "react-router-d"

const graphql = new GraphQL();

const App = () => {
    return(
       
       <GraphQLProvider graphql={graphql}>








        </GraphQLProvider>

    )

}

export default App;