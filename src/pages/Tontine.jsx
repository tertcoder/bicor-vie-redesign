import React from "react";
import { Info, Users, DollarSign, Award } from "lucide-react";
import Photo from "../assets/tontine-1.jpg";

const TontinePage = () => {
  return (
    <div className="min-h-screen bg-neutral font-notoFont">
      {/* Hero Section */}
      <div className="relative bg-primary py-16 text-neutral">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Tontine Insurance
              </h1>
              <p className="mb-8 text-lg">
                Participez à une approche collective de l'épargne avec notre
                système de tontine moderne et sécurisé.
              </p>
              <a href="#plus">
                <button className="rounded-md bg-secondary px-8 py-3 font-semibold text-primary transition-all hover:bg-opacity-90">
                  En savoir plus
                </button>
              </a>
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
      <div className="container mx-auto px-4 py-16" id="plus">
        {/* Definition Section */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-primary">
            Qu'est-ce qu'une Tontine?
          </h2>
          <p className="text-lg text-textGray">
            La tontine consiste en un groupe de personnes qui cotisent
            régulièrement dans un fonds commun. À la fin d'une période
            déterminée, les fonds sont redistribués aux participants restants,
            souvent avec un bonus.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Cotisations */}
          <div className="rounded-lg border border-gray-100 bg-neutral p-6 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <DollarSign className="text-neutral" size={24} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-primary">
              Cotisations
            </h3>
            <p className="text-textGray">
              Chaque participant verse une somme d'argent à intervalles
              réguliers.
            </p>
          </div>

          {/* Redistribution */}
          <div className="rounded-lg border border-gray-100 bg-neutral p-6 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Users className="text-neutral" size={24} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-primary">
              Redistribution
            </h3>
            <p className="text-textGray">
              À la fin du terme de la tontine, le fonds accumulés sont répartis
              entre les participants qui sont encore en vie, généralement sous
              forme de capital ou de rente.
            </p>
          </div>

          {/* Bonus */}
          <div className="rounded-lg border border-gray-100 bg-neutral p-6 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Award className="text-neutral" size={24} />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-primary">Bonus</h3>
            <p className="text-textGray">
              Il peut y avoir des gains supplémentaires basés sur la performance
              du fonds.
            </p>
          </div>
        </div>

        {/* CTA Section */}
      </div>
      <div className="bg-primary p-8 text-neutral md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Prêt à Commencer?</h2>
          <p className="mb-8 text-lg">
            Rejoignez notre communauté de tontine et commencez à construire
            votre avenir financier dès aujourd'hui.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-md bg-secondary px-8 py-3 font-semibold text-primary transition-all hover:bg-opacity-90">
              Realiser un Devis
            </button>
            <button className="rounded-md border-2 border-neutral px-8 py-3 font-semibold text-neutral transition-all hover:bg-white hover:text-primary">
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TontinePage;
