import React from 'react';

const SouscriptionForm = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 font-notoFont ">
      <form className="space-y-4">
        {/* Nom et prénom section */}
        <div className="mb-4">
          <label className="block text-textGray text-sm mb-2">
            Nom et prénom *
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            required
          />
        </div>

        {/* Date et lieu de naissance section */}
        <div className="mb-4">
          <label className="block text-textGray text-sm mb-2">
            Date et lieu de naissance *
          </label>
          <div className="flex gap-4">
            <input
              type="date"
              className="w-1/3 p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              className="w-2/3 p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Lieu"
              required
            />
          </div>
        </div>

        {/* Sex/Gender section */}
        <div className="mb-4">
          <label className="block text-textGray text-sm mb-2">Sexe *</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-2" required />
              <span>M</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" className="mr-2" />
              <span>F</span>
            </label>
          </div>
        </div>

        {/* Civil state section */}
        <div className="mb-4">
          <label className="block text-textGray text-sm mb-2">État Civil *</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="civilState" className="mr-2" required />
              <span>Marié(e)</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="civilState" className="mr-2" />
              <span>Célibataire</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="civilState" className="mr-2" />
              <span>Veuf</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="civilState" className="mr-2" />
              <span>Divorcé(e)</span>
            </label>
          </div>
        </div>

        {/* Address section */}
        <div className="mb-4">
          <label className="block text-textGray text-sm mb-2">
            Adresse *
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            required
          />
        </div>

        {/* Additional fields */}
        <div className="space-y-4">
          {['Ville *', 'N° CIN *', 'Téléphone *', 'Profession *', 'Religion *', 'Niveau d\'études *'].map((label) => (
            <div key={label} className="mb-4">
              <label className="block text-textGray text-sm mb-2">
                {label}
              </label>
              <input
                type={label.includes('Téléphone') ? 'tel' : 'text'}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                required
              />
            </div>
          ))}
        </div>

        {/* Status section */}
        <div className="mb-4">
          <label className="block text-textGray text-sm mb-2">Status *</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="status" className="mr-2" required />
              <span>Simple</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="status" className="mr-2" />
              <span>Trésorerie</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="status" className="mr-2" />
              <span>Standing</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="status" className="mr-2" />
              <span>Famille</span>
            </label>
          </div>
        </div>

        {/* Submit button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded hover:bg-opacity-90 transition-colors w-full"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default SouscriptionForm;