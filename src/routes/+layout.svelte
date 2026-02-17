<script>
    import { onMount } from 'svelte';
    import Grain from '$lib/components/Grain.svelte';
    import Lume from '$lib/components/Lume.svelte';
    import SilenceListener from '$lib/components/SilenceListener.svelte';
   
    // Global layout logic
</script>

<Grain />
<Lume />
<SilenceListener />
<slot />


<style>
    :global(*) {
        box-sizing: border-box;
    }
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: var(--f-serif); /* Cormorant Garamond */
        background: var(--c-base); /* Unbleached Linen */
        color: var(--c-depth);
        overflow-x: hidden; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    :global(::selection) {
        background: var(--c-life);
        color: var(--c-depth);
    }
</style>
