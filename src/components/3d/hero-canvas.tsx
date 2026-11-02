"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = t * 0.15;
      wireframeRef.current.rotation.y = t * 0.2;
      wireframeRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.x = -t * 0.1;
      pointsRef.current.rotation.y = -t * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Semi-transparent inner faceted geometric shape */}
      <mesh
        ref={meshRef}
        scale={hovered ? 2.3 : 2.1}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#8a1219"
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.25}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe edges glowing crimson */}
      <lineSegments ref={wireframeRef} scale={hovered ? 2.32 : 2.12}>
        <wireframeGeometry args={[new THREE.IcosahedronGeometry(1, 1)]} />
        <lineBasicMaterial color="#e62e39" transparent opacity={0.65} linewidth={1.5} />
      </lineSegments>

      {/* Orbiting points constellation */}
      <points ref={pointsRef}>
        <sphereGeometry args={[2.8, 24, 24]} />
        <pointsMaterial color="#ff4d58" size={0.035} transparent opacity={0.75} />
      </points>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#e62e39" />
        <FloatingShape />
      </Canvas>
    </div>
  );
}

