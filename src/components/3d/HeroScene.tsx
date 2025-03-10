import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, PresentationControls } from "@react-three/drei";
import { Group } from "three";

// Componente para o modelo 3D abstrato
const AbstractModel = () => {
  const group = useRef<Group>(null);

  // Animação de rotação suave
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Esferas abstratas com diferentes cores */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[1.5, 0.5, -1]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[-1.2, -0.8, 0.5]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Torus para adicionar complexidade */}
      <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Componente principal da cena 3D
const HeroScene = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />

        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Float rotationIntensity={0.5} floatIntensity={0.5}>
            <AbstractModel />
          </Float>
        </PresentationControls>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroScene;
