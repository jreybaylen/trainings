<script lang="ts">
    import titleSrc from '@assets/svelte-app.png'
</script>

<header>
    <nav>
        <a href="/">
            <img src={ titleSrc } alt="Svelte" />
        </a>
    </nav>
</header>

<style type="text/scss">
    header {
        box-shadow: 0 2px 4px #d1d1d1;
        padding: var(--spacing-vertical);
        background-color: var(--background-color);

        nav {
            display: flex;
            justify-content: center;

            img {
                width: 150px;
                height: auto;
            }
        }
    }
</style>