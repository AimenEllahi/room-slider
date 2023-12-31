import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/room-transformed.glb");

  useFrame((state) => {
    if (!group.current) return;
    //follow mouse on x
    group.current.rotation.y = gsap.utils.mapRange(
      0.9,
      3,
      -Math.PI / 4,
      Math.PI / 4,
      -state.pointer.x * 0.2
    );
  });

  return (
    <group
      ref={group}
      rotation={[0, -Math.PI / 2, 0]}
      {...props}
      dispose={null}
      scale={[1.3, 1, 1.3]}
    >
      <group
        position={[0.161, 0, -0.056]}
        rotation={[0, 0.695, 0]}
        scale={[3.316, 2.585, 3.316]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group position={[-1.573, 0.872, 0.086]} scale={[0.071, 0.442, 2.25]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials["Material.018"]}
        />
      </group>
      <group position={[-1.573, 0.872, 1.281]} scale={[0.071, 0.442, 0.653]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[-1.573, 0.872, 0.086]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_3.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_4.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[-0.69, 0.876, 1.086]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.043"]}
        position={[-1.54, 0.872, 0.086]}
      />
      <group
        position={[-0.647, 0.754, 0.982]}
        rotation={[0, -1.571, 0]}
        scale={1.23}
      >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials["Cover book-01"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.paper}
          />
        </group>
        <group position={[0, 0.034, -0.001]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials["Cover book-02"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.paper}
          />
        </group>
        <group position={[0, 0.017, 0.005]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials["Cover book-03"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_1.geometry}
            material={materials.paper}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Translucent_Curtain.geometry}
        material={materials["Material.026"]}
        position={[0.076, 3.377, -1.905]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.914, 0.952, 0.878]}
      />
      <group
        position={[1.915, 0.507, -2.006]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.314}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fiber_stick.geometry}
          material={materials["Material.042"]}
          position={[-0.012, 0.982, 0.007]}
          scale={3.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leaves.geometry}
          material={materials["Material.040"]}
          position={[0.144, 2.892, 0.136]}
          scale={3.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Soil.geometry}
          material={materials.Soil_1}
          position={[-0.013, 0.844, 0.008]}
          scale={3.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vase.geometry}
          material={materials["Material.041"]}
          position={[0, 0.457, 0]}
          scale={3.014}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Soil001.geometry}
            material={materials.Soil_1}
            position={[-0.039, 0.129, 0.003]}
          />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rug.geometry}
        material={materials["Fabric.rug.001"]}
        position={[1.152, 0.505, 0.299]}
        rotation={[Math.PI, 0, 0]}
        scale={[-0.005, -0.004, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.alarm_clock.geometry}
        material={materials["Material.028"]}
        position={[-0.683, 1.241, 1.292]}
        rotation={[-Math.PI, 1.371, -Math.PI]}
        scale={1.084}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.005"]}
          position={[0, -0.015, 0]}
          rotation={[0, -1.571, 0]}
          scale={0.9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.030"]}
          position={[0, -0.015, 0]}
          rotation={[0, -1.571, 0]}
          scale={0.9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.029"]}
          position={[0, -0.015, 0]}
          rotation={[0, -1.571, 0]}
          scale={0.9}
        />
      </mesh>
      <group
        position={[0.119, 0.928, -0.507]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.028, 0.031, 0.028]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh039.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh039_1.geometry}
          material={materials["Material.021"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZJ047.geometry}
        material={materials["Material.022"]}
        position={[0.778, 1.078, -0.499]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.028, 0.025, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZJ048.geometry}
        material={materials["Material.027"]}
        position={[-0.326, 1.04, -0.519]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.028, 0.024, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZJ049.geometry}
        material={materials["Material.027"]}
        position={[-0.329, 1.333, -0.522]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.03, 0.03, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZJ050.geometry}
        material={materials["Material.023"]}
        position={[-0.514, 1.235, -0.516]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.023, 0.028, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZJ051.geometry}
        material={materials["Material.019"]}
        position={[0.436, 0.603, -0.504]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.028, 0.031, 0.028]}
      />
      <group position={[-1.291, 1.401, 1.48]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Baked.geometry}
          material={materials["Material.044"]}
          position={[0.091, 0, -0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Baked.geometry}
          material={materials["Material.044"]}
          position={[-0.065, 0, -0.002]}
        />
      </group>
      <group
        position={[-1.236, 2.455, 0.847]}
        rotation={[0, 0.644, -Math.PI]}
        scale={-0.266}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Zara_Home_Vase_1.geometry}
          material={materials["Material.045"]}
          position={[-0.416, 0.215, -0.424]}
          rotation={[-Math.PI, 0.365, -Math.PI]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Zara_Home_Vase_2.geometry}
          material={materials["Material.045"]}
          position={[0, 0.281, 0]}
          rotation={[-Math.PI, 1.005, -Math.PI]}
          scale={0.004}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindowFrame.geometry}
        material={materials.window}
        position={[0.104, 1.338, -2.133]}
        scale={1.071}
      >
        <group position={[-0.59, 0.025, 0.023]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowL_1.geometry}
            material={materials.window}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowL_2.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle.geometry}
            material={materials["Material.015"]}
            position={[0.035, 0.475, 0.035]}
          />
        </group>
        <group position={[0.59, 0.025, 0.063]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowR_1.geometry}
            material={materials.window}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowR_2.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle001.geometry}
            material={materials["Material.015"]}
            position={[-0.035, 0.475, 0.035]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_Sill.geometry}
          material={materials.glass}
          position={[0, 0, 0.1]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bed_Table_Lamp001.geometry}
        material={materials.metal}
        position={[-0.685, 1.241, 0.912]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.419}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials["Material.027"]}
          position={[0, 0.235, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsCircle.geometry}
          material={materials.metal}
          position={[0, 0.3, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.007"]}
          position={[0, 0.235, 0]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/room-transformed.glb");

export default Model;
