<script>
    import { onMount } from 'svelte';
    // import Grain from '$lib/components/Grain.svelte';
    // import Lume from '$lib/components/Lume.svelte';
    // import SilenceListener from '$lib/components/SilenceListener.svelte';
    // import Acoustics from '$lib/components/Acoustics.svelte';
    // Removed SleepFirst to fix interaction blocking
    // import SleepFirst from '$lib/components/SleepFirst.svelte';
   
    // Global layout logic
    onMount(() => {
        console.log("Layout mounted");
    });
</script>

<!-- <Grain /> -->
<!-- <Lume /> -->
<!-- <SleepFirst /> -->
<!-- <SilenceListener /> -->
<!-- <Acoustics /> -->
<slot />


<style>
    /* Global safeguard against invisible blockers */
    :global(body > *:not(main)) {
        pointer-events: none !important;
    }
    
    :global(*) {
        box-sizing: border-box;
    }
    :global(body, html) {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: var(--f-serif); /* Cormorant Garamond */
        background: var(--c-base); /* Unbleached Linen */
        color: var(--c-depth);
        overflow: hidden; /* Prevent scrollbar interference */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    :global(::selection) {
        background: var(--c-life);
        color: var(--c-depth);
    }
</style>
