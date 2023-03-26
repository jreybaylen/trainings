type NationalityProps = 'CHINA' | 'CANADA' | 'AMERICA' | 'AUSTRALIA' | 'PHILIPPINES'

export interface CreateUserProps {
    age: number
    name: string
    username: string
    nationality: NationalityProps
}

export interface UserProps {
    id: string | number
    age: number
    name: string
    username: string
    nationality: NationalityProps
    friends: Array<UserProps>
}

type UsersProps = Array<UserProps>

export type {
    UsersProps
}