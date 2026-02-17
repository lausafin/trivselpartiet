<script>
    export let sacrifice = "";
    export let benefit = "";
</script>

<div class="honesty-bar">
    <div class="column sacrifice">
        <h3>Prisen</h3>
        <p>{sacrifice}</p>
    </div>
    <div class="divider"></div>
    <div class="column benefit">
        <h3>Gevinsten</h3>
        <p>{benefit}</p>
    </div>
</div>

<style>
    .honesty-bar {
        display: flex;
        align-items: stretch;
        margin-top: 4rem;
        border-top: 1px solid rgba(10, 10, 10, 0.1);
        border-bottom: 1px solid rgba(10, 10, 10, 0.1);
        font-family: var(--f-mono);
        font-size: 0.9rem;
    }

    .column {
        flex: 1;
        padding: 2rem;
    }

    .sacrifice {
        background: rgba(10, 10, 10, 0.02);
        color: rgba(10, 10, 10, 0.7);
    }

    .benefit {
        background: transparent;
        color: var(--c-depth);
    }

    .divider {
        width: 1px;
        background: rgba(10, 10, 10, 0.1);
    }

    h3 {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 0.75rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }

    p {
        margin: 0;
        line-height: 1.5;
    }

    @media (max-width: 600px) {
        .honesty-bar {
            flex-direction: column;
        }
        .divider {
            width: 100%;
            height: 1px;
        }
    }
</style>
