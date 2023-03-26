import { gql } from '@apollo/client'

export const GET_USERS = gql`
    fragment UserInfo on User {
        id
        age
        name
        username
        nationality
    }
        
    query Users {
        users {
            ...on UserSuccessResult {
                data {
                    ...UserInfo
                    friends { 
                        ...UserInfo
                    }
                }
            }
            ...on UserErrorResult {
                message
            }
        }
    }
`

