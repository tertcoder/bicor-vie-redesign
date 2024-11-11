import Img from "../assets/dfdfd.jpg";
import Actualite from "../sections/accueil/Actualite";
import ProgressUi from "../ui/ProgressUi";
import React from "react";
import utls from "../utls"; // Assume 'utls' is an array of blog data with 'photo', 'title', and 'date'
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
export default function Actu() {
  const controls = useAnimationControls();
  const containerRef = React.useRef(null);
  const [cardWidth, setCardWidth] = React.useState(0);
  const [maxScroll, setMaxScroll] = React.useState(0);
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
    <>
      <div>
        <div className="bg-news flex min-h-[450px] w-full items-center justify-center">
          <div className="rounded-lg bg-primary/70 p-4">
            <h1 className="text-center text-4xl font-bold text-white">
              Découvre nos Actualités
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1300px] py-16">
        <div className="space-y-8">
          <p className="text-lg opacity-80">Actualités | 1min de lecture</p>
          <h1 className="font-serif text-4xl font-bold">
            Passation de Pouvoir à la Direction Générale de BICOR Vie &
            Capitalisation
          </h1>

          <p className="space-y-4 text-justify font-serif text-xl leading-10 first-letter:text-4xl">
            <img
              src={Img}
              alt="photo"
              className="float-left mb-2 mr-4 max-w-xl rounded shadow-md"
            />
            Bujumbura, le 10 octobre 2024 – BICOR Vie & Capitalisation, l’une
            des principales compagnies d'assurance du Burundi, entre dans une
            nouvelle ère avec la passation de pouvoir entre Monsieur Willy
            Fabrice NDAYISABA et Madame Mireille NIYONKURU. Après trois ans et
            trois mois de service à la tête de BICOR, Monsieur NDAYISABA a
            officiellement transféré ses responsabilités lors d'une cérémonie
            tenue au siège social de l'entreprise à Bujumbura, en présence de
            dignitaires, dont le Président du Conseil d’Administration de BICOR
            Vie & Capitalisation ainsi que celui de BICOR Assurance Général. Cet
            événement, marqué par une ambiance empreinte de sérénité et de
            confiance, a témoigné de l'importance de cette transition au sein de
            la direction. En prenant ses fonctions, Madame Mireille NIYONKURU a
            réaffirmé son engagement à poursuivre le développement de BICOR et à
            renforcer sa position sur le marché des assurances. Forte de son
            expertise dans le domaine, elle apportera un nouveau souffle à notre
            développement. L’ensemble des collaborateurs de BICOR Vie lui
            souhaite la bienvenue et se réjouit de travailler à ses côtés pour
            continuer d’élever notre entreprise vers de nouveaux sommets. Nous
            vous invitons à suivre cette nouvelle étape prometteuse et à rester
            connectés avec nous pour les évolutions à venir.
          </p>
        </div>
        <div className="mt-14 overflow-hidden" ref={containerRef}>
          <h1 className="font-serif text-4xl font-bold">Nos Archives</h1>
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
    </>
  );
}
