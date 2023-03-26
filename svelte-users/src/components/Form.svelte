<form on:submit|preventDefault>
    <slot></slot>
</form>

<style type="text/scss">
    form {
        width: 98%;
        max-width: 450px;
        border-radius: 5px;
        padding: 30px 30px 40px;
        margin: var(--spacing) auto;
        box-shadow: 0 2px 4px #c4c3c3;
    }
</style>