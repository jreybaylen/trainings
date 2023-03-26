<script lang="ts">
    import type { UsersProps } from '@stores/Users.interface'

    import { onDestroy } from 'svelte'
    import { UserStore } from '@stores/Users'

    let listOfUsers: Array<UsersProps> = []

    const usersSubscription = UserStore.subscribe(
        (usersData: Array<UsersProps>) => {
            listOfUsers = usersData
        }
    )

    onDestroy(usersSubscription)
</script>

<ul>
    { #if listOfUsers.length }
        { #each listOfUsers as user (user.id) }
            <li>
                { user.lastName }, { user.firstName } { user.middleName } { user.prefixName }.
            </li>
        { /each }
    { :else }
        <li>No users as of the moment</li>
    { /if }
</ul>

<style type="text/scss">
    ul {
        width: 100%;
        margin: auto;
        list-style: none;
        max-width: 600px;

        li {
            border-radius: 3px;
            margin-bottom: 8px;
            padding: var(--spacing);
            border: 1px solid #efefef;
            box-shadow: 0 2px 4px #ccc;
        }
    }
</style>