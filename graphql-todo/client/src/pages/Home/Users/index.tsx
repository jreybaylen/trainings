import { Fragment, useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { GET_USERS } from './index.gql'
import { UserProps, UsersProps } from './index.interfaces'

function Users (): JSX.Element {
    const { data: DATA } = useQuery(GET_USERS)
    const MEMOIZE_USERS = useMemo(() => {
        const COMPUTED_DATA = (DATA as UsersProps)?.users.data || []
        const REVERSED_COMPUTED_DATA = Object.assign([], COMPUTED_DATA).reverse()

        return REVERSED_COMPUTED_DATA
    }, [ DATA ])

    return (
        <Fragment>
            { MEMOIZE_USERS.map(
                (USER: UserProps) => (
                    <Fragment
                        key={ `user-id-${ USER.id }` }
                    >
                        <section
                            style={ {
                                margin: 16,
                                padding: 16,
                                borderRadius: 8,
                                border: '2px solid #ccc'
                            } }
                        >
                            <h1>NAME: { USER.name }</h1>
                            <p>AGE: { USER.age }</p>
                            <p>NATIONALITY: { USER.nationality }</p>
                            <p>USERNAME: { USER.username }</p>
                        </section>
                        { USER.friends.map(
                            (FRIEND: UserProps) => (
                                <pre
                                    key={ `friend-id-${ FRIEND.id }` }
                                    style={ {
                                        padding: 16,
                                        marginLeft: 64,
                                        marginRight: 16,
                                        borderRadius: 8,
                                        border: '2px solid #ccc'
                                    } }
                                >
                                    <h2>NAME: { FRIEND.name }</h2>
                                    <p>AGE: { FRIEND.age }</p>
                                    <p>NATIONALITY: { FRIEND.nationality }</p>
                                    <p>USERNAME: { FRIEND.username }</p>
                                </pre>
                            )
                        ) }
                    </Fragment>
                )
            ) }
        </Fragment>
    )
}

export {
    Users
}