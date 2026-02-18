<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { expoOut } from 'svelte/easing';
    
    // Timer logic
    let visible = false;
    let timer;
    const IDLE_TIME = 3000; // 3 seconds

    function showNav() {
        visible = true;
    }

    function resetTimer() {
        if (visible) return; // Don't hide if already visible (let the user interact)
        
        // Clear previous timer
        if (timer) clearTimeout(timer); 

        // Only set timer if we are in browser environment
        if (typeof window !== 'undefined') {
            timer = setTimeout(showNav, IDLE_TIME);
        }
    }

    onMount(() => {
        // Disabled for debugging interaction issues
        // resetTimer();
        return () => {
            if (timer) clearTimeout(timer);
        };
    });
</script>

<!-- Window listeners temporarily disabled -->
<!-- <svelte:window 
    on:mousemove={() => {
        if (!visible) resetTimer();
    }} 
    on:keydown={resetTimer} 
    on:scroll={resetTimer} 
    on:click={resetTimer}
/> -->

{#if visible}
    <nav 
        class="silence-listener" 
        transition:fade={{ duration: 1500, easing: expoOut }}
        on:mouseenter={() => clearTimeout(timer)}
        on:mousemove|stopPropagation
    >
        <ul>
            <li><a href="/listen">Lyt</a></li>
            <li><a href="/grow">Gro</a></li>
            <li><a href="/belong">Hør Til</a></li>
            <li><a href="/heal">Hel</a></li>
        </ul>
    </nav>
{/if}

<style>
    .silence-listener {
        position: fixed;
        bottom: 10vh;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1000;
        pointer-events: auto; /* Nav is clickable */
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 4rem;
    }

    li {
        opacity: 0;
        animation: driftUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    /* Stagger children animation */
    li:nth-child(1) { animation-delay: 0.1s; }
    li:nth-child(2) { animation-delay: 0.2s; }
    li:nth-child(3) { animation-delay: 0.3s; }
    li:nth-child(4) { animation-delay: 0.4s; }

    a {
        text-decoration: none;
        font-family: var(--f-serif);
        font-size: 1.5rem;
        color: var(--c-depth);
        opacity: 0.7;
        transition: opacity 0.5s ease;
        letter-spacing: 0.05em;
    }

    a:hover {
        opacity: 1;
    }

    @keyframes driftUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
