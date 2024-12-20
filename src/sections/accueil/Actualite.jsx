import { motion, useAnimationControls } from "framer-motion";
import Img from "../../assets/img-20241011-wa0017.jpg";
import ProgressUi from "../../ui/ProgressUi";
import React from "react";
import utls from "../../utls"; // Assume 'utls' is an array of blog data with 'photo', 'title', and 'date'
import { Link } from "react-router-dom";

export default function Actualite() {
  const controls = useAnimationControls();
  const containerRef = React.useRef(null);
  const [cardWidth, setCardWidth] = React.useState(0);
  const [maxScroll, setMaxScroll] = React.useState(0);

  // Set card width and max scroll distance
  React.useEffect(() => {
    const calculateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;
        const cardElement = containerRef.current.querySelector(".card");
        setCardWidth(cardElement ? cardElement.offsetWidth : 0);
        setMaxScroll(-(contentWidth - containerWidth));
      }
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, []);

  React.useEffect(() => {
    const animateCarousel = async () => {
      while (true) {
        for (
          let currentPosition = 0;
          currentPosition >= maxScroll;
          currentPosition -= cardWidth
        ) {
          // Animate each step to move to the next card's position
          await controls.start(
            { x: currentPosition },
            { duration: 1.5, ease: "easeInOut" },
          );
          await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds between moves
        }
        // Reset to start position
        controls.set({ x: 0 });
      }
    };

    if (maxScroll < 0) {
      animateCarousel();
    }
  }, [maxScroll, controls, cardWidth]);

  return (
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
        <div className="flex w-full overflow-hidden rounded-b-3xl rounded-t-lg">
          <div className="w-full max-w-xl overflow-hidden bg-white">
            <img src={Img} alt="photo" className="h-full w-full" />
          </div>

          <div className="flex w-full flex-1 items-center justify-center space-y-4 bg-white p-8">
            <div className="space-y-6">
              <div className="flex w-full items-start justify-between">
                <div className="w-full">
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
               <div className="mt-4">
               <Link to="/actu" className="mt-4">
                  <button className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-lg font-semibold text-neutral">
                    <span>En savoir plus</span>
                  </button>
                </Link>
               </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel for blog items */}
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex items-baseline gap-8 py-4"
            animate={controls}
            style={{ width: "max-content" }}
          >
            {utls.map((blog, index) => (
              <motion.div
                key={index}
                className="card w-[445px] flex-shrink-0 overflow-hidden rounded-b-3xl rounded-t-lg"
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
  );
}
