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
        padding: 0;
        margin: 0;
    }
</style>

<form {method} {action} on:submit={handleSubmit}>
    <slot />
</form>
