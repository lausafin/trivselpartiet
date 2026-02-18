<script>
    import { onMount, onDestroy } from 'svelte';
    // Remove static import to prevent SSR issues with Tone.js
    // import * as Tone from 'tone'; 

    let Tone; // Will hold the dynamically imported module
    let isPlaying = false;
    let synth, filter, reverb, loopTimeout;

    // A low, warm drone in F# pentatonic
    // F#2, A#2, C#3, F#3
    const NOTES = ["F#2", "A#2", "C#3", "F#3"];

    async function initAudio() {
        if (!Tone) {
            Tone = await import('tone');
        }
        await Tone.start();
        
        // Setup the "Voice" - A warm, filtered polyphonic synth
        filter = new Tone.AutoFilter({
            frequency: "8n", 
            baseFrequency: 200, 
            octaves: 2.6
        }).toDestination().start();

        reverb = new Tone.Reverb({
            decay: 5,
            wet: 0.5
        }).toDestination();

        synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: "sine" // Pure and soft
            },
            envelope: {
                attack: 2,
                decay: 1,
                sustain: 0.5,
                release: 3
            }
        }).connect(filter).connect(reverb);
        
        // Gentle volume
        synth.volume.value = -20; 

        isPlaying = true;
        playGenerativeLoop();
    }

    function playGenerativeLoop() {
        if (!isPlaying) return;

        // Pick a random note and duration
        const note = NOTES[Math.floor(Math.random() * NOTES.length)];
        const duration = Math.random() * 4 + 2; // 2-6 seconds
        const delay = Math.random() * 3 + 1; // 1-4 seconds wait

        if (synth && !synth.disposed) {
            synth.triggerAttackRelease(note, duration);
        }

        loopTimeout = setTimeout(playGenerativeLoop, (duration + delay) * 1000);
    }

    function toggleAudio() {
        if (isPlaying) {
            // Fade out
            if (Tone) Tone.Destination.mute = true;
            isPlaying = false;
        } else {
            if (!synth) {
                initAudio();
            } else {
                if (Tone) Tone.Destination.mute = false;
                isPlaying = true;
                playGenerativeLoop();
            }
        }
    }

    onDestroy(() => {
        isPlaying = false;
        if (loopTimeout) clearTimeout(loopTimeout);
        
        if (synth) {
            if (!synth.disposed) synth.dispose();
            if (filter && !filter.disposed) filter.dispose();
            if (reverb && !reverb.disposed) reverb.dispose();
        }
    });
</script>

<button 
    class="audio-toggle" 
    on:click={toggleAudio}
    aria-label="Toggle Sound"
>
    {#if isPlaying}
        <!-- Sound Wave Icon -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 4V20M8 9V15M16 9V15M4 12H4.01M20 12H20.01" stroke-linecap="round"/>
        </svg>
    {:else}
        <!-- Muted Icon -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 12L20 12" stroke-linecap="round"/>
        </svg>
    {/if}
</button>

<style>
    .audio-toggle {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 48px;
        height: 48px;
        border: 1px solid rgba(10, 10, 10, 0.1);
        border-radius: 50%;
        background: transparent;
        color: var(--c-depth);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0.6;
    }

    .audio-toggle:hover {
        opacity: 1;
        transform: scale(1.05);
        border-color: rgba(10, 10, 10, 0.3);
    }
</style>
