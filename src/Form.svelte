<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    export let method = undefined;
    export let action = undefined;

    function handleSubmit(e){
        if(!method || !action) e.preventDefault();

        dispatch('submit');
    }
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

<form {method} {action} on:submit={handleSubmit}>
    <slot />
</form>
