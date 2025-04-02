'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text, MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three';

function AnimatedSphere({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) {
  const ref = useRef<Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.y = Math.sin(t) * 0.1;
    ref.current.rotation.x = Math.sin(t / 4) / 2;
    ref.current.rotation.y = Math.sin(t / 2) / 2;
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color={color} speed={0.4} distort={distort} roughness={0.2} />
    </mesh>
  );
}

function FloatingName() {
  const textRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    textRef.current.position.y = Math.sin(t / 2) * 0.1;
    textRef.current.rotation.y = Math.sin(t / 4) * 0.1;
  });

  return (
    <Text
      ref={textRef}
      position={[0, 0, 0]}
      fontSize={1.5}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter-Bold.woff"
    >
      Suraj Yaligar
    </Text>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[60vh]">
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 5, 20]} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <group position={[0, 0, 0]}>
          <AnimatedSphere position={[-2.5, 0, 0]} color="#4361ee" speed={1.5} distort={0.4} />
          <AnimatedSphere position={[2.5, 0, 0]} color="#f72585" speed={1} distort={0.6} />
          <FloatingName />
        </group>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
