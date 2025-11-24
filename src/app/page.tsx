"use client"; // Necessário para componentes 3D interativos

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Center, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

/**
 * Componente principal da cena 3D.
 * Movido para cá para que possamos usar hooks (como useFrame)
 */
function Scene() {
  // Isso é um "ref" do React. Vamos usá-lo para acessar o objeto 3D diretamente.
  const textRef = useRef<Mesh>(null);

  // useFrame é um hook do R3F que executa a cada frame (60x por segundo)
  // É aqui que mora o "programável"!
  useFrame((state, delta) => {
    if (textRef.current) {
      // Gira o texto lentamente
      textRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      {/* 1. Luzes */}
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      {/* 2. Câmera Interativa */}
      {/* Agora você pode girar, dar zoom e mover a cena.
          Isto substitui os controles do Spline. */}
      <OrbitControls />

      {/* 3. O Texto */}
      <Center>
        <Text
          ref={textRef} // Anexamos o ref aqui
          fontSize={1.5}
          color="#34df8b" // Você pode mudar a cor aqui
          font="/fonts/inter.woff" // Você pode usar qualquer fonte .woff
          anchorX="center"
          anchorY="middle"
        >
          VICTOR LIS BRONZO
        </Text>
      </Center>
    </>
  );
}

/**
 * Página principal
 */
export default function Home() {
  return (
    <main>
      {/* O Canvas é onde sua cena 3D será renderizada */}
      <Canvas
        // Define a posição inicial da câmera
        camera={{ position: [0, 0, 10], fov: 35 }}
      >
        <Scene />
      </Canvas>
    </main>
  );
}
