import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedHomeSection from "../components/AnimatedHomeSection";
const Hero = () => {
  const isMobileXs = useMediaQuery({ maxWidth: 360 });
  const isMobileSm = useMediaQuery({ minWidth: 361, maxWidth: 640 });
  const isMobileMd = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isDeviceLg = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDeviceXl = useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `${
    isMobileXs || isMobileSm
      ? `I help growing brands and 
startups gain an unfair 
advantage through 
premium results 
driven webs`
      : `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`
  }`;
  return (
    <section
      id="home"
      className="flex flex-col justify-end min-h-screen bg-black -z-30 relative"
    >
      <AnimatedHomeSection
        subTitle={"404 No Bugs Found"}
        title={"Manindra Roy"}
        text={text}
        textColor={"text-white"}
      />
      <figure
        className="absolute inset-0 -z-20"
        style={{ width: "100dvw", height: "100dvh" }}
      >
        <Canvas
          shadows
          camera={{
            position: [0, 0, isMobileMd ? -17.5 : isMobile ? -27.5 : -10],
            fov: 17.5,
            near: 1,
            far: isMobile ? 50 : 20,
          }}
        >
          <ambientLight intensity={0.5} />
          <Float
            speed={0.5}
            rotationIntensity={0}
            floatIntensity={isMobileMd ? 2 : isMobile ? 2.5 : 1}
          >
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={0.5}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={0.5}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={0.5}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={0.5}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
