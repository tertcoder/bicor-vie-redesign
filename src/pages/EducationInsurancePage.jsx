import React from "react";
import {
  Calculator,
  Book,
  GraduationCap,
  PiggyBank,
  Users,
  Trophy,
} from "lucide-react";
import Photo from "../assets/2.jpg";

const EducationInsurancePage = () => {
  const benefits = [
    {
      title: "Épargne Régulière",
      description:
        "Constituez une épargne systématique pour l'avenir éducatif de vos enfants.",
      icon: <PiggyBank className="h-8 w-8 text-primary" />,
    },
    {
      title: "Flexibilité",
      description:
        "Adaptable à tous les niveaux d'éducation : primaire, secondaire et supérieur.",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
    {
      title: "Capital Garanti",
      description:
        "Capital disponible à la fin du contrat pour couvrir les frais d'éducation.",
      icon: <Calculator className="h-8 w-8 text-primary" />,
    },
  ];

  const educationLevels = [
    {
      level: "Primaire",
      duration: "6-11 ans",
      coverage: "Frais de scolarité, fournitures, activités parascolaires",
      monthlyFrom: "50€",
    },
    {
      level: "Secondaire",
      duration: "11-18 ans",
      coverage: "Frais de scolarité, matériel spécialisé, voyages scolaires",
      monthlyFrom: "75€",
    },
    {
      level: "Supérieur",
      duration: "18+ ans",
      coverage: "Frais universitaires, logement étudiant, matériel d'études",
      monthlyFrom: "100€",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-notoFont">
      {/* Hero Section */}
      <div className="relative bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 font-libreFont text-4xl font-bold">
                Assurance Education
              </h1>
              <p className="mb-8 text-lg">
                L'assurance éducation permet aux parents d'épargner de manière
                régulière pour les frais d'éducation futurs de leurs enfants,
                qu'il s'agisse de l'école primaire, du secondaire ou des études
                supérieures.
              </p>
              <button className="rounded-full bg-secondary px-8 py-3 font-bold text-primary transition-all hover:bg-opacity-90">
                Commencer maintenant
              </button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <img
                src={Photo}
                alt="Education"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-libreFont text-3xl font-bold text-primary">
            Fonctionnement
          </h2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Cotisations</h3>
                  <p className="text-textGray">
                    Les parents versent des cotisations régulières sur une
                    période déterminée.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    Capital à la maturité
                  </h3>
                  <p className="text-textGray">
                    À la fin du contrat, un capital est disponible pour couvrir
                    les frais d'éducation.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="space-y-4">
                <h3 className="mb-4 text-xl font-bold">
                  Simulateur de cotisation
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Âge de l'enfant
                    </label>
                    <input
                      type="number"
                      className="w-full rounded-lg border px-4 py-2 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Durée d'épargne souhaitée
                    </label>
                    <select className="w-full rounded-lg border px-4 py-2 focus:border-primary focus:outline-none">
                      <option>5 ans</option>
                      <option>10 ans</option>
                      <option>15 ans</option>
                    </select>
                  </div>
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-white transition-all hover:bg-opacity-90">
                    Calculer ma cotisation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Levels */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-libreFont text-3xl font-bold text-primary">
            Niveaux de Couverture
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {educationLevels.map((level, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-primary">
                    {level.level}
                  </h3>
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-textGray">
                    <span className="font-bold">Durée :</span> {level.duration}
                  </p>
                  <p className="text-sm text-textGray">
                    <span className="font-bold">Couverture :</span>{" "}
                    {level.coverage}
                  </p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-textGray">À partir de</p>
                    <p className="text-2xl font-bold text-primary">
                      {level.monthlyFrom}/mois
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-libreFont text-3xl font-bold text-primary">
            Avantages
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-textGray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-libreFont text-3xl font-bold text-primary">
            Témoignages
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Users className="h-12 w-12 text-primary" />
                <div>
                  <p className="mb-4 italic">
                    "Grâce à l'assurance éducation, nous avons pu planifier
                    sereinement les études supérieures de nos trois enfants."
                  </p>
                  <p className="font-bold">Marie et Pierre D.</p>
                  <p className="text-sm text-textGray">Parents de 3 enfants</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Trophy className="h-12 w-12 text-primary" />
                <div>
                  <p className="mb-4 italic">
                    "Un excellent moyen de préparer l'avenir tout en bénéficiant
                    d'avantages fiscaux intéressants."
                  </p>
                  <p className="font-bold">Sophie M.</p>
                  <p className="text-sm text-textGray">Mère de 2 enfants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-libreFont text-3xl font-bold">
            Préparez l'avenir de vos enfants
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Commencez dès aujourd'hui à construire un avenir brillant pour vos
            enfants avec notre assurance éducation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-secondary px-8 py-3 font-bold text-primary transition-all hover:bg-opacity-90">
              Souscrire maintenant
            </button>
            <button className="rounded-full border-2 border-white px-8 py-3 font-bold transition-all hover:bg-white hover:text-primary">
              Contactez un conseiller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInsurancePage;
