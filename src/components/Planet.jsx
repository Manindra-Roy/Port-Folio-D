import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export function Planet(props) {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/models/Planet.glb");
  const { actions } = useAnimations(animations, group);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(group.current.position, {
      x: -5,
      duration: 4.5,
      ease: "circ.out",
    });
    tl.to(
      group.current.rotation,
      {
        x: 0,
        y: Math.PI * 1.5,
        z: 0,
        duration: 10,
        ease: "power1.inOut",
      },
      "-=25%"
    );
    tl.to(group.current.position, {
      x: -10,
      duration: 2.5,
      ease: "circ.in",
    });
    tl.fromTo(
      group.current.position,
      {
        x: 5,
      },
      {
        x: 0,
        duration: 2.5,
        ease: "circ.out",
      }
    );
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.01}
      position={[0, isMobile ? 2.25 : 0.5, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="0cca8a6e679b4bac83474532285ab2f3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Capitol_ship_Empty"
                  position={[-4000, 2853.539, -3000]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group
                    name="Big_engine_parts001"
                    position={[0.292, 127.238, 16.781]}
                    rotation={[-Math.PI / 2, 0, -3.129]}
                  >
                    <mesh
                      name="Big_engine_parts001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts001_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts002"
                    position={[4.986, 127.238, -20.22]}
                    rotation={[-Math.PI / 2, 0, -1.559]}
                  >
                    <mesh
                      name="Big_engine_parts002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts002_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts003"
                    position={[-1.17, 127.238, -20.169]}
                    rotation={[-Math.PI / 2, 0, -1.559]}
                  >
                    <mesh
                      name="Big_engine_parts003_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts003_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts006"
                    position={[27.586, 30.103, 5.394]}
                    rotation={[-1.56, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts006_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts006_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts007"
                    position={[-23.702, 6.406, 14.585]}
                    rotation={[0, -1.046, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts007_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts007_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts008"
                    position={[-23.696, -157.869, 14.419]}
                    rotation={[0, -1.046, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts008_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts008_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Booster_feeder"
                    position={[18.409, 126.67, 1.403]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Booster_feeder_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Booster_feeder_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Booster_feeder_3"
                    position={[8.71, 126.764, -16.301]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Booster_feeder_3_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Booster_feeder_3_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Booster_feeder_3001"
                    position={[11.431, 126.764, 17.121]}
                    rotation={[Math.PI / 2, 0, 2.059]}
                  >
                    <mesh
                      name="Booster_feeder_3001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Booster_feeder_3001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Central_scaffholding_backup"
                    position={[1.672, -129.557, 0.51]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Central_scaffholding_backup_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Central_scaffholding_backup_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cube002" position={[3.751, -33.593, 30.863]}>
                    <mesh
                      name="Cube002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube002_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cube003" position={[20.512, 64.531, 1.463]}>
                    <mesh
                      name="Cube003_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube003_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Cube010" position={[3.751, -89.862, 30.863]}>
                    <mesh
                      name="Cube010_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube010_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cube017" position={[2.959, 80.997, 55.717]}>
                    <mesh
                      name="Cube017_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube017_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder"
                    position={[1.819, -107.456, 0.453]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Cylinder001" position={[1.819, 52.12, 35.3]}>
                    <mesh
                      name="Cylinder001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder002"
                    position={[1.819, 132.088, 1.787]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder002_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Cylinder003"
                    position={[16.947, 127.033, 13.269]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder003_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder003_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder003_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder004" position={[1.819, 52.12, 35.3]}>
                    <mesh
                      name="Cylinder004_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder004_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Cylinder005"
                    position={[15.644, 126.892, -10.773]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder005_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder005_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder005_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder005_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder006" position={[1.819, 60.49, 38.448]}>
                    <mesh
                      name="Cylinder006_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder006_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                    <mesh
                      name="Cylinder006_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder006_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Cylinder008"
                    position={[10.46, -95.695, 19.229]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder008_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder008_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder011" position={[1.819, 60.49, 38.448]}>
                    <mesh
                      name="Cylinder011_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder011_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Cylinder012" position={[1.819, 78.707, 41.566]}>
                    <mesh
                      name="Cylinder012_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder012_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder012_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder012_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder014"
                    position={[16.95, 127.052, 13.267]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder014_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder014_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder014_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder014_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder015"
                    position={[15.668, 126.896, -10.71]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder015_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder015_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder015_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder015_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder016" position={[0.549, 76.498, 55.802]}>
                    <mesh
                      name="Cylinder016_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder016_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder017" position={[2.941, 80.082, 56.211]}>
                    <mesh
                      name="Cylinder017_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder017_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder030"
                    position={[1.819, 132.088, 1.787]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[1.126, 1.126, 1]}
                  >
                    <mesh
                      name="Cylinder030_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder030_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder030_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder030_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder040" position={[0.581, 80.873, 55.7]}>
                    <mesh
                      name="Cylinder040_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder040_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder041" position={[2.941, 81.852, 56.211]}>
                    <mesh
                      name="Cylinder041_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder041_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder042" position={[0.57, 80.88, 56.781]}>
                    <mesh
                      name="Cylinder042_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder042_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder044" position={[3.031, 76.498, 55.802]}>
                    <mesh
                      name="Cylinder044_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder044_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2001"
                    position={[-18.155, 126.973, 2.438]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2001_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2002"
                    position={[23.841, 5.046, 20.154]}
                    rotation={[0, 1.046, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2002_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2003"
                    position={[8.166, -60.947, 25.552]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2003_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2003_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2004"
                    position={[12.596, -60.206, 25.552]}
                    rotation={[0, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2004_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2004_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2005"
                    position={[-23.733, 3.866, 14.476]}
                    rotation={[0, -1.046, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2005_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2005_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2006"
                    position={[-22.878, -92.959, 16.099]}
                    rotation={[0, -1.046, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2006_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2006_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2007"
                    position={[-22.703, -90.656, 16.402]}
                    rotation={[0, -1.046, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2007_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2007_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2008"
                    position={[-22.9, -87.14, 16.068]}
                    rotation={[0, -1.046, -1.57]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2008_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2008_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2009"
                    position={[-5.583, 107.465, 33.812]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2009_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2009_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2010"
                    position={[-7.47, 0.998, 25.23]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2010_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2010_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts_2011"
                    position={[42.089, 70.942, 7.627]}
                    rotation={[0, 0.304, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts_2011_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts_2011_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts001"
                    position={[28.069, -88.507, -1.406]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts001_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts003"
                    position={[8.212, -55.913, 25.372]}
                  >
                    <mesh
                      name="Exposed_inner_parts003_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts003_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts004"
                    position={[24.042, -156.254, 20.071]}
                    rotation={[0, 1.046, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts004_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts004_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts005"
                    position={[24.351, -159.582, 19.511]}
                    rotation={[0, 1.046, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts005_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts005_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts006"
                    position={[-22.886, -94.988, 16.096]}
                    rotation={[0, -1.046, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts006_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts006_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts007"
                    position={[-24.3, -87.592, 13.733]}
                    rotation={[0, -1.046, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts007_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts007_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts008"
                    position={[8.021, 107.4, 33.816]}
                  >
                    <mesh
                      name="Exposed_inner_parts008_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts008_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts009"
                    position={[-23.724, -165.618, 14.218]}
                    rotation={[0, -1.046, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts009_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts009_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts010"
                    position={[-38.323, 105.461, 7.484]}
                    rotation={[0, -0.304, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts010_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts010_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts011"
                    position={[-38.3, 111.171, 7.412]}
                    rotation={[0, -0.304, -Math.PI]}
                  >
                    <mesh
                      name="Exposed_inner_parts011_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts011_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts013"
                    position={[41.833, 77.361, 7.681]}
                    rotation={[0, 0.304, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts013_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts013_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Forward_Antenna"
                    position={[25.964, -169.388, 14.772]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Forward_Antenna_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Forward_Antenna_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Forward_Antenna001"
                    position={[25.889, -156.96, -13.503]}
                    rotation={[Math.PI / 2, 0, 2.126]}
                  >
                    <mesh
                      name="Forward_Antenna001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Forward_Antenna001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Forward_Antenna002"
                    position={[17.264, -185.167, -21.832]}
                    rotation={[Math.PI / 2, 0, 2.126]}
                  >
                    <mesh
                      name="Forward_Antenna002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Forward_Antenna002_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Forward_Antenna003"
                    position={[11.239, -180.019, 24.67]}
                    rotation={[Math.PI / 2, 0, 1.1]}
                  >
                    <mesh
                      name="Forward_Antenna003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Forward_Antenna003_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Front_Gun" position={[1.819, -155.808, 25.675]}>
                    <mesh
                      name="Front_Gun_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Front_Gun_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Front_gun_Housing"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Front_gun_Housing_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Front_gun_Housing_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Inner_front_intake"
                    position={[1.819, -98.377, 0.453]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Inner_front_intake_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Inner_front_intake_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Inner_front_intake_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Inner_front_intake_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Lower_support_guns002"
                    position={[21.772, 40.684, -16.093]}
                    rotation={[0, 0.472, Math.PI / 2]}
                  >
                    <mesh
                      name="Lower_support_guns002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Lower_support_guns002_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Main_ship_body_Engine_Flap_Back"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Main_ship_body_Engine_Flap_Back_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes
                          .Main_ship_body_Engine_Flap_Back_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Main_ship_body_top"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Main_ship_body_top_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_body_top_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Main_ship_body_top001"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Main_ship_body_top001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_body_top001_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Main_ship_body_top002"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Main_ship_body_top002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_body_top002_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Main_ship_bottom"
                    position={[1.819, -142.511, -23.756]}
                  >
                    <mesh
                      name="Main_ship_bottom_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_bottom_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Main_ship_bottom002"
                    position={[1.819, -142.511, -23.756]}
                  >
                    <mesh
                      name="Main_ship_bottom002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_bottom002_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Main_ship_window"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Main_ship_window_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_window_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Main_ship_window_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Main_ship_window_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Main_ship_window001"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Main_ship_window001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_window001_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Main_ship_window001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Main_ship_window001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Main_ship_window002"
                    position={[1.819, -155.808, 25.675]}
                  >
                    <mesh
                      name="Main_ship_window002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_window002_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Main_ship_window002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Main_ship_window002_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Main_ship_window003"
                    position={[1.819, -142.511, -23.756]}
                  >
                    <mesh
                      name="Main_ship_window003_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_window003_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Main_ship_window003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Main_ship_window003_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Main_ship_window004"
                    position={[1.819, -142.511, -23.756]}
                  >
                    <mesh
                      name="Main_ship_window004_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Main_ship_window004_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Main_ship_window004_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Main_ship_window004_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Mian_ship_belly"
                    position={[1.819, -142.511, -23.756]}
                  >
                    <mesh
                      name="Mian_ship_belly_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mian_ship_belly_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Mian_ship_belly001"
                    position={[1.819, -142.511, -23.756]}
                  >
                    <mesh
                      name="Mian_ship_belly001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mian_ship_belly001_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Mian_ship_belly001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Mian_ship_belly001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Scafholding_Side_1"
                    position={[28.617, -62.103, 1.518]}
                  >
                    <mesh
                      name="Scafholding_Side_1_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Scafholding_Side_1_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Scalfhoding_side_2"
                    position={[28.617, 66.176, 1.518]}
                  >
                    <mesh
                      name="Scalfhoding_side_2_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Scalfhoding_side_2_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Ship_side_brace"
                    position={[20.512, -69.754, 1.426]}
                  >
                    <mesh
                      name="Ship_side_brace_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Ship_side_brace_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Side_front_guns"
                    position={[29.14, -132.491, 14.168]}
                    rotation={[Math.PI / 2, 0, 0.13]}
                  >
                    <mesh
                      name="Side_front_guns_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Side_front_guns_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Support_side_guns"
                    position={[21.265, -141.51, 23.862]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Support_side_guns_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Support_side_guns_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Support_side_guns001"
                    position={[21.265, -105.567, 23.862]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Support_side_guns001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Support_side_guns001_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Support_side_guns002"
                    position={[21.933, 61.445, 32.303]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.9}
                  >
                    <mesh
                      name="Support_side_guns002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Support_side_guns002_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Support_side_guns003"
                    position={[21.933, 51.359, 32.303]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.9}
                  >
                    <mesh
                      name="Support_side_guns003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Support_side_guns003_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Support_side_guns004"
                    position={[21.933, 92.702, 32.495]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Support_side_guns004_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Support_side_guns004_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster_Fire"
                    position={[1.784, 165.738, 1.83]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Thruster_Fire_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Fire_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                  <group
                    name="Thruster_Fire001"
                    position={[16.928, 142.313, 13.266]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Thruster_Fire001_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Fire001_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                  <group
                    name="Thruster_Fire002"
                    position={[15.668, 142.313, -10.729]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Thruster_Fire002_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Fire002_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                </group>
                <group
                  name="Empty001"
                  position={[4728.326, 2320.981, -4895.908]}
                  rotation={[-1.586, -0.555, 0.004]}
                  scale={100}
                >
                  <group
                    name="Big_engine_parts016"
                    position={[0.229, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts016_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts016_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts016_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts016_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts017"
                    position={[-0.001, -3.282, -1.01]}
                    rotation={[0, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts017_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts017_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts017_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts017_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts018"
                    position={[0.01, -0.667, 0.79]}
                  >
                    <mesh
                      name="Big_engine_parts018_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts018_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts019"
                    position={[-0.228, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts019_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts019_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts019_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts019_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts020"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, 1.571, 0]}
                  >
                    <mesh
                      name="Big_engine_parts020_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts020_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts021"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, 1.571, 0]}
                  >
                    <mesh
                      name="Big_engine_parts021_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts021_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts022"
                    position={[-0.001, -3.282, 1.02]}
                    rotation={[Math.PI, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts022_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts022_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts022_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts022_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts023"
                    position={[-0.003, -1.897, -0.423]}
                    rotation={[1.489, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts023_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts023_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts024"
                    position={[-0.003, -1.902, 0.431]}
                    rotation={[-3.069, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts024_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts024_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts018"
                    position={[0.201, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts018_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts018_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts019"
                    position={[0.418, -2.113, -1.135]}
                    rotation={[0.754, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts019_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts019_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Exposed_inner_parts019_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts019_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts020"
                    position={[0.006, -1.063, 0.838]}
                    rotation={[-0.038, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts020_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts020_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts021"
                    position={[-0.199, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts021_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts021_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts022"
                    position={[0.179, -0.756, -0.957]}
                    rotation={[3.13, 0, -2.387]}
                  >
                    <mesh
                      name="Exposed_inner_parts022_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts022_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts023"
                    position={[-0.01, -0.972, -0.997]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts023_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts023_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Fighter_body" rotation={[0, 1.571, 0]}>
                    <mesh
                      name="Fighter_body_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_body_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Fighter_body_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_body_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Fighter_guns"
                    position={[0.171, -4.721, 1.358]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Fighter_guns_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_guns_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster"
                    position={[0, -0.056, 0.09]}
                    rotation={[0, 1.571, 0]}
                  >
                    <mesh
                      name="Thruster_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster_fire"
                    position={[0.189, 0.988, -0.357]}
                    rotation={[0, 1.571, 0]}
                  >
                    <mesh
                      name="Thruster_fire_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_fire_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                </group>
                <group
                  name="Empty002"
                  position={[-11027.519, 2442.086, 5052.052]}
                  rotation={[-Math.PI / 2, -0.248, 0]}
                  scale={100}
                >
                  <group
                    name="Big_engine_parts025"
                    position={[0.229, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts025_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts025_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts025_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts025_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts026"
                    position={[-0.001, -3.282, -1.01]}
                    rotation={[0, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts026_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts026_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts026_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts026_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts027"
                    position={[0.01, -0.667, 0.79]}
                  >
                    <mesh
                      name="Big_engine_parts027_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts027_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts028"
                    position={[-0.228, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts028_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts028_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts028_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts028_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts029"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts029_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts029_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts030"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts030_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts030_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts031"
                    position={[-0.001, -3.282, 1.02]}
                    rotation={[Math.PI, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts031_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts031_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts031_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts031_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts032"
                    position={[-0.003, -1.897, -0.423]}
                    rotation={[1.489, 1.571, 0]}
                  >
                    <mesh
                      name="Big_engine_parts032_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts032_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts033"
                    position={[-0.003, -1.902, 0.431]}
                    rotation={[-3.069, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts033_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts033_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts024"
                    position={[0.201, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts024_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts024_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts025"
                    position={[0.418, -2.113, -1.135]}
                    rotation={[0.754, 1.571, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts025_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts025_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Exposed_inner_parts025_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts025_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts026"
                    position={[0.006, -1.063, 0.838]}
                    rotation={[-0.038, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts026_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts026_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts027"
                    position={[-0.199, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts027_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts027_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts028"
                    position={[0.179, -0.756, -0.957]}
                    rotation={[3.13, 0, -2.387]}
                  >
                    <mesh
                      name="Exposed_inner_parts028_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts028_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts029"
                    position={[-0.01, -0.972, -0.997]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts029_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts029_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Fighter_body001" rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      name="Fighter_body001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Fighter_body001_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Fighter_body001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_body001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Fighter_guns001"
                    position={[0.171, -4.721, 1.358]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Fighter_guns001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_guns001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster_fire001"
                    position={[0.189, 0.988, -0.357]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Thruster_fire001_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_fire001_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                  <group
                    name="Thruster001"
                    position={[0, -0.056, 0.09]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Thruster001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                </group>
                <group
                  name="Empty003"
                  position={[-3352.462, -4480.335, -4895.908]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group
                    name="Big_engine_parts034"
                    position={[0.229, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts034_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts034_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts034_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts034_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts035"
                    position={[-0.001, -3.282, -1.01]}
                    rotation={[0, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts035_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts035_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts035_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts035_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts036"
                    position={[0.01, -0.667, 0.79]}
                  >
                    <mesh
                      name="Big_engine_parts036_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts036_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts037"
                    position={[-0.228, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts037_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts037_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts037_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts037_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts038"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts038_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts038_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts039"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts039_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts039_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts040"
                    position={[-0.001, -3.282, 1.02]}
                    rotation={[Math.PI, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts040_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts040_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts040_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts040_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts041"
                    position={[-0.003, -1.897, -0.423]}
                    rotation={[1.489, 1.571, 0]}
                  >
                    <mesh
                      name="Big_engine_parts041_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts041_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts042"
                    position={[-0.003, -1.902, 0.431]}
                    rotation={[-3.069, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts042_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts042_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts030"
                    position={[0.201, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts030_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts030_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts031"
                    position={[0.418, -2.113, -1.135]}
                    rotation={[0.754, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts031_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts031_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Exposed_inner_parts031_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts031_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts032"
                    position={[0.006, -1.063, 0.838]}
                    rotation={[-0.038, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts032_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts032_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts033"
                    position={[-0.199, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts033_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts033_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts034"
                    position={[0.179, -0.756, -0.957]}
                    rotation={[3.13, 0, -2.387]}
                  >
                    <mesh
                      name="Exposed_inner_parts034_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts034_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts035"
                    position={[-0.01, -0.972, -0.997]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts035_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts035_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Fighter_body002" rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      name="Fighter_body002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Fighter_body002_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Fighter_body002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_body002_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Fighter_guns002"
                    position={[0.171, -4.721, 1.358]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Fighter_guns002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_guns002_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster_fire002"
                    position={[0.189, 0.988, -0.357]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Thruster_fire002_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_fire002_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                  <group
                    name="Thruster002"
                    position={[0, -0.056, 0.09]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Thruster002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster002_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                </group>
                <group
                  name="Empty004"
                  position={[2730.01, 2354.95, 2571.513]}
                  rotation={[-Math.PI / 2, 0.28, 0]}
                  scale={100}
                >
                  <group
                    name="Big_engine_parts043"
                    position={[0.229, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts043_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts043_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts043_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts043_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts044"
                    position={[-0.001, -3.282, -1.01]}
                    rotation={[0, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts044_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts044_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts044_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts044_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts045"
                    position={[0.01, -0.667, 0.79]}
                  >
                    <mesh
                      name="Big_engine_parts045_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts045_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts046"
                    position={[-0.228, -2.283, 1.779]}
                    rotation={[-0.774, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts046_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts046_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts046_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts046_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts047"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, 1.571, 0]}
                  >
                    <mesh
                      name="Big_engine_parts047_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts047_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts048"
                    position={[0.473, -2.821, 1.323]}
                    rotation={[-1.56, 1.571, 0]}
                  >
                    <mesh
                      name="Big_engine_parts048_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts048_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts049"
                    position={[-0.001, -3.282, 1.02]}
                    rotation={[Math.PI, 0, -Math.PI / 2]}
                  >
                    <mesh
                      name="Big_engine_parts049_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts049_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Big_engine_parts049_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Big_engine_parts049_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Big_engine_parts050"
                    position={[-0.003, -1.897, -0.423]}
                    rotation={[1.489, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Big_engine_parts050_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts050_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Big_engine_parts051"
                    position={[-0.003, -1.902, 0.431]}
                    rotation={[-3.069, 1.571, 0]}
                  >
                    <mesh
                      name="Big_engine_parts051_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Big_engine_parts051_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts036"
                    position={[0.201, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts036_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts036_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts037"
                    position={[0.418, -2.113, -1.135]}
                    rotation={[0.754, 1.571, 0]}
                  >
                    <mesh
                      name="Exposed_inner_parts037_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts037_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Exposed_inner_parts037_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts037_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts038"
                    position={[0.006, -1.063, 0.838]}
                    rotation={[-0.038, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts038_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts038_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts039"
                    position={[-0.199, -2.191, -1.716]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts039_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts039_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts040"
                    position={[0.179, -0.756, -0.957]}
                    rotation={[3.13, 0, -2.387]}
                  >
                    <mesh
                      name="Exposed_inner_parts040_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts040_Ship_parts_0.geometry
                      }
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Exposed_inner_parts041"
                    position={[-0.01, -0.972, -0.997]}
                    rotation={[-2.389, 0, Math.PI / 2]}
                  >
                    <mesh
                      name="Exposed_inner_parts041_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Exposed_inner_parts041_Capitol_Main_Body_0
                          .geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Fighter_body003" rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      name="Fighter_body003_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Fighter_body003_Capitol_Main_Body_0.geometry
                      }
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Fighter_body003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_body003_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Fighter_guns003"
                    position={[0.171, -4.721, 1.358]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Fighter_guns003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fighter_guns003_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster_fire003"
                    position={[0.189, 0.988, -0.357]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Thruster_fire003_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_fire003_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                  <group
                    name="Thruster003"
                    position={[0, -0.056, 0.09]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Thruster003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster003_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                </group>
                <group
                  name="Support_Ship_empty"
                  position={[5269.648, -2527.462, -8656.735]}
                  rotation={[-Math.PI / 2, -0.003, 0]}
                  scale={100}
                >
                  <group name="Cube001" position={[-1.136, -30.777, 5.178]}>
                    <mesh
                      name="Cube001_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube001_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Cube005" position={[-0.27, -30.851, 6.324]}>
                    <mesh
                      name="Cube005_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube005_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cube006"
                    position={[5.151, 11.201, 1.959]}
                    rotation={[0, -0.381, 0]}
                  >
                    <mesh
                      name="Cube006_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube006_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cube007" position={[-1.029, 16.868, -17.675]}>
                    <mesh
                      name="Cube007_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube007_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cube007_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube007_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cube008" position={[-1.029, 16.868, -17.675]}>
                    <mesh
                      name="Cube008_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube008_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Cylinder007"
                    position={[-1.062, 22.048, -0.631]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder007_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder007_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder007_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder007_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder009"
                    position={[14.791, 30.016, 5.868]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder009_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder009_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder009_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder009_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder010"
                    position={[4.836, -32.693, -6.029]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder010_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder010_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder013"
                    position={[-1.029, -25.201, -0.598]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder013_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder013_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder013_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder013_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder018" position={[-0.288, -30.28, 6.943]}>
                    <mesh
                      name="Cylinder018_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder018_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder019" position={[-0.288, -31.378, 6.943]}>
                    <mesh
                      name="Cylinder019_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder019_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder023" position={[5.184, -29.174, 0.703]}>
                    <mesh
                      name="Cylinder023_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder023_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                    <mesh
                      name="Cylinder023_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder023_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Cylinder033" position={[-1.73, -30.975, 6.324]}>
                    <mesh
                      name="Cylinder033_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder033_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder036" position={[-1.729, -30.977, 7.098]}>
                    <mesh
                      name="Cylinder036_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder036_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder037"
                    position={[-1.029, 11.037, 5.707]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder037_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder037_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder037_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder037_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Plane001"
                    position={[-1.017, -21.09, 3.232]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Plane001_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane001_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Plane004"
                    position={[-1.017, -21.09, 3.232]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Plane004_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane004_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Plane004_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane004_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster_Fire003"
                    position={[-1.034, 36.456, -0.563]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Thruster_Fire003_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Fire003_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                  <group
                    name="Thruster_Fire004"
                    position={[14.805, 38.552, 5.899]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Thruster_Fire004_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Fire004_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                </group>
                <group
                  name="Support_Ship_empty001"
                  position={[-12646.669, -1844.51, -1620.637]}
                  rotation={[-Math.PI / 2, 0.121, 0]}
                  scale={100}
                >
                  <group name="Cube004" position={[-1.136, -30.777, 5.178]}>
                    <mesh
                      name="Cube004_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube004_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Cube009" position={[-0.27, -30.851, 6.324]}>
                    <mesh
                      name="Cube009_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube009_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cube011"
                    position={[5.151, 11.202, 1.959]}
                    rotation={[0, -0.381, 0]}
                  >
                    <mesh
                      name="Cube011_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube011_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cube012" position={[-1.029, 16.868, -17.675]}>
                    <mesh
                      name="Cube012_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube012_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cube012_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube012_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cube013" position={[-1.029, 16.868, -17.675]}>
                    <mesh
                      name="Cube013_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube013_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group
                    name="Cylinder046"
                    position={[4.836, -32.693, -6.029]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder046_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder046_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder047"
                    position={[-1.029, -25.201, -0.598]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder047_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder047_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder047_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder047_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder048" position={[5.184, -29.174, 0.703]}>
                    <mesh
                      name="Cylinder048_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder048_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                    <mesh
                      name="Cylinder048_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder048_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                  </group>
                  <group name="Cylinder049" position={[-1.73, -30.975, 6.324]}>
                    <mesh
                      name="Cylinder049_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder049_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder050" position={[-1.729, -30.977, 7.098]}>
                    <mesh
                      name="Cylinder050_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder050_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder051"
                    position={[-1.029, 11.037, 5.707]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder051_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder051_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder051_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder051_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder052" position={[-0.288, -30.28, 6.943]}>
                    <mesh
                      name="Cylinder052_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder052_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group name="Cylinder053" position={[-0.288, -31.378, 6.943]}>
                    <mesh
                      name="Cylinder053_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder053_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder054"
                    position={[-1.062, 22.048, -0.631]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder054_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder054_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder054_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder054_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Cylinder059"
                    position={[14.791, 30.016, 5.868]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Cylinder059_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder059_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Cylinder059_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder059_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Plane002"
                    position={[-1.017, -21.09, 3.232]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Plane002_Capitol_Main_Body_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane002_Capitol_Main_Body_0.geometry}
                      material={materials.Capitol_Main_Body}
                    />
                    <mesh
                      name="Plane002_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane002_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Plane003"
                    position={[-1.017, -21.09, 3.232]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      name="Plane003_Ship_parts_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane003_Ship_parts_0.geometry}
                      material={materials.Ship_parts}
                    />
                  </group>
                  <group
                    name="Thruster_Fire005"
                    position={[-1.034, 36.456, -0.563]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Thruster_Fire005_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Fire005_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                  <group
                    name="Thruster_Fire006"
                    position={[14.805, 38.552, 5.899]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Thruster_Fire006_Thruster_Fire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Thruster_Fire006_Thruster_Fire_0.geometry}
                      material={materials.Thruster_Fire}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Planet.glb");
