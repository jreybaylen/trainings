import { useMutation } from '@apollo/client'
import { ChangeEvent, FormEvent, useState } from 'react'

import { CREATE_USER } from './index.gql'
import { UserProps } from '@pages/Home/Users/index.interfaces'

const DEFAULT_VALUES = {
    age: 0,
    name: '',
    username: '',
    nationality: 'PHILIPPINES' as 'PHILIPPINES'
}

function Editor (): JSX.Element {
    const [ createUser ] = useMutation(CREATE_USER)
    const [ USER, setUser ] = useState<Omit<UserProps, 'friends' | 'id'>>(DEFAULT_VALUES)

    function handleInputChange (
        EVENT: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        const { name, value } = EVENT.target

        setUser(
            (PREV_USER: Omit<UserProps, 'friends' | 'id'>) => {
                return {
                    ...PREV_USER,
                    [ name ]: (name === 'age') ? parseInt(value) : value
                }
            }
        )
    }

    async function handleSubmitUser (EVENT: FormEvent<HTMLFormElement>) {
        EVENT.preventDefault()

        await createUser({ 
            variables: {
                user: USER
            }
        })
        setUser(DEFAULT_VALUES)
    }

    return (
        <form
            onSubmit={ handleSubmitUser }
            style={ {
                margin: 16
            } }
        >
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={ USER.name }
                onChange={ handleInputChange }
            />
            <input
                name="age"
                type="number"
                placeholder="age"
                value={ USER.age }
                onChange={ handleInputChange }
            />
            <select
                name="nationality"
                value={ USER.nationality }
                onChange={ handleInputChange }
            >
                <option value="CHINA">CHINA</option>
                <option value="CANADA">CANADA</option>
                <option value="AMERICA">AMERICA</option>
                <option value="AUSTRALIA">AUSTRALIA</option>
                <option value="PHILIPPINES">PHILIPPINES</option>
            </select>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={ USER.username }
                onChange={ handleInputChange }
            />
            <button
                type="submit"
            >
                Add User
            </button>
        </form>
    )
}

export {
    Editor
}