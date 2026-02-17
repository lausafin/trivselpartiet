<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let visible = false;
    onMount(() => visible = true);
</script>

{#if visible}
<section class="path-container" transition:fade={{ duration: 1000 }}>
    <header>
        <h1>Lyt</h1>
        <p class="subtitle">Det Jordnære Udgangspunkt</p>
    </header>
    
    <article>
        <p>
            Et træt sind kan ikke lede. Vi begynder med at lytte til stilheden mellem støjen.
            Her dokumenterer vi den usminkede virkelighed af borgerens oplevelse.
        </p>
        <p>
            Gennemsigtighed er ikke en målestok; det er et materiale. Ligesom glas skal det holdes rent, så man kan se igennem det.
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
        z-index: 20; /* Above the canvas */
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
