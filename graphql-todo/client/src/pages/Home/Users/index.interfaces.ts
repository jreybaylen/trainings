export interface UserProps {
    id: string | number
    age: number
    name: string
    username: string
    nationality: 'CHINA' | 'CANADA' | 'AMERICA' | 'AUSTRALIA' | 'PHILIPPINES'
    friends: Array<UserProps>
}

export interface UsersProps {
    users: {
        data: Array<UserProps>
    }
}