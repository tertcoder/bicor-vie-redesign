import React from "react";
import Photo from "../assets/5.jpg";

const HeartShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path
      d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const HeartPeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path
      d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 17C3 19.2091 4.79086 21 7 21C9.20914 21 11 19.2091 11 17C11 14.7909 9.20914 13 7 13C4.79086 13 3 14.7909 3 17Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const SocialProtectionSection = () => {
  const protectionTypes = [
    {
      title: "Assurance maladie",
      description:
        "Couvre les frais de santé liés aux soins médicaux, hospitalisations et médicaments.",
      icon: <HeartShieldIcon />,
    },
    {
      title: "Assurance chômage",
      description:
        "Offre un revenu de remplacement aux personnes qui perdent leur emploi.",
      icon: <HeartPeopleIcon />,
    },
    {
      title: "Retraite",
      description:
        "Garantit un revenu pour les personnes âgées après la cessation de leur activité professionnelle.",
      icon: <HeartShieldIcon />,
    },
    {
      title: "Allocations familiales",
      description:
        "Aide financière pour soutenir les familles avec des enfants à charge.",
      icon: <HeartPeopleIcon />,
    },
    {
      title: "Aide sociale",
      description:
        "Prestations destinées aux personnes en situation de précarité ou d'exclusion sociale.",
      icon: <HeartPeopleIcon />,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <div className="bg-primary px-4 py-12 text-neutral md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-3xl md:text-5xl">
            Protection Social
          </h1>
          <p className="max-w-2xl font-notoFont text-lg md:text-xl">
            La protection sociale comprend divers programmes et prestations
            destinés à protéger les individus contre les risques sociaux, tels
            que la maladie, le chômage, la vieillesse, et la maternité.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Featured Image */}
        <div className="mb-12">
          <div className=" h-[400px] w-full overflow-hidden rounded-lg">
            <img
              src={Photo}
              alt="Social Protection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Protection Types Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {protectionTypes.map((type, index) => (
            <div key={index} className="p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 text-primary">{type.icon}</div>
              <h3 className="mb-3 text-xl text-primary">
                {type.title}
              </h3>
              <p className="font-notoFont text-textGray">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 rounded-lg bg-primary/5 p-8">
          <h2 className="mb-4 text-2xl text-primary">
            Besoin d'assistance?
          </h2>
          <p className="mb-6 font-notoFont text-textGray">
            Nos conseillers sont à votre disposition pour vous guider dans vos
            démarches de protection sociale.
          </p>
          <button className="rounded-lg bg-primary px-8 py-3 font-notoFont text-neutral transition-opacity hover:bg-opacity-90">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProtectionSection;
