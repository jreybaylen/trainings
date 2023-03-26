import { ApolloServer } from 'apollo-server'

import { TYPE_DEFS } from './config/type-defs'
import { RESOLVERS } from './config/resolvers'

const SERVER = new ApolloServer({
    typeDefs: TYPE_DEFS,
    resolvers: RESOLVERS
})

async function initApolloServer () {
    try {
        const { url: URL } = await SERVER.listen()

        console.log('API is now running in: ', URL)
    } catch (ERROR: any) {
        console.error('ERROR: ', ERROR)
    }
}

initApolloServer()