import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Loader from "./Loader";
import { Model } from "./Room";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Room = () => {
  const scene = useLoader(GLTFLoader, "/models/room.glb");
  return <primitive object={scene.scene} />;
};

export default function Scene() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-screen h-screen'>
        <Canvas>
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />}>
            <Environment preset='apartment' />
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
