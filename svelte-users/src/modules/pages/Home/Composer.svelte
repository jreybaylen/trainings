<script lang="ts">
    import { updateStore } from '@stores/Users'
    import { createEventDispatcher } from 'svelte'

    import Form from '@components/Form.svelte'

    let dispatch = createEventDispatcher()
    let lastName = '', firstName = '', middleName = '', prefixName = ''

    function handleSubmit () {
        dispatch('submit')
        updateStore({ prefixName, firstName, middleName, lastName, id: Math.random() })
    }
</script>

<Form on:submit={ handleSubmit }>
    <fieldset>
        <legend>Personal Information</legend>
        <div class="name-with-prefix">
            <input type="text" placeholder="Prefix" maxlength={ 2 } bind:value={ prefixName } />
            <input type="text" placeholder="First Name" bind:value={ firstName } />
        </div>
        <div class="middle-last-name">
            <input type="text" placeholder="Middle Name" bind:value={ middleName } />
            <input type="text" placeholder="Last Name" bind:value={ lastName } />
        </div>
    </fieldset>
    <button type="submit">Create</button>
</Form>

<style type="text/scss">
    fieldset {
        border: none;
        padding: 30px;
        border-radius: 5px;
        box-shadow: 0 2px 4px #ccc;
        margin-bottom: var(--spacing);

        .name-with-prefix {
            display: flex;

            input {
                width: 75%;
                border-radius: 5px;

                &:first-of-type {
                    width: 25%;
                    margin-right: 8px;
                }
            }
        }

        .middle-last-name {
            display: flex;

            input {
                width: 100%;
                border-radius: 5px;

                &:first-of-type {
                    margin-right: 8px;
                }
            }
        }
    }

    fieldset + button {
        width: 100%;
        margin: 20px auto 0;
        display: block;
        color: #fff;
        cursor: pointer;
        margin-bottom: 0;
        max-width: 200px;
        border-radius: 25px;
        border: 2px solid #2e91f3;
        background-color: #2e91f3;
        transition: .15s ease-in-out;
        padding: var(--spacing-vertical);

        &:hover {
            background-color: #44a1ff;
        }
    }
</style>