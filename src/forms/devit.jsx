import React, { useState } from 'react';

const DevisForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactLastName: '',
    contactFirstName: '',
    birthDate: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    insuranceType: 'automobile',
    coverage: '3mois',
    request: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg py-16">
      <h1 className="text-2xl font-libreFont text-primary mb-8">
        Formulaire de Devis d'Assurance
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Identity Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-libreFont text-primary border-b pb-2">
            Votre identité
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Nom de la société ou votre nom <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Nom"
                required
              />
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Nom du contact
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Nom du contact"
              />
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Prénom du contact
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Prénom du contact"
              />
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Date de Naissance
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+257 XX XX XX XX"
              />
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Mail
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="exemple@email.com"
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-libreFont text-primary border-b pb-2">
            Votre domicile
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Adresse (numéro et nom de la rue)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Adresse Physique"
              />
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Ville <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ville"
                required
              />
            </div>
          </div>
        </div>

        {/* Insurance Type Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-libreFont text-primary border-b pb-2">
            Type d'Assurance
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Type d'Assurance
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="automobile">Assurance Automobile</option>
                <option value="habitation">Assurance Habitation</option>
                <option value="sante">Assurance Santé</option>
                <option value="voyage">Assurance Voyage</option>
              </select>
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-2">
                Couverture de l'Assurance <span className="text-accent">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="coverage"
                    value="3mois"
                    className="mr-2"
                    defaultChecked
                  />
                  <span className="font-notoFont text-textGray">3mois</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="coverage"
                    value="6mois"
                    className="mr-2"
                  />
                  <span className="font-notoFont text-textGray">6 mois</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="coverage"
                    value="12mois"
                    className="mr-2"
                  />
                  <span className="font-notoFont text-textGray">12 mois</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block font-notoFont text-textGray mb-1">
                Veuillez rédiger votre demande
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
                placeholder="Votre message..."
              ></textarea>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-primary hover:bg-accent text-white font-notoFont px-8 py-3 rounded-lg transition-colors"
          >
            OBTENIR VOTRE DEVIS D'ASSURANCE
          </button>
        </div>
      </form>
    </div>
  );
};

export default DevisForm;