<script lang="ts">
  import { T, useFrame } from '@threlte/core'
  import { OrbitControls, Float, ContactShadows, Environment } from '@threlte/extras'
  import { pillars } from '$lib/data/pillars';
  import PillarMesh from '$lib/components/3d/PillarMesh.svelte';

  // State for rotation
  let rotation = 0;

  useFrame((_, delta) => {
    rotation += delta * 0.05; // Slow drift
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={[6, 4, 6]}
  fov={45} 
>
    <OrbitControls 
        enablePan={false} 
        enableZoom={true}
        autoRotate={true}
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        target={[0, 0, 0]}
        enableDamping={true} 
        dampingFactor={0.05}
    />
</T.PerspectiveCamera>

<!-- Reduce shadow map size and quality for performance -->
<T.DirectionalLight 
    position={[5, 10, 5]} 
    intensity={1.2} 
    castShadow
    shadow.mapSize.width={1024}
    shadow.mapSize.height={1024}
/>
<T.AmbientLight intensity={0.4} />

<!-- Fog for depth -->
<T.Fog args={['#F5F5F0', 10, 30]} />

<!-- Add an invisible plane to capture raycasting if needed, but the pillars should be enough. 
     Maybe we add raycast debugging? -->

<T.Group rotation.y={rotation}>
  {#each pillars as pillar (pillar.id)}
    <Float 
        speed={1 + Math.random()} 
        rotationIntensity={Math.random()} 
        floatIntensity={Math.random()}
    >
        <PillarMesh {pillar} />
    </Float>
  {/each}
</T.Group>

