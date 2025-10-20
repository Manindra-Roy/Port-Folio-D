import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export function BatMan(props) {
  const isMobileMd = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const group = useRef(null);
  const { nodes, materials } = useGLTF("/models/BatMan.glb");

  useEffect(() => {
    if (materials.lambert1) {
      materials.lambert1.transparent = true;
    }
  }, [materials.lambert1]);

  useGSAP(
    () => {
      if (group.current) {
        gsap.from(group.current.children[0].material, {
          opacity: 0,
          duration: 0.5,
          delay: 0,
          ease: "power3.out",
        });
      }
    },
    { scope: group }
  );

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 0.15 : 0.1}
      position={[0, isMobileMd ? 1.25 : isMobile ? 0.75 : -0.725, 0]}
      rotation={[0, Math.PI / 1, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload("/models/BatMan.glb");
