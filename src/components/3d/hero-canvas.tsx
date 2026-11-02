"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 3D Camera Lens Aperture & Cinema Focus Ring System
function CineLensSystem() {
  const groupRef = useRef<THREE.Group>(null);
  const apertureRef = useRef<THREE.Group>(null);
  const lensGlassRef = useRef<THREE.Mesh>(null);
  const filmRibbonRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating sway like a camera on a gimbal
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1 + 0.15;
      groupRef.current.rotation.y = t * 0.12;
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.1;
    }
    if (apertureRef.current) {
      // Subtle aperture breathing (f/1.4 to f/2.8)
      const scale = 1 + Math.sin(t * 0.8) * 0.08;
      apertureRef.current.scale.set(scale, scale, 1);
      apertureRef.current.rotation.z = -t * 0.08;
    }
    if (lensGlassRef.current) {
      // Glass refractive shimmer
      const mat = lensGlassRef.current.material as THREE.MeshPhysicalMaterial;
      if (mat) {
        mat.roughness = 0.15 + Math.sin(t * 0.5) * 0.05;
      }
    }
    if (filmRibbonRef.current) {
      filmRibbonRef.current.rotation.y = -t * 0.05;
      filmRibbonRef.current.rotation.x = Math.sin(t * 0.4) * 0.1;
    }
  });

  // Generate 9 aperture blades around the iris
  const bladeCount = 9;
  const blades = Array.from({ length: bladeCount });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Outer Knurled Cinema Lens Barrel (Focus Ring) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.4, 2.4, 0.4, 48, 1, true]} />
        <meshStandardMaterial
          color="#1a0b0e"
          metalness={0.9}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 2. Front Lens Bezel Ring with Crimson Accent (like Canon L-Series / Cinema Red Ring) */}
      <mesh position={[0, 0, 0.22]}>
        <ringGeometry args={[2.35, 2.42, 64]} />
        <meshStandardMaterial
          color="#e62e39"
          emissive="#c81e28"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3. Optical Front Element (Convex Lens Glass with Anamorphic Coating) */}
      <mesh ref={lensGlassRef} position={[0, 0, 0.1]}>
        <sphereGeometry args={[2.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 4]} />
        <meshPhysicalMaterial
          color="#0f0507"
          metalness={0.1}
          roughness={0.15}
          transmission={0.85}
          thickness={0.8}
          ior={1.52}
          reflectivity={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          side={THREE.DoubleSide}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 4. Internal Aperture Iris Blades (8/9 Blade Cinematic Iris) */}
      <group ref={apertureRef} position={[0, 0, -0.05]}>
        {blades.map((_, i) => {
          const angle = (i * 2 * Math.PI) / bladeCount;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, (i * 0.005) - 0.02]}
              rotation={[0, 0, angle + 0.35]}
            >
              <planeGeometry args={[1.3, 0.7]} />
              <meshStandardMaterial
                color="#200d11"
                metalness={0.95}
                roughness={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          );
        })}
      </group>

      {/* 5. Aperture Center Opening Glow (Simulating Studio Key Light Entering Lens) */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[0.7, 32]} />
        <meshBasicMaterial
          color="#e62e39"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 6. Subtle Orbiting Film Track / Exposure Particles */}
      <points ref={filmRibbonRef}>
        <torusGeometry args={[3.2, 0.25, 12, 64]} />
        <pointsMaterial
          color="#ff4455"
          size={0.03}
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] opacity-75">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        {/* Studio Rim Light 1: Warm Cinema Key */}
        <directionalLight position={[6, 4, 4]} intensity={1.5} color="#ffffff" />
        {/* Studio Rim Light 2: Crimson Edge Fill */}
        <pointLight position={[-6, -3, 2]} intensity={2.2} color="#e62e39" />
        {/* Soft Anamorphic Backlight */}
        <pointLight position={[0, 0, -3]} intensity={1.8} color="#c81e28" />
        <CineLensSystem />
      </Canvas>
    </div>
  );
}
