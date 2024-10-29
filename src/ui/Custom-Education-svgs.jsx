import React from 'react';
import { Calculator, Book, GraduationCap, PiggyBank, Users, Trophy } from 'lucide-react';
import Photo from "../assets/2.jpg"

const EducationInsurancePage = () => {
  const benefits = [
    {
      title: 'Épargne Régulière',
      description: 'Constituez une épargne systématique pour l\'avenir éducatif de vos enfants.',
      icon: <PiggyBank className="w-8 h-8 text-primary" />
    },
    {
      title: 'Flexibilité',
      description: 'Adaptable à tous les niveaux d\'éducation : primaire, secondaire et supérieur.',
      icon: <Book className="w-8 h-8 text-primary" />
    },
    {
      title: 'Capital Garanti',
      description: 'Capital disponible à la fin du contrat pour couvrir les frais d\'éducation.',
      icon: <Calculator className="w-8 h-8 text-primary" />
    }
  ];

  const educationLevels = [
    {
      level: 'Primaire',
      duration: '6-11 ans',
      coverage: 'Frais de scolarité, fournitures, activités parascolaires',
      monthlyFrom: '5.000.000 BIF'
    },
    {
      level: 'Secondaire',
      duration: '11-18 ans',
      coverage: 'Frais de scolarité, matériel spécialisé, voyages scolaires',
      monthlyFrom: '750.000 BIF'
    },
    {
      level: 'Supérieur',
      duration: '18+ ans',
      coverage: 'Frais universitaires, logement étudiant, matériel d\'études',
      monthlyFrom: '1.000.000BIF'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-notoFont">
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6 ">Assurance Education</h1>
              <p className="text-lg mb-8">
                L'assurance éducation permet aux parents d'épargner de manière régulière pour les frais d'éducation futurs de leurs enfants, qu'il s'agisse de l'école primaire, du secondaire ou des études supérieures.
              </p>
              <button className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                Commencer maintenant
              </button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={Photo}
                alt="Education"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
    

      {/* Coverage Levels */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary ">Niveaux de Couverture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {educationLevels.map((level, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-primary">{level.level}</h3>
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-textGray">
                    <span className="font-bold">Durée :</span> {level.duration}
                  </p>
                  <p className="text-sm text-textGray">
                    <span className="font-bold">Couverture :</span> {level.coverage}
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-textGray">À partir de</p>
                    <p className="text-2xl font-bold text-primary">{level.monthlyFrom}/mois</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary ">Avantages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{benefit.title}</h3>
                <p className="text-textGray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary ">Témoignages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <Users className="w-12 h-12 text-primary" />
                <div>
                  <p className="italic mb-4">"Grâce à l'assurance éducation, nous avons pu planifier sereinement les études supérieures de nos trois enfants."</p>
                  <p className="font-bold">Marie et Pierre D.</p>
                  <p className="text-sm text-textGray">Parents de 3 enfants</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <Trophy className="w-12 h-12 text-primary" />
                <div>
                  <p className="italic mb-4">"Un excellent moyen de préparer l'avenir tout en bénéficiant d'avantages fiscaux intéressants."</p>
                  <p className="font-bold">Sophie M.</p>
                  <p className="text-sm text-textGray">Mère de 2 enfants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 ">Préparez l'avenir de vos enfants</h2>
          <p className="mb-8 max-w-2xl mx-auto">Commencez dès aujourd'hui à construire un avenir brillant pour vos enfants avec notre assurance éducation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Souscrire maintenant
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all">
              Contactez un conseiller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInsurancePage;