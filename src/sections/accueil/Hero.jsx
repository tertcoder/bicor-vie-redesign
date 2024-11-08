import ArrowIcon from "../../assets/arrow.svg";
import umbrellaIcon from "../../assets/umbrella.svg";
import supportIcon from "../../assets/support.svg";
import bookIcon from "../../assets/book.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, {useState, useEffect} from "react";


function Hero() {
  const textSets = [
    // Original entries remain unchanged...
  
    // Protection Credit
    [
      {
        type: 'p',
        content: "Sécurisez vos Engagements",
        className: "text-lg font-semibold text-neutral max-sm:text-sm"
      },
      {
        type: 'h1',
        content: ["Protection", "Crédit"],
        className: "font-LibreBaskerville text-7xl text-neutral max-sm:text-6xl"
      },
      {
        type: 'h2',
        content: ["Préserver", "Vos Finances"],
        className: "font-LibreBaskerville text-[54px] text-white/70 max-sm:text-5xl max-[436px]:text-4xl"
      },
      {
        type: 'h3',
        content: ["Sérénité", "Au Quotidien"],
        className: "font-LibreBaskerville text-[42px] text-white/70 max-sm:text-4xl max-[436px]:text-3xl"
      }
    ],
  
    // Protection Sociale
    [
      {
        type: 'p',
        content: "Garantir Votre Bien-être",
        className: "text-lg font-semibold text-neutral max-sm:text-sm"
      },
      {
        type: 'h1',
        content: ["Protection", "Sociale"],
        className: "font-LibreBaskerville text-7xl text-neutral max-sm:text-6xl"
      },
      {
        type: 'h2',
        content: ["Sécurité", "Pour Vous et Vos Proches"],
        className: "font-LibreBaskerville text-[54px] text-white/70 max-sm:text-5xl max-[436px]:text-4xl"
      },
      {
        type: 'h3',
        content: ["Soutien", "Durable"],
        className: "font-LibreBaskerville text-[42px] text-white/70 max-sm:text-4xl max-[436px]:text-3xl"
      }
    ],
  
    // Assurance Education
    [
      {
        type: 'p',
        content: "Investir Dans l'Avenir de Vos Enfants",
        className: "text-lg font-semibold text-neutral max-sm:text-sm"
      },
      {
        type: 'h1',
        content: ["Assurance", "Éducation"],
        className: "font-LibreBaskerville text-7xl text-neutral max-sm:text-6xl"
      },
      {
        type: 'h2',
        content: ["Soutenir", "Leurs Rêves"],
        className: "font-LibreBaskerville text-[54px] text-white/70 max-sm:text-5xl max-[436px]:text-4xl"
      },
      {
        type: 'h3',
        content: ["Garantir", "Leur Avenir"],
        className: "font-LibreBaskerville text-[42px] text-white/70 max-sm:text-4xl max-[436px]:text-3xl"
      }
    ],
  
    // Tontine
    [
      {
        type: 'p',
        content: "Solidarité et Croissance Financière",
        className: "text-lg font-semibold text-neutral max-sm:text-sm"
      },
      {
        type: 'h1',
        content: ["Tontine"],
        className: "font-LibreBaskerville text-7xl text-neutral max-sm:text-6xl"
      },
      {
        type: 'h2',
        content: ["Construire", "Ensemble"],
        className: "font-LibreBaskerville text-[54px] text-white/70 max-sm:text-5xl max-[436px]:text-4xl"
      },
      {
        type: 'h3',
        content: ["Solidarité", "Et Partage"],
        className: "font-LibreBaskerville text-[42px] text-white/70 max-sm:text-4xl max-[436px]:text-3xl"
      }
    ]
  ];
  
  const [currentTextSetIndex, setCurrentTextSetIndex] = useState(0);// New state to toggle the key

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextSetIndex((prevIndex) => (prevIndex + 1) % textSets.length);
    }, 3000); // Change texts every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentTexts = textSets[currentTextSetIndex];



  return (
    <section>
      <div className="hero-gradient-bg flex min-h-screen w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          <div className="flex w-full items-center justify-between max-xl:px-4 max-[900px]:flex-col max-[900px]:text-center min-[900px]:-translate-y-20">
          <div className="space-y-2">
      {currentTexts.map((item, index) => (
        <motion.div
          key={`${currentTextSetIndex}-${index}`} // Unique key based on the current text set index and item index
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          exit={{ opacity: 0, y: -20 }} // Exit animation state
          transition={{ duration: 0.5, delay: index * 0.2 }} // Transition settings
        >
          {item.type === 'p' ? (
            <p className={item.className}>{item.content}</p>
          ) : (
            React.createElement(item.type, { className: item.className }, item.content.map((text, i) => (
              <span key={i} className={item.type === 'h1' ? 'font-bold' : 'italic'}>
                {text}
                {i < item.content.length - 1 && ' '}
              </span>
            )))
          )}
        </motion.div>
      ))}
    </div>
            <div>
              <a href="#services">
                <button className="flex items-center gap-3 rounded-xl bg-black px-3 py-3 text-lg text-neutral">
                  <span>Voir Nos Services</span>
                  <img src={ArrowIcon} alt="arrow" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1300px] items-stretch justify-center gap-4 bg-primary p-11 shadow max-xl:p-8 max-[900px]:flex-col min-[900px]:-translate-y-1/2 min-[900px]:rounded-3xl">
        <div className="container-bg-patern absolute left-0 top-0 -z-10 h-full w-full" />
        <div className="flex flex-1 flex-col items-center justify-between gap-2 rounded-xl border border-white/10 bg-white p-4">
          <div className="flex flex-col items-center gap-2">
            <div>
              <img src={umbrellaIcon} alt="Icon" />
            </div>
            <div>
              <p className="text-center text-3xl font-semibold text-primary">
                Types de contract offert par Bicor Vie
              </p>
            </div>
            <div>
              <p className="text-center text-xl text-primary">
                De quel type d’assurance vie avez-vous besoin ?
              </p>
            </div>
          </div>
          <div>
            <Link to="/insurance-contracts">
              <button className="flex items-center gap-3 rounded-xl bg-secondary px-12 py-3 text-lg text-neutral">
                <span>Voir Plus</span>
                <img
                  className="-rotate-90 transform"
                  src={ArrowIcon}
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-between rounded-xl border border-white/10 bg-white p-4">
          <div className="flex flex-col items-center gap-2">
            <div>
              <img src={supportIcon} alt="Icon" />
            </div>
            <div>
              <p className="text-center text-3xl font-semibold text-primary">
                Pourquoi souscrire un contrat de Bicor vie
              </p>
            </div>
            <div>
              <p className="text-center text-xl text-primary">
                Planifier l’avenir au moyen d’une assurance vie
              </p>
            </div>
          </div>
          <div>
            <Link to="/pourquoi-sous-crire">
              <button className="flex items-center gap-3 rounded-xl bg-secondary px-12 py-3 text-lg text-neutral">
                <span>Voir Plus</span>
                <img
                  className="-rotate-90 transform"
                  src={ArrowIcon}
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white p-2">
          <div>
            <img src={bookIcon} alt="Icon" />
          </div>
          <div>
            <p className="text-center text-3xl font-semibold text-primary">
              Pourquoi souscrire à une assurance éducation pour vos enfants ?
            </p>
          </div>
          <div>
            <p className="text-center text-xl text-primary">
              De quel type d’assurance vie avez-vous besoin ?
            </p>
          </div>
          <div>
            <Link to="/education-Insurance-Advantages">
              <button className="flex items-center gap-3 rounded-xl bg-secondary px-12 py-3 text-lg text-neutral">
                <span>Voir Plus</span>
                <img
                  className="-rotate-90 transform"
                  src={ArrowIcon}
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
