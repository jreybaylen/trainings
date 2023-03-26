import { UserProps, UsersProps } from '@config/interfaces/user.interfaces'

const USERS = {
    async users () {
        const USERS_LIST = (await import('@db/users.json')).data

        if (USERS_LIST) {
            return {
                data: USERS_LIST
            }
        }

        return {
            message: 'There\'s something wrong with the data'
        }
    },
    async user (
        PARENT: any,
        { id: ID }: { id: string }
    ) {
        const { data: USERS_LIST } = await import('@db/users.json')

        if (!USERS_LIST) {
            return
        }

        return (USERS_LIST as UsersProps).find(
            (USER: UserProps) => USER.id === Number(ID)
        )
    }
}

export {
    USERS
}