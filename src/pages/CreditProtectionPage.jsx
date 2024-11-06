import React from 'react';
import Photo from "../assets/3.jpg"

const CreditProtectionPage = () => {
  return (
    <div>
      
      {/* Main Content */}
      <main>
        {/* Hero section remains the same */}
        <section className="py-16 bg-neutral">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl sm:text-5xl  font-bold mb-6 text-primary">
                  Protection Crédit
                </h1>
                <p className="text-lg text-textGray mb-8">
                  La protection crédit est un type d'assurance qui sécurise le remboursement d'un prêt en cas de circonstances imprévues.
                </p>
                <button className="bg-primary text-neutral px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                  En savoir plus
                </button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="bg-primary/5 rounded-lg p-8">
                    <img
                      src={Photo}
                      alt="Credit Protection"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid with SVG Icons */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl  font-bold text-primary mb-12 text-center">
              Principaux aspects de la Protection Crédit
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 - Protection Décès */}
              <div className="bg-neutral p-8 rounded-lg shadow-lg border border-primary/10">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"/>
                    <path d="M12 8v8"/>
                    <path d="M8 12h8"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Couverture en cas de décès</h3>
                <p className="text-textGray">
                  Si l'emprunteur décède, l'assurance prend en charge le remboursement du crédit, protégeant ainsi les proches de la dette.
                </p>
              </div>

              {/* Feature Card 2 - Protection Invalidité */}
              <div className="bg-neutral p-8 rounded-lg shadow-lg border border-primary/10">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <path d="M12 11c1.5 0 2.5-1 2.5-2.5S13.5 6 12 6s-2.5 1-2.5 2.5S10.5 11 12 11z"/>
                    <path d="M12 11v7"/>
                    <path d="M9 18h6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Protection en cas d'invalidité</h3>
                <p className="text-textGray">
                  Elle couvre également les situations d'invalidité temporaire ou permanente, garantissant que les paiements continuent d'être effectués.
                </p>
              </div>

              {/* Feature Card 3 - Tranquillité */}
              <div className="bg-neutral p-8 rounded-lg shadow-lg border border-primary/10">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Tranquillité d'esprit</h3>
                <p className="text-textGray">
                  Souscrire une protection crédit permet de gérer les risques financiers liés à un emprunt, offrant ainsi une sécurité à l'emprunteur et à sa famille.
                </p>
              </div>

              {/* Feature Card 4 - Flexibilité */}
              <div className="bg-neutral p-8 rounded-lg shadow-lg border border-primary/10">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 21v-7"/>
                    <path d="M4 10V3"/>
                    <path d="M12 21v-9"/>
                    <path d="M12 8V3"/>
                    <path d="M20 21v-5"/>
                    <path d="M20 12V3"/>
                    <path d="M1 14h6"/>
                    <path d="M9 8h6"/>
                    <path d="M17 16h6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Flexibilité des options</h3>
                <p className="text-textGray">
                  Les contrats peuvent être personnalisés en fonction des besoins spécifiques de l'emprunteur et de la nature du crédit.
                </p>
              </div>

              {/* Feature Card 5 - Conditions */}
              <div className="bg-neutral p-8 rounded-lg shadow-lg border border-primary/10">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Conditions d'adhésion</h3>
                <p className="text-textGray">
                  Souvent, il est possible d'ajouter cette protection lors de la souscription du crédit, ce qui simplifie le processus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action section remains the same */}
        <section className="bg-primary text-neutral py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl  font-bold mb-6">
              Protégez votre avenir financier
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              En résumé, la protection crédit est une solution efficace pour sécuriser un emprunt et assurer la tranquillité d'esprit face aux imprévus.
            </p>
            <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Demander un devis
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default CreditProtectionPage;