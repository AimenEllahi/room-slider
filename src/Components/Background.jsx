import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";

import * as THREE from "three";

export const Background = () => {
  const colorA = "#000000";
  const colorB = "#917049";
  const start = 0.2;
  const end = -1;
  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256}>
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient
              colorA={"#ffffe2"}
              colorB={colorB}
              axes={"y"}
              start={start}
              end={end}
            />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};
