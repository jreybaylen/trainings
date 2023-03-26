import { writable } from 'svelte/store'
import type { UsersProps } from '@stores/Users.interface'

const usersDefaultValue: Array<UsersProps> = []
const UserStore = writable(usersDefaultValue)

function updateStore (user: UsersProps) {
    UserStore.update(
        (users: Array<UsersProps>) => [ ...users, user ]
    )
}

function resetStore () {
    UserStore.set([])
}

export { UserStore, updateStore, resetStore }