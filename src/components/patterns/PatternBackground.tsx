
import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

// Simplified AnimatedSphere component
interface AnimatedSphereProps {
  position: [number, number, number];
  size: number;
  color: string;
}

const AnimatedSphere = ({ 
  position, 
  size, 
  color
}: AnimatedSphereProps) => {
  return (
    <Sphere args={[size, 32, 32]} position={position}>
      <MeshDistortMaterial 
        distort={0.4} 
        speed={0.5} 
        color={color}
      />
    </Sphere>
  );
};

const PatternBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0F1122]">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10 bg-repeat"></div>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 10, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-5, -10, 2]} intensity={0.3} color="#B026FF" />
        
        <AnimatedSphere 
          position={[-3, 0, -2]} 
          size={1.5}
          color="#00F5FF"
        />
        
        <AnimatedSphere 
          position={[3, 0, -4]} 
          size={2}
          color="#B026FF"
        />
        
        <AnimatedSphere 
          position={[0, -2, -6]} 
          size={3}
          color="#FAFF00"
        />
      </Canvas>
    </div>
  );
};

export default PatternBackground;
