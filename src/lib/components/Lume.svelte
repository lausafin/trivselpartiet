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
        width: 400px;
        height: 400px;
        transform: translate(-50%, -50%);
        background: radial-gradient(
            circle, 
            rgba(253, 186, 116, 0.4) 0%, 
            rgba(253, 186, 116, 0.1) 40%, 
            transparent 70%
        );
        pointer-events: none;
        z-index: 9998; /* Just below grain */
        mix-blend-mode: normal; /* Let's try normal mode to ensure visibility */
        border-radius: 50%;
        filter: blur(60px);
        will-change: left, top; /* Performance optimization */
    }
</style>
