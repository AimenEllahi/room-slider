import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei";
import Loader from "./Loader";
import { Model } from "./Room";
import Room from "./Room2";
import Slider from "./Slider";
import { gsap } from "gsap";
import SplitType from "split-type";

const models = [
  {
    heading: "Heading 1",
    model: <Model key='model1' />,
    text: "This is Description for model 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    heading: "Heading 2",
    model: <Room key='model2' />,
    text: "This is Description for model 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export default function Scene() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const ref = useRef();
  const textRef = useRef();
  const headerRef = useRef();

  const headerOutAnimation = () => {
    const ourText = new SplitType(headerRef.current, { types: "chars" });
    const chars = ourText.chars;
    gsap.fromTo(
      chars,
      {
        x: 0,
        opacity: 1,
      },
      {
        x: -100,
        opacity: 0,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
  };
  const headerInAnimation = () => {
    const ourText = new SplitType(headerRef.current, { types: "chars" });
    const chars = ourText.chars;
    gsap.fromTo(
      chars,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
        delay: 2,
      }
    );
  };

  const handleNextModel = () => {
    gsap.to(ref.current.position, {
      duration: 1,
      x: -15,
      y: -3,
      z: 0,
      ease: "power4.inOut",
      onStart: headerOutAnimation,
      onComplete: () => {
        setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);

        gsap.fromTo(
          ref.current.position,
          {
            x: 15,
            y: -3,
            z: 0,
          },
          {
            duration: 1,
            x: 0,
            y: -0.7,
            z: 0,
            ease: "power4.inOut",
            onStart: () => {
              gsap.fromTo(
                ref.current.rotation,
                {
                  y: -1.5,
                },
                {
                  duration: 1.5,
                  y: 0,
                  ease: "power4.inOut",
                }
              );
            },
          }
        );

        headerInAnimation();
      },
    });
  };

  const handlePrevModel = () => {
    gsap.to(ref.current.position, {
      duration: 1,
      x: 15,
      y: -3,
      z: 0,
      ease: "power4.inOut",
      onStart: headerOutAnimation,
      onComplete: () => {
        setCurrentModelIndex((prevIndex) =>
          prevIndex === 0 ? models.length - 1 : prevIndex - 1
        );

        gsap.fromTo(
          ref.current.position,
          {
            x: -15,
            y: -3,
            z: 0,
          },
          {
            duration: 1,
            x: 0,
            y: -0.7,
            z: 0,
            ease: "power4.inOut",
            onStart: () => {
              // Rotate the model continuously
              gsap.fromTo(
                ref.current.rotation,
                {
                  y: 1.5,
                },
                {
                  duration: 1.5,
                  y: 0,
                  ease: "power4.inOut",
                }
              );
            },
          }
        );

        headerInAnimation();
      },
    });
  };

  return (
    <div className='relative'>
      <div className='w-screen h-screen'>
        <Canvas shadowMap camera={{ position: [0, 2, 10], fov: 50 }}>
          <color attach='background' args={["#E1C78F"]} />
          <ambientLight intensity={0.5} />
          <directionalLight castShadow intensity={1} position={[0, 10, 0]} />
          <directionalLight castShadow intensity={1} position={[10, 10, 5]} />
          <Environment preset='apartment' />
          <Suspense fallback={<Loader />}>
            <group position={[0, -0.7, 0]} ref={ref}>
              {models[currentModelIndex].model}
            </group>
          </Suspense>
          <ContactShadows
            position={[0, -1, 0]}
            opacity={1}
            blur={1}
            far={4.4}
          />
        </Canvas>
      </div>
      <div className=' absolute top-14 gapy-y-4 left-[50%] text-4xl translate-x-[-50%] flex flex-col justify-center items-center text-center '>
        <div
          ref={headerRef}
          className='text-[#7A3E3E]   font-semibold text-animation'
        >
          {models[currentModelIndex].heading}
        </div>
      </div>
      <div
        ref={textRef}
        className=' absolute bottom-10 gapy-y-4 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center text-center '
      >
        <div className='text-[#7A3E3E] font-medium  '>
          {models[currentModelIndex].text}
        </div>
        <button className='bg-white text-[#7A3E3E] my-4 rounded-lg px-8 py-2  hover:outline-none hover:border-transparent focus:border-none focus:outline-none hover:cursor-pointer hover:bg-[#7A3E3E] hover:text-white transition-all duration-300'>
          Buy
        </button>
      </div>

      <Slider onNext={handleNextModel} onPrev={handlePrevModel} />
    </div>
  );
}
