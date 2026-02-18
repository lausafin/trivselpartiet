<script lang="ts">
  import { T } from '@threlte/core'
  import { HTML } from '@threlte/extras'
  import { spring } from 'svelte/motion'
  import type { Pillar } from '$lib/data/pillars'
  import { activePillar } from '$lib/stores'

  export let pillar: Pillar;

  let hovering = false;
  
  const scale = spring(1, {
    stiffness: 0.1,
    damping: 0.25
  });

  $: scale.set(hovering ? 1.4 : 1);

  // Categorize colors based on the "AGENTS.md" palette
  const getColor = (cat: string) => {
      switch(cat) {
          case 'Livet': return '#FDBA74'; // Solaris Gold
          case 'Fundament': return '#A8A29E'; // Stone Grey (approx)
          case 'Vækst': return '#D6D3D1'; // Warm Grey
          case 'Fremtiden': return '#E7E5E4'; // Unbleached Linen-ish
          default: return '#F5F5F0';
      }
  };

  function handleClick(e: any) {
      e.stopPropagation();
      activePillar.set(pillar);
  }
</script>

<T.Group 
  position={pillar.position} 
  scale={$scale}
>
    <!-- Invisible hit volume for better UX -->
    <T.Mesh 
        renderOrder={1}
        on:pointerenter={(e) => {
            console.log('Raycast hit:', pillar.title); // Debug log
            e.stopPropagation();
            hovering = true;
            document.body.style.cursor = 'pointer';
        }}
        on:pointerleave={() => {
            console.log('Raycast leave:', pillar.title); // Debug log
            hovering = false;
            document.body.style.cursor = 'default';
        }}
        on:click={handleClick}
    >
        <T.SphereGeometry args={[0.9, 16, 16]} />
        <T.MeshBasicMaterial 
            transparent 
            opacity={0.2} 
            depthWrite={false} 
            color={hovering ? "green" : "red"} 
            wireframe={true} 
        />
    </T.Mesh>

    <!-- The "Stone/Amber" representation -->
    <T.Mesh 
        castShadow 
        receiveShadow
        rotation.x={Math.random() * Math.PI}
        rotation.y={Math.random() * Math.PI}
    >
        <!-- Higher detail Icosahedron for organic, pebbled look -->
        <T.IcosahedronGeometry args={[0.4, 4]} />
        
        <!-- Physical material for tactile, stone-like or amber-like quality -->
        <T.MeshPhysicalMaterial 
            color={getColor(pillar.category)}
            roughness={0.4}
            metalness={0.1}
            transmission={pillar.category === 'Livet' ? 0.2 : 0}
            thickness={1}
            clearcoat={0.3}
            clearcoatRoughness={0.2}
        />
    </T.Mesh>

    <!-- The floating label - Conditional rendering is often safer for performance with many HTML elements -->
    {#if hovering}
      <HTML position={[0, 0.9, 0]} center transform zIndexRange={[50, 0]}>
        <div class="pillar-label">
            <span class="category">{pillar.category}</span>
            <span class="title">{pillar.title}</span>
        </div>
      </HTML>
    {/if}
</T.Group>

<style>
    .pillar-label {
        background: rgba(245, 245, 240, 0.95);
        padding: 0.6rem 1.2rem;
        border-radius: 2px;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 12px rgba(10, 10, 10, 0.08); /* Better shadow */
        border: 1px solid rgba(10, 10, 10, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;
        text-align: center;
        min-width: 140px;
        pointer-events: none; /* Ensure the label itself doesn't block rays if passing through */
        /* Removed transitions that might cause layer promotion issues */
    }

    .category {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #666;
    }

    .title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1rem;
        color: #0A0A0A;
        font-weight: 500;
    }
</style>
