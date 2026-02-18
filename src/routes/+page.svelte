<script>
    import { Canvas } from '@threlte/core';
    import Scene from './Scene.svelte';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import gsap from 'gsap';

    let title;

    onMount(() => {
        gsap.from(title, { opacity: 0, y: 20, duration: 2, delay: 0.5, ease: "power2.out" });
    });
</script>

<main>
    <div class="canvas-wrapper">
        <Canvas>
            <Scene />
        </Canvas>
    </div>

    <!-- UI Overlay (Important: pointer-events: none allows clicking through to canvas) -->
    <div class="ui-layer">
        <h1 bind:this={title}>Trivselpartiet</h1>
    </div>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }
    .canvas-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* Ensure canvas is interactive */
        z-index: 1;
        pointer-events: auto !important; 
    }
    .ui-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        /* CRITICAL: Let clicks pass through */
        pointer-events: none !important;
    }
    h1 {
        font-family: var(--f-serif); /* Cormorant Garamond */
        font-size: clamp(3rem, 8vw, 6rem); /* Responsive fluid typography */
        font-weight: 300;
        letter-spacing: -0.02em;
        color: var(--c-depth);
        mix-blend-mode: multiply;
        position: relative;
        z-index: 20;
        pointer-events: none !important; /* Ensure title doesn't block 3D */
    }
</style>
