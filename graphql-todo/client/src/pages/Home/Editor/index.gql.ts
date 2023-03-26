import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    fragment UserInfo on User {
        id
        name
        age
        username
        nationality
    }

    mutation Users ($user: CreateUserInput!) {
        createUser(user: $user) {
            ...UserInfo
            friends {
                ...UserInfo
            }
        }
    }
`

