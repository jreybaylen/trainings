<script lang="ts">
    export let className: string
</script>

<main class={ className }>
    <slot></slot>
</main>