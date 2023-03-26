import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Home from './Home'

const APOLLO_CLIENT = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
})

function Root (): JSX.Element {
    return (
        <ApolloProvider
            client={ APOLLO_CLIENT }
        >
            <Home />
        </ApolloProvider>
    )
}

export default Root