<script>
  import { T, useFrame } from '@threlte/core'
  import { OrbitControls, Environment, Float } from '@threlte/extras'
  import * as THREE from 'three';

  let mesh;
  const geometry = new THREE.IcosahedronGeometry(2, 10); // Reduced detail for performance
  
  // Store original positions for noise calculation
  const positionAttribute = geometry.getAttribute('position');
  const vertex = new THREE.Vector3();
  const originalPositions = [];
  
  for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      originalPositions.push(vertex.clone());
  }

  useFrame(({ clock }) => {
    if (!mesh) return;
    
    const time = clock.getElapsedTime() * 0.5;
    const positions = mesh.geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const original = originalPositions[i];
      // Organic noise-like movement using sine waves
      // A "breathing" rhythm mixed with a "water" ripple
      const waveX = 0.2 * Math.sin(original.x * 2 + time);
      const waveY = 0.2 * Math.cos(original.y * 1.5 + time);
      
      // Gentle pulse
      const breath = 1 + 0.05 * Math.sin(time * 0.8);

      vertex.copy(original).multiplyScalar(breath).addScalar(waveX + waveY);
      
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    positions.needsUpdate = true;
    mesh.rotation.y += 0.001; // Very slow drift
  })
</script>

<Environment preset="city" />

<T.PerspectiveCamera
  makeDefault
  position={[0, 0, 8]}
  fov={45}
>
    <!-- Dampened controls for a 'heavy' feel -->
    <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        enableDamping={true}
        dampingFactor={0.05}
    />
</T.PerspectiveCamera>

<!-- Soft, mysterious lighting -->
<T.AmbientLight intensity={0.8} color="#F5F5F0" />
<T.DirectionalLight 
    position={[5, 5, 5]} 
    intensity={1.2} 
    color="#FDBA74" 
/>
<T.PointLight position={[-5, -5, -5]} intensity={0.5} color="#0A0A0A" />

<Float
    speed={1.5} 
    rotationIntensity={0.2} 
    floatIntensity={0.5}
>
    <T.Mesh 
        bind:ref={mesh}
        geometry={geometry}
        position={[0, 0, 0]}
    >
        <T.MeshPhysicalMaterial 
            color="#F5F5F0" 
            roughness={0.6}
            metalness={0.1}
            transmission={0.0}
            thickness={1.5}
            clearcoat={0.3}
            clearcoatRoughness={0.2}
            flatShading={false}
        />
    </T.Mesh>
</Float>

