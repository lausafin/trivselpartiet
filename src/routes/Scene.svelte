<script>
  import { T, useFrame } from '@threlte/core'
  import { OrbitControls, Environment } from '@threlte/extras'
  
  let rotation = 0;

  useFrame((_, delta) => {
    rotation += delta * 0.2
  })
</script>

<Environment preset="city" />

<T.PerspectiveCamera
  makeDefault
  position={[0, 2, 10]}
  fov={50}
>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
</T.PerspectiveCamera>


<T.Mesh rotation.y={rotation} position.y={0}>
  <T.IcosahedronGeometry args={[1, 0]} />
  <T.MeshStandardMaterial 
    color="#FDBA74" 
    roughness={0.2} 
    metalness={0.1} 
    flatShading={true}
  />
</T.Mesh>

<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[10, 10, 5]} intensity={1} />
