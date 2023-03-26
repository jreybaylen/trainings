import { gql } from 'apollo-server'

const TYPE_DEFS = gql`
    type Movie {
        id: ID!
        year: Int!
        name: String!
    }

    enum Nationality {
        CHINA
        CANADA
        AMERICA
        AUSTRALIA
        PHILIPPINES
    }

    type User {
        id: ID!
        age: Int!
        name: String!
        username: String!
        nationality: Nationality!
        friends: [ User! ]
        favoriteMovies(year: Int!): [ Movie ]
    }

    type UserSuccessResult {
        data: [ User! ]!
    }

    type UserErrorResult {
        message: String!
    }

    union UsersResult = UserSuccessResult | UserErrorResult

    type Query {
        users: UsersResult
        user(id: ID!): User!
    }

    input CreateUserInput {
        age: Int!
        name: String!
        username: String!
        nationality: Nationality = PHILIPPINES
    }

    type Mutation {
        createUser(user: CreateUserInput!): User!
    }
`

export {
    TYPE_DEFS
}