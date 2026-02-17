<script>
    // The "haptic thrum" logic for visual noise could be added here if needed, 
    // but CSS is sufficient for the static grain.
</script>

<div class="grain"></div>

<style>
    .grain {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        /* Generative SVG noise */
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
        opacity: 0.035; /* Subtle 3.5% opacity */
        mix-blend-mode: multiply;
    }
</style>
