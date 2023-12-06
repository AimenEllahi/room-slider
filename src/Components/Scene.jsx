import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei";
import Loader from "./Loader";
import { Model } from "./Room";
import Room from "./Room2";
import Slider from "./Slider";
import { gsap } from "gsap";

const models = [<Model key="model1" />, <Room key="model2" />];

export default function Scene() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const ref = useRef();

  const handleNextModel = () => {
    gsap.to(ref.current.position, {
      duration: 2,
      x: -window.innerWidth / 2,
      y: -window.innerHeight / 2,
      z: 0,
      ease: "power3.inOut",
      onComplete: () => {
        setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);

        gsap.fromTo(
          ref.current.position,
          {
            x: window.innerWidth / 2,
            y: -window.innerHeight / 2,
            z: 0,
          },
          {
            duration: 2,
            x: 0,
            y: -1,
            z: 0,
            ease: "power3.inOut",
          }
        );
      },
    });
  };

  const handlePrevModel = () => {
    gsap.to(ref.current.position, {
      duration: 2,
      x: window.innerWidth / 2,
      y: -window.innerHeight / 2,
      z: 0,
      ease: "power3.inOut",
      onComplete: () => {
        setCurrentModelIndex((prevIndex) =>
          prevIndex === 0 ? models.length - 1 : prevIndex - 1
        );

        gsap.fromTo(
          ref.current.position,
          {
            x: -window.innerWidth / 2,
            y: -window.innerHeight / 2,
            z: 0,
          },
          {
            duration: 2,
            x: 0,
            y: -1,
            z: 0,
            ease: "power3.inOut",
          }
        );
      },
    });
  };

  return (
    <div>
      <div className="w-screen h-screen">
        <Canvas shadowMap camera={{ position: [0, 2, 10], fov: 50 }}>
          <color attach="background" args={["#E1C78F"]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            color={"white"}
          />
          <Suspense fallback={<Loader />}>
            <Environment preset="sunset" />
            <group position={[0, -1, 0]} ref={ref}>
              {models[currentModelIndex]}
            </group>
          </Suspense>
          {/* <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1, 0]}
            opacity={1}
            width={20}
            height={10}
            blur={0.3}
            far={10.5}
          /> */}
        </Canvas>
      </div>
      <Slider onNext={handleNextModel} onPrev={handlePrevModel} />
    </div>
  );
}
