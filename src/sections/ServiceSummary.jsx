import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  const isMobileXs = useMediaQuery({ maxWidth: 360 });
  const isMobileSm = useMediaQuery({ maxWidth: 640 });
  const isMobileMd = useMediaQuery({ maxWidth: 768 });
  const isDeviceLg = useMediaQuery({ maxWidth: 1024 });
  const isDeviceXl = useMediaQuery({ maxWidth: 1280 });
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: isMobileXs || isMobileSm ? 350 : 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: isMobileXs || isMobileSm ? -400 : -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      delay: 2,
      xPercent: isMobileXs || isMobileSm ? 400 : 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: isMobileXs || isMobileSm ? -350 : -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section
      className={`mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive`}
    >
      <div
        id="title-service-1"
        className={`${isMobileXs || isMobileSm ? "-translate-x-40 text-2xl" : ""}`}
      >
        <p>Architucture</p>
      </div>
      <div
        id="title-service-2"
        className={`flex items-center justify-center gap-3 ${
          isMobileXs || isMobileSm ? "translate-x-46 text-2xl" : "translate-x-16"
        }`}
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className={`flex items-center justify-center gap-3 ${isMobileXs || isMobileSm?"-translate-x-49 text-2xl":"-translate-x-48"}`}
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className={`${isMobileXs || isMobileSm?"translate-x-44 text-2xl":"translate-x-48"}`}>
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
