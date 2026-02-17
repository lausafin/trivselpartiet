<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let visible = false;
    onMount(() => visible = true);
</script>

{#if visible}
<section class="path-container" transition:fade={{ duration: 1000 }}>
    <header>
        <h1>Hør Til</h1>
        <p class="subtitle">Den Menneskelige Rytme</p>
    </header>
    
    <article>
        <p>
            At høre til er at blive genkendt af sine omgivelser.
        </p>
        <p>
            Vi plejer rummene mellem arbejde og hjem. De tredje steder. Fælleshaverne, bibliotekerne, de fælles værksteder.
            Steder hvor du er borger, ikke forbruger.
        </p>
    </article>
</section>
{/if}

<style>
    .path-container {
        padding: 8rem 2rem;
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        z-index: 20;
    }

    header {
        margin-bottom: 4rem;
    }

    h1 {
        font-family: var(--f-serif);
        font-size: 4rem;
        font-weight: 300;
        margin: 0;
        color: var(--c-depth);
    }

    .subtitle {
        font-family: var(--f-mono);
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        opacity: 0.6;
        margin-top: 1rem;
    }

    article p {
        font-family: var(--f-serif);
        font-size: 1.5rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        max-width: 60ch;
    }
</style>
