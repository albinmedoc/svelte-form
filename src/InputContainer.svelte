<script>
    export let label = undefined;
</script>

<style>
    /* Container */
    div {
        position: relative;
        flex-grow: 1;
        min-width: 200px;
        margin: 12px 0;
        width: calc(50% - 40px);
        /*  50% minus margin 20px on both sides */
    }
    /* Inputs */
    div :global(input),
    div :global(textarea),
    div :global(button) {
        height: 40px;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box; 
        border: 1px solid #efefef;
        background-color: white;
        outline: none;
        box-shadow: 0 0 3px transparent;
        border-radius: 5px;
        overflow: hidden;
        font-size: var(--responsive-form-font-size);
    }
    div :global(input),
    div :global(textarea),
    div :global(label) {
        padding: 0 0 0 10px;
    }
    div :global(textarea) {
        min-height: 100px;
        resize: none;
    }

    /* Buttons */
    div :global(input[type='submit']),
    div :global(input[type='button']),
    div :global(input[type='reset']),
    div :global(button) {
        padding: 0 20px;
        min-width: 60%;
        text-decoration: none;
        width: auto;
    }

    /* Labels */
    label {
        pointer-events: none;
        position: absolute;
        line-height: 40px;
        left: 0;
        top: 0;
        transition: opacity 0.2s ease, transform 0.2s ease, font-size 0.2s ease;
        opacity: 0.5;
    }
    div :global(input:required + label:after),
    div :global(input.required + label:after),
    div :global(textarea:required + label:after),
    div :global(textarea.required + label:after) {
        content: ' *';
        color: red;
    }
    div :global(input:focus:not([type='checkbox']) + label),
    div :global(input:not(:placeholder-shown):not([type='checkbox']) + label),
    div :global(textarea:focus + label),
    div :global(textarea:not(:placeholder-shown) + label) {
        opacity: 1;
        font-size: 15px;
        transform: translateY(-30px) translateX(-10px);
    }
</style>

<div>
    <slot />
    {#if label}
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>{label}</label>
    {/if}
</div>
