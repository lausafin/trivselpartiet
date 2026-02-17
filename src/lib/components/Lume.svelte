<script>
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';

    // Using Svelte's spring motion for organic trailing
    let coords = spring({ x: 50, y: 50 }, {
        stiffness: 0.05,
        damping: 0.25
    });

    function handleMouseMove(event) {
        coords.set({
            x: (event.clientX / window.innerWidth) * 100,
            y: (event.clientY / window.innerHeight) * 100
        });
    }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div 
    class="lume"
    style="
        left: {$coords.x}%; 
        top: {$coords.y}%;
    "
></div>

<style>
    .lume {
        position: fixed;
        width: 60vw;
        height: 60vw;
        transform: translate(-50%, -50%);
        background: radial-gradient(
            circle, 
            rgba(253, 186, 116, 0.15) 0%, /* Solaris Gold / Amber */
            rgba(253, 186, 116, 0.05) 30%, 
            transparent 70%
        );
        pointer-events: none;
        z-index: 100; /* Behind UI, above background */
        mix-blend-mode: screen;
        border-radius: 50%;
        filter: blur(80px); /* Enhance softness */
    }
</style>
