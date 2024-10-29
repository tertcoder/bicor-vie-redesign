import React from "react";
import Photo from "../assets/5.jpg"

const InsurancePage = () => {
  const services = [
    {
      title: "Assurance maladie",
      description:
        "Couvre les frais de santé liés aux soins médicaux, hospitalisations et médicaments.",
      icon: "🏥",
    },
    {
      title: "Assurance chômage",
      description:
        "Offre un revenu de remplacement aux personnes qui perdent leur emploi.",
      icon: "💼",
    },
    {
      title: "Retraite",
      description:
        "Garantit un revenu pour les personnes âgées après la cessation de leur activité professionnelle.",
      icon: "👴",
    },
    {
      title: "Allocations familiales",
      description:
        "Aide financière pour soutenir les familles avec des enfants à charge.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Aide sociale",
      description:
        "Prestations destinées aux personnes en situation de précarité ou d'exclusion sociale.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <div className="relative bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6  text-4xl font-bold">
                Votre protection sociale,
                <br />
                notre priorité
              </h2>
              <p className="mb-8 text-lg">
                La protection sociale comprend divers programmes et prestations
                destinés à protéger les individus contre les risques sociaux.
              </p>
              <button className="rounded-full bg-secondary px-8 py-3 font-bold text-primary transition-all hover:bg-opacity-90">
                En savoir plus
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src={Photo}
                alt="Protection sociale"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center  text-3xl font-bold text-primary">
            Nos Types de protection sociale
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="text-textGray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}

    </div>
  );
};

export default InsurancePage;
