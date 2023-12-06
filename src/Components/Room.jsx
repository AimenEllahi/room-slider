import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/room.glb");
  return (
    <group {...props} dispose={null} scale={10}>
      <group position={[0.1, 1.34, -2.13]} scale={1.07}>
        <mesh geometry={nodes.WindowFrame.geometry} material={materials.window}>
          <group position={[-0.59, 0.02, 0.02]}>
            <mesh
              geometry={nodes.WindowL_1.geometry}
              material={materials.window}
            />
            <mesh
              geometry={nodes.WindowL_2.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.Handle.geometry}
              material={materials["Material.015"]}
              position={[0.03, 0.48, 0.04]}
            />
          </group>
          <group position={[0.59, 0.02, 0.06]}>
            <mesh
              geometry={nodes.WindowR_1.geometry}
              material={materials.window}
            />
            <mesh
              geometry={nodes.WindowR_2.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.Handle001.geometry}
              material={materials["Material.015"]}
              position={[-0.03, 0.48, 0.04]}
            />
          </group>
          <mesh
            geometry={nodes.Windows_Sill.geometry}
            material={materials.glass}
            position={[0, 0, 0.1]}
          />
        </mesh>
      </group>
      <group
        position={[-0.65, 0.75, 0.98]}
        rotation={[0, -1.57, 0]}
        scale={1.23}
      >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            geometry={nodes.Plane002.geometry}
            material={materials["Cover book-01"]}
          />
          <mesh
            geometry={nodes.Plane002_1.geometry}
            material={materials.paper}
          />
        </group>
        <group position={[0, 0.03, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            geometry={nodes.Plane007.geometry}
            material={materials["Cover book-02"]}
          />
          <mesh
            geometry={nodes.Plane007_1.geometry}
            material={materials.paper}
          />
        </group>
        <group position={[0, 0.02, 0.01]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            geometry={nodes.Plane006.geometry}
            material={materials["Cover book-03"]}
          />
          <mesh
            geometry={nodes.Plane006_1.geometry}
            material={materials.paper}
          />
        </group>
      </group>
      <group
        position={[1.91, 0.51, -2.01]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.31}
      >
        <mesh
          geometry={nodes.Fiber_stick.geometry}
          material={materials["Material.042"]}
          position={[-0.01, 0.98, 0.01]}
          scale={3.01}
        />
        <mesh
          geometry={nodes.Leaves.geometry}
          material={materials["Material.040"]}
          position={[0.14, 2.89, 0.14]}
          scale={3.01}
        />
        <mesh
          geometry={nodes.Soil.geometry}
          material={materials.Soil_1}
          position={[-0.01, 0.84, 0.01]}
          scale={3.01}
        />
        <mesh
          geometry={nodes.Vase.geometry}
          material={materials["Material.041"]}
          position={[0, 0.46, 0]}
          scale={3.01}
        >
          <mesh
            geometry={nodes.Soil001.geometry}
            material={materials.Soil_1}
            position={[-0.04, 0.13, 0]}
          />
        </mesh>
      </group>
      <group
        position={[-0.68, 1.24, 0.91]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.42}
      >
        <mesh
          geometry={nodes.Bed_Table_Lamp001.geometry}
          material={materials.metal}
        >
          <mesh
            geometry={nodes.Cylinder012.geometry}
            material={materials["Material.027"]}
            position={[0, 0.24, 0]}
          />
          <mesh
            geometry={nodes.NurbsCircle.geometry}
            material={materials.metal}
            position={[0, 0.3, 0]}
          />
          <mesh
            geometry={nodes.Sphere.geometry}
            material={materials["Material.007"]}
            position={[0, 0.24, 0]}
          />
        </mesh>
      </group>
      <group position={[-1.29, 1.4, 1.48]} rotation={[0, -1.57, 0]}>
        <mesh
          geometry={nodes.Cylinder001_Baked.geometry}
          material={materials["Material.044"]}
          position={[0.09, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder_Baked.geometry}
          material={materials["Material.044"]}
          position={[-0.06, 0, 0]}
        />
      </group>
      <group
        position={[-1.24, 2.45, 0.85]}
        rotation={[0, 0.64, -Math.PI]}
        scale={-0.27}
      >
        <mesh
          geometry={nodes.Zara_Home_Vase_1.geometry}
          material={materials["Material.045"]}
          position={[-0.42, 0.21, -0.42]}
          rotation={[-Math.PI, 0.37, -Math.PI]}
          scale={0}
        />
        <mesh
          geometry={nodes.Zara_Home_Vase_2.geometry}
          material={materials["Material.045"]}
          position={[0, 0.28, 0]}
          rotation={[-Math.PI, 1, -Math.PI]}
          scale={0}
        />
      </group>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.002"]}
        scale={34.88}
      />
      <group
        position={[0.16, 0, -0.06]}
        rotation={[0, 0.7, 0]}
        scale={[3.32, 2.58, 3.32]}
      >
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          geometry={nodes.Circle_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group position={[-1.57, 0.87, 0.09]} scale={[0.07, 0.44, 2.25]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          geometry={nodes.Cube_3.geometry}
          material={materials["Material.018"]}
        />
      </group>
      <group position={[-1.57, 0.87, 1.28]} scale={[0.07, 0.44, 0.65]}>
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[-1.57, 0.87, 0.09]}>
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Cube006_3.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group position={[-0.69, 0.88, 1.09]}>
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cube007_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["Material.043"]}
        position={[-1.54, 0.87, 0.09]}
      />
      <mesh
        geometry={nodes.Translucent_Curtain.geometry}
        material={materials["Material.026"]}
        position={[0.08, 3.38, -1.9]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.91, 0.95, 0.88]}
      />
      <mesh
        geometry={nodes.Rug.geometry}
        material={materials["Fabric.rug.001"]}
        position={[1.15, 0.51, 0.3]}
        rotation={[Math.PI, 0, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.alarm_clock.geometry}
        material={materials["Material.028"]}
        position={[-0.68, 1.24, 1.29]}
        rotation={[-Math.PI, 1.37, -Math.PI]}
        scale={1.08}
      >
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.005"]}
          position={[0, -0.02, 0]}
          rotation={[0, -1.57, 0]}
          scale={0.9}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["Material.030"]}
          position={[0, -0.02, 0]}
          rotation={[0, -1.57, 0]}
          scale={0.9}
        />
        <mesh
          geometry={nodes.Cube006_4.geometry}
          material={materials["Material.029"]}
          position={[0, -0.02, 0]}
          rotation={[0, -1.57, 0]}
          scale={0.9}
        />
      </mesh>
      <group
        position={[0.12, 0.93, -0.51]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.03}
      >
        <mesh
          geometry={nodes.Mesh039.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          geometry={nodes.Mesh039_1.geometry}
          material={materials["Material.021"]}
        />
      </group>
      <mesh
        geometry={nodes.ZJ047.geometry}
        material={materials["Material.022"]}
        position={[0.78, 1.08, -0.5]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes.ZJ048.geometry}
        material={materials["Material.027"]}
        position={[-0.33, 1.04, -0.52]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.03, 0.02, 0.03]}
      />
      <mesh
        geometry={nodes.ZJ049.geometry}
        material={materials["Material.027"]}
        position={[-0.33, 1.33, -0.52]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.ZJ050.geometry}
        material={materials["Material.023"]}
        position={[-0.51, 1.23, -0.52]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.02, 0.03, 0.03]}
      />
      <mesh
        geometry={nodes.ZJ051.geometry}
        material={materials["Material.019"]}
        position={[0.44, 0.6, -0.5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.03}
      />
    </group>
  );
}

useGLTF.preload("/room-transformed.glb");
