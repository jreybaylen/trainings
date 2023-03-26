<script lang="ts">
    import { resetStore } from '@stores/Users'

    import Composer from '@modules/pages/Home/Composer.svelte'
    import ListOfUsers from '@modules/pages/Home/ListOfUsers.svelte'

    let tabIndex = 0

    function handleDeleteUsers () {
        resetStore()
    }

    function handleSetNav (event: Event) {
        const { value } = event.currentTarget as EventTarget & { value: string }
        
        tabIndex = parseInt(value)
    }

    function handleSetTab () {
        tabIndex = 0
    }
</script>

<section>
    <div class="segment">
        <button on:click={ handleSetNav } value="0">List of Users</button>
        <button on:click={ handleSetNav } value="1">Creation of User</button>
        <button on:click={ handleDeleteUsers }>Delete all Users</button>
    </div>
    { #if tabIndex }
        <Composer on:submit={ handleSetTab } />
    { :else }
        <ListOfUsers />
    { /if }
</section>

<style type="text/scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .segment {
            margin: 0;
            width: 50%;
            padding: 0;
            display: grid;
            grid-gap: 10px;
            list-style: none;
            margin: var(--spacing) auto;
            grid-template-columns: 1fr 1fr 1fr;

            button {
                width: 100%;
                cursor: pointer;
                margin-bottom: 0;
                font-weight: bold;
                border-radius: 25px;
                border: 2px solid #ccc;
                transition: 0.2s ease-in-out;
                padding: var(--spacing) 30px;

                &:hover {
                    background-color: #ccc;
                }
            }
        }
    }
</style>