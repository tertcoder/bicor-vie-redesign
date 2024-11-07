import React from 'react';
import Photo from "../assets/retraite.png"

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path 
      d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 11V15" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <circle 
      cx="12" 
      cy="12" 
      r="9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 6V12L16 14" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const PiggyBankIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path 
      d="M19 5C19 3.89543 18.1046 3 17 3C15.8954 3 15 3.89543 15 5M19 5C19 6.10457 18.1046 7 17 7C15.8954 7 15 6.10457 15 5M19 5H15M7 8C4.23858 8 2 10.2386 2 13C2 15.7614 4.23858 18 7 18M7 8H13M7 8V18M7 18H13M13 8C15.7614 8 18 10.2386 18 13C18 15.7614 15.7614 18 13 18" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="10" 
      cy="12" 
      r="1" 
      fill="currentColor"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path 
      d="M5 12H19M19 12L12 5M19 12L12 19" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const PensionSection = () => {
  const benefits = [
    {
      title: "Sécurité financière",
      description: "Elle garantit un revenu régulier après la cessation d'activité professionnelle, permettant de maintenir un niveau de vie confortable.",
      icon: <ShieldIcon />
    },
    {
      title: "Préparation à l'avenir",
      description: "Anticiper les besoins financiers pour la retraite aide à éviter les difficultés économiques pendant cette période.",
      icon: <ClockIcon />
    },
    {
      title: "Économie d'impôt",
      description: "Dans certains pays, les cotisations à des régimes de retraite peuvent être déductibles d'impôt, offrant des avantages fiscaux.",
      icon: <PiggyBankIcon />
    }
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <div className="bg-primary text-neutral px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className=" text-3xl md:text-5xl mb-6">
            Pension/Retraite
          </h1>
          <p className=" text-lg md:text-xl max-w-2xl">
            La pension ou retraite est un aspect crucial de la planification financière. Voici un aperçu de son importance et des types de produits associés.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Image Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden h-[300px]">
            <img 
              src={Photo}
              alt="Retirement Planning"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Financial Security"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className=" text-xl text-primary mb-3">
                {benefit.title}
              </h3>
              <p className=" text-textGray">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="bg-primary text-neutral px-8 py-3 rounded-lg  flex items-center mx-auto hover:bg-opacity-90 transition-opacity">
            En savoir plus
            <span className="ml-2">
              <ArrowRightIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PensionSection;