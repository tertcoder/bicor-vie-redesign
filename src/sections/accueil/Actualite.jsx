import { motion, useAnimationControls } from "framer-motion";
import Img from "../../assets/img-20241011-wa0017.jpg";
import ProgressUi from "../../ui/ProgressUi";
import React from "react";
import utls from "../../utls";

export default function Actualite() {
  const controls = useAnimationControls();
  const containerRef = React.useRef(null);
  const [maxScroll, setMaxScroll] = React.useState(0);

  React.useEffect(() => {
    const calculateMaxScroll = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;
        setMaxScroll(-(contentWidth - containerWidth));
      }
    };

    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);

    return () => {
      window.removeEventListener("resize", calculateMaxScroll);
    };
  }, [utls]);

  React.useEffect(() => {
    let isAnimating = true;

    const animateCarousel = async () => {
      const totalSteps = utls.length - 3;
      const stepSize = maxScroll / totalSteps;

      while (isAnimating) {
        // Start position
        await controls.start({ x: 0 }, { duration: 1.5, ease: "easeInOut" });
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Move through each step
        for (let i = 1; i <= totalSteps && isAnimating; i++) {
          await controls.start(
            { x: stepSize * i }, 
            { duration: 1.5, ease: "easeInOut" }
          );
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
    };

    if (maxScroll < 0) {
      animateCarousel();
    }

    return () => {
      isAnimating = false;
    };
  }, [maxScroll, controls, utls]);

  return (
    <>
      <div className="min-h-screen w-full bg-textGray py-20 xxs:px-4 lg:px-0">
        <div className="mx-auto max-w-[1300px] space-y-8">
          <div className="flex w-full items-center gap-4">
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="14.3701"
                y="0.859619"
                width="20"
                height="20"
                transform="rotate(45.9311 14.3701 0.859619)"
                fill="white"
              />
            </svg>
            <p className="text-[32px] font-bold text-neutral">Actualité</p>
          </div>
          <div className="w-full overflow-hidden rounded-b-3xl rounded-t-lg">
            <div className="max-h-[536px] w-full overflow-hidden">
              <img src={Img} alt="photo" />
            </div>
            <ProgressUi />
            <div className="w-full space-y-4 bg-white p-7">
              <div className="flex w-full items-start justify-between">
                <div className="max-w-[709px]">
                  <p className="text-3xl font-bold text-textGray">
                    Passation de Pouvoir à la Direction Générale de BICOR Vie &
                    Capitalisation
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-textGray/70">
                    13 Octobre 2024
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl text-textGray">
                  Bujumbura, le 10 octobre 2024 – BICOR Vie & Capitalisation,
                  l'une des principales compagnies d'assurance du Burundi, entre
                  dans une nouvelle ère avec la passation de pouvoir entre
                  Monsieur Willy F.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex items-baseline gap-8 py-4"
              animate={controls}
              style={{ width: "max-content" }}
            >
              {utls.map((blog, index) => (
                <motion.div
                  key={index}
                  className="w-[445px] flex-shrink-0 overflow-hidden rounded-b-3xl rounded-t-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="max-h-[300px] w-full overflow-hidden">
                    <img src={blog.photo} alt="photo" className="w-full" />
                  </div>
                  <ProgressUi />
                  <div className="w-full space-y-4 bg-white p-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="max-w-[330px]">
                        <p className="text-xl font-semibold text-textGray">
                          {blog.title}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-textGray/70">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}