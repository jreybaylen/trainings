import * as fs from 'fs'
import * as path from 'path'

import { CreateUserProps } from '@config/interfaces/user.interfaces'

const USERS = {
    async createUser (
        _: undefined,
        { user: USER }: { user: CreateUserProps }
    ) {
        const { data: USERS } = await import('@db/users.json')
        const NEW_USER = {
            id: USERS.length + 1,
            ...USER,
            friends: [ ]
        }

        fs.writeFileSync(
            path.resolve(
                process.cwd(),
                'db/users.json'
            ),
            JSON.stringify({ data: [ ...USERS, NEW_USER ] }, null, 4)
        )

        return NEW_USER
    }
}

export {
    USERS
}