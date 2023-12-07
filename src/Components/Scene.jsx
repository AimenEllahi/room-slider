import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei";
import Loader from "./Loader";
import { Model } from "./Room";
import Room from "./Room2";
import Slider from "./Slider";
import { gsap } from "gsap";

const models = [
  {
    model: <Model key="model1" />,
    text: "Description for Model",
  },
  {
    model: <Room key="model2" />,
    text: "Description for Model",
  },
];

export default function Scene() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const ref = useRef();
  const textRef = useRef();

  const handleNextModel = () => {
    gsap.to(ref.current.position, {
      duration: 2,
      x: -window.innerWidth / 2,
      y: -window.innerHeight / 2,
      z: 0,
      ease: "power3.inOut",
      onStart: () => {
        gsap.to(textRef.current, { duration: 2, opacity: 0 });
      },
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
            y: -0.7,
            z: 0,
            ease: "power3.inOut",
            onStart: () => {
              // Rotate the model continuously
              gsap.to(ref.current.rotation, {
                duration: 2,
                y: "+=6.28319", // This is equivalent to Math.PI * 2
                ease: "none",

                onUpdate: () => {
                  // Any additional logic you want to run on each update
                },
              });
            },
          }
        );
        gsap.to(textRef.current, { duration: 2, opacity: 1, delay: 2 });
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
      onStart: () => {
        gsap.to(textRef.current, { duration: 2, opacity: 0 });
      },
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
            y: -0.7,
            z: 0,
            ease: "power3.inOut",
            onStart: () => {
              // Rotate the model continuously
              gsap.to(ref.current.rotation, {
                duration: 2,
                y: "+=6.28319",
                ease: "none",

                onUpdate: () => {
                  // Any additional logic you want to run on each update
                },
              });
            },
          }
        );
        gsap.to(textRef.current, { duration: 2, opacity: 1, delay: 2 });
      },
    });
  };

  return (
    <div>
      <div className="w-screen h-screen">
        <Canvas shadowMap camera={{ position: [0, 2, 10], fov: 50 }}>
          <color attach="background" args={["#E1C78F"]} />
          <ambientLight intensity={2} color={"orange"} />
          <directionalLight
            castShadow
            intensity={10}
            position={[0, 10, 0]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            color={"orange"}
          />
          <Suspense fallback={<Loader />}>
            <Environment preset="sunset" />
            <group position={[0, -0.7, 0]} ref={ref}>
              {models[currentModelIndex].model}
            </group>
            <group position={[0, -4.4, 4]}>
              <Html
                position={[0, 3, 0]}
                transform
                sprite
                occlude
                distanceFactor={10}
              >
                <div
                  className="text-[#7A3E3E] flex flex-col justify-center items-center text-center text-2xl font-bold"
                  ref={textRef}
                >
                  {models[currentModelIndex].text}

                  <button className="bg-white text-[#7A3E3E] rounded-lg px-4 py-0.5 text-xs hover:outline-none hover:border-none focus:border-none focus:outline-none hover:cursor-pointer hover:bg-[#7A3E3E] hover:text-white transition-all duration-300">
                    Buy
                  </button>
                </div>
              </Html>
            </group>
          </Suspense>
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[-0.3, -2, 0.4]}
            opacity={0.5}
            width={30}
            height={30}
            blur={1}
            far={4.4}
          />
        </Canvas>
      </div>

      <Slider onNext={handleNextModel} onPrev={handlePrevModel} />
    </div>
  );
}
