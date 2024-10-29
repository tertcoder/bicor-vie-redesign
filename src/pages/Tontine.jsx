import React from "react";
import Photo from "../assets/7.jpg";

function TontinePage() {
  return (
    <div className="bg-neutral p-6 font-notoFont text-textDark sm:p-10 lg:p-20">
      {/* Title */}
      <h1 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">
        Tontine
      </h1>

      {/* Main Content Section */}
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
        {/* Image Placeholder */}
        <div className="w-full lg:w-1/2">
          <img
            src={Photo}
            alt="Tontine visual"
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Description */}
        <div className="w-full space-y-4 text-textGray lg:w-1/2">
          <p>
            La tontine consiste en un groupe de personnes qui cotisent
            régulièrement dans un fonds commun. À la fin d'une période
            déterminée, les fonds sont redistribués aux participants restants,
            souvent avec un bonus.
          </p>

          {/* Functionality Explanation */}
          <h2 className="text-2xl font-bold text-primary">Fonctionnement</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-bold">Cotisations:</span> Chaque participant
              verse une somme d'argent à intervalles réguliers.
            </li>
            <li>
              <span className="font-bold">Redistribution:</span> À la fin du
              terme de la tontine, les fonds accumulés sont répartis entre les
              participants encore en vie, sous forme de capital ou de rente.
            </li>
            <li>
              <span className="font-bold">Bonus:</span> Il peut y avoir des
              gains supplémentaires basés sur la performance du fonds.
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-10">
        <h3 className="mb-4 text-2xl font-bold text-primary">
          Why Choose Our Tontine?
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-secondary p-4 text-center shadow-lg">
            <h4 className="text-xl font-bold">Secure Investment</h4>
            <p className="text-textGray">
              Guaranteed safety of funds and professional management.
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4 text-center shadow-lg">
            <h4 className="text-xl font-bold">Flexible Plans</h4>
            <p className="text-textGray">
              Options for different levels of contributions and durations.
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4 text-center shadow-lg">
            <h4 className="text-xl font-bold">Bonus Opportunities</h4>
            <p className="text-textGray">
              Earn extra based on fund performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TontinePage;
