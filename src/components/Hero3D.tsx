import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShapes() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotate torus
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
      torusRef.current.position.y = Math.sin(t) * 0.2;
    }
    
    // Rotate sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.5;
      sphereRef.current.position.y = Math.cos(t * 0.8) * 0.3;
    }
    
    // Rotate box
    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.4;
      boxRef.current.rotation.z = t * 0.3;
      boxRef.current.position.y = Math.sin(t * 1.2) * 0.2;
    }
  });

  return (
    <>
      {/* Main Torus */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Wireframe Sphere */}
      <mesh ref={sphereRef} position={[-2, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#666666"
          wireframe
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Solid Box */}
      <mesh ref={boxRef} position={[2, -0.3, 0]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <directionalLight position={[-10, -5, -5]} intensity={0.4} />
        <pointLight position={[0, 0, 5]} intensity={0.6} />
        
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
