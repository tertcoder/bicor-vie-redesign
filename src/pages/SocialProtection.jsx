import React from "react";
import Photo from "../assets/people-office-work-day.jpg";
import { ChartColumnDecreasing , Gift, HandCoins } from "lucide-react";


const SocialProtectionSection = () => {
  const protectionTypes = [
    {
      title: "Souscription",
      description:
        "L’assuré sélectionne un contrat d'assurance et définit le montant du capital à verser en cas de décès. Il doit également désigner ses bénéficiaires (ayants droit).",
      icon: <ChartColumnDecreasing />, // ShieldHeart represents protection and security.
    },
    {
      title: "Paiement de la prime",
      description:
        "En échange de la garantie offerte, l'assuré s'engage à payer une prime unique qui lui assure une couverture annuelle.",
      icon: <Gift />, // DollarSign represents payment and financial commitment.
    },
    {
      title: "Versement du capital",
      description:
        "En cas de décès de l’assuré, le capital est versé aux bénéficiaires désignés. Cela leur permet de faire face aux dépenses liées au deuil, de maintenir leur niveau de vie ou de régler d'éventuelles dettes.",
      icon: <HandCoins />, // Gift represents the final payout or benefit to the beneficiaries.
    },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="mb-6 text-4xl font-bold text-neutral sm:text-5xl">
                Protection Social
              </h1>
              <p className="mb-8 text-lg text-neutral">
              L'assurance protection sociale est un mécanisme de prévoyance qui permet à l'assuré de protéger ses proches contre les aléas de la vie, notamment le risque de décès. En cas de décès de l'assuré, un capital est versé aux bénéficiaires désignés, assurant ainsi une protection financière pour sa famille ou ses proches.
              </p>
              <a href="#plus">
                <button className="rounded-lg bg-secondary px-8 py-3 font-bold text-primary transition-colors hover:bg-opacity-90">
                  En savoir plus
                </button>
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-lg bg-primary/5 p-8">
                  <img
                    src={Photo}
                    alt="Credit Protection"
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-12">
      

        {/* Protection Types Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" id="plus">
          {protectionTypes.map((type, index) => (
            <div key={index} className="p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 text-primary">{type.icon}</div>
              <h3 className="mb-3 text-xl text-primary">{type.title}</h3>
              <p className="font-notoFont text-textGray">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 rounded-lg bg-primary/5 p-8">
          <h2 className="mb-4 text-2xl text-primary">Besoin d'assistance?</h2>
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
