<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    const dispatch = createEventDispatcher();
    let visible = false;
    let answered = false;

    onMount(() => {
        // Check if already answered in this session
        if (!sessionStorage.getItem('trivsel_sleep_check')) {
            visible = true;
        } else {
            answered = true;
        }
    });

    function handleResponse(response) {
        sessionStorage.setItem('trivsel_sleep_check', response);
        visible = false;
        answered = true;
        dispatch('answer', response);
    }
</script>

{#if visible}
    <div class="sleep-gate" transition:fade={{ duration: 1500 }}>
        <div class="content" in:fly={{ y: 20, duration: 1500, delay: 500, easing: cubicOut }}>
            <h2>Hvordan sov du i nat?</h2>
            
            <div class="options">
                <button on:click={() => handleResponse('godt')}>
                    Godt
                </button>
                <button on:click={() => handleResponse('uroligt')}>
                    Uroligt
                </button>
                <button on:click={() => handleResponse('for_lidt')}>
                    For lidt
                </button>
                <button on:click={() => handleResponse('husker_ikke')}>
                    Husker ikke
                </button>
            </div>
        </div>
    </div>
{/if}

<style>
    .sleep-gate {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        background: var(--c-base);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        text-align: center;
        max-width: 600px;
        padding: 2rem;
    }

    h2 {
        font-family: var(--f-serif);
        font-size: 3rem;
        font-weight: 300;
        color: var(--c-depth);
        margin-bottom: 3rem;
        letter-spacing: -0.02em;
    }

    .options {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    button {
        background: transparent;
        border: 1px solid rgba(10, 10, 10, 0.2);
        padding: 1rem 2rem;
        font-family: var(--f-serif);
        font-size: 1.25rem;
        color: var(--c-depth);
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.4s ease;
    }

    button:hover {
        background: var(--c-depth);
        color: var(--c-base);
        border-color: var(--c-depth);
        transform: translateY(-2px);
    }
</style>
