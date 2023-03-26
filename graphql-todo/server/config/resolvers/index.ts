import { USERS as QueryUsers } from './users.query'
import { USERS as MutationUsers } from './users.mutation'

import { UsersProps } from '@config/interfaces/user.interfaces'
import { MovieProps, MoviesProps } from '@config/interfaces/movie.interfaces'

const RESOLVERS = {
    UsersResult: {
        __resolveType (
            RESPONSE: UsersProps | { message: string }
        ) {
            if ('message' in RESPONSE) {
                return 'UserErrorResult'
            }

            return 'UserSuccessResult'
        }
    },
    User: {
        async favoriteMovies (
            PARENT: any,
            { year }: { year: number }
        ) {
            const { data: MOVIES } = await import('@db/movies.json')

            return (MOVIES as MoviesProps).filter(
                (MOVIE: MovieProps) => MOVIE.year === year
            )
        }
    },
    Query: {
        ...QueryUsers
    },
    Mutation: {
        ...MutationUsers
    }
}

export {
    RESOLVERS
}