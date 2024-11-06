import React from 'react';
import { Info, Users, DollarSign, Award } from 'lucide-react';
import Photo from "../assets/7.jpg"

const TontinePage = () => {
  return (
    <div className="min-h-screen bg-neutral font-notoFont">
      {/* Hero Section */}
      <div className="relative bg-primary text-neutral py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tontine Insurance
              </h1>
              <p className="text-lg mb-8">
                Participez à une approche collective de l'épargne avec notre système de tontine moderne et sécurisé.
              </p>
              <button className="bg-secondary text-primary px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                En savoir plus
              </button>
            </div>
            <div className="relative">
              <img
                src={Photo}
                alt="Tontine concept illustration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Definition Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Qu'est-ce qu'une Tontine?
          </h2>
          <p className="text-textGray text-lg">
            La tontine consiste en un groupe de personnes qui cotisent régulièrement dans un fonds commun. À la fin d'une période déterminée, les fonds sont redistribués aux participants restants, souvent avec un bonus.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Cotisations */}
          <div className="bg-neutral p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="text-neutral" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Cotisations</h3>
            <p className="text-textGray">
              Chaque participant verse une somme d'argent à intervalles réguliers.
            </p>
          </div>

          {/* Redistribution */}
          <div className="bg-neutral p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="text-neutral" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Redistribution</h3>
            <p className="text-textGray">
              À la fin du terme de la tontine, le fonds accumulés sont répartis entre les participants qui sont encore en vie, généralement sous forme de capital ou de rente.
            </p>
          </div>

          {/* Bonus */}
          <div className="bg-neutral p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Award className="text-neutral" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Bonus</h3>
            <p className="text-textGray">
              Il peut y avoir des gains supplémentaires basés sur la performance du fonds.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-neutral rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Commencer?
            </h2>
            <p className="text-lg mb-8">
              Rejoignez notre communauté de tontine et commencez à construire votre avenir financier dès aujourd'hui.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-secondary text-primary px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                S'inscrire
              </button>
              <button className="border-2 border-neutral text-neutral px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-all">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TontinePage;