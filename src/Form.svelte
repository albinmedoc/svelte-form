<script>
    export let method = 'GET';
    export let action = undefined;
</script>

<style>
    form {
        position: relative;
        width: 100%;
        text-align: center;
        padding: 20px 0;
        margin: 30px auto;
    }

    @media (min-width: 768px) {
        form {
            height: auto;
            max-width: 600px;
            border-radius: 5px;
        }
    }
</style>

<form {method} {action}>
    <slot />
</form>
