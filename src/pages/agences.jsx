import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgencyCard = ({ name, address, phone, email, hours }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <h3 className=" text-xl text-primary mb-4">{name}</h3>
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
        <p className=" text-textGray">{address}</p>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
        <p className=" text-textGray">{phone}</p>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
        <p className=" text-textGray">{email}</p>
      </div>
      <div className="flex items-start gap-3">
        <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
        <div className=" text-textGray">
          {hours.map((hour, index) => (
            <p key={index}>{hour}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const NosAgences = () => {
  const agencies = [
    {
      name: "Agence Principale Bujumbura",
      address: "Avenue de l'Uprona, Quartier Rohero I, Bujumbura Mairie",
      phone: "+257 22 27 59 99",
      email: "bujumbura@example.com",
      hours: [
        "Lundi - Vendredi: 7h30 - 17h30",
        "Samedi: 8h00 - 12h00",
        "Dimanche: Fermé"
      ]
    },
    {
      name: "Agence Gitega",
      address: "Avenue des Pionniers, Quartier Nyamugari, Gitega",
      phone: "+257 22 40 32 12",
      email: "gitega@example.com",
      hours: [
        "Lundi - Vendredi: 7h30 - 17h30",
        "Samedi: 8h00 - 12h00",
        "Dimanche: Fermé"
      ]
    },
    {
      name: "Agence Ngozi",
      address: "Avenue de l'Indépendance, Quartier Commercial, Ngozi",
      phone: "+257 22 30 21 45",
      email: "ngozi@example.com",
      hours: [
        "Lundi - Vendredi: 7h30 - 17h30",
        "Samedi: 8h00 - 12h00",
        "Dimanche: Fermé"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-primary">
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Nos Agences
          </h1>
          <p className=" text-lg md:text-xl text-white max-w-2xl">
            Découvrez nos agences à travers le Burundi et trouvez celle qui vous convient le mieux.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className=" text-2xl md:text-3xl text-primary mb-4">
            À Votre Service Partout au Burundi
          </h2>
          <p className=" text-textGray">
            Nos agences sont stratégiquement situées dans les principales villes du Burundi pour vous offrir le meilleur service possible. 
            Chaque agence dispose d'une équipe d'experts prête à vous accompagner dans vos projets.
          </p>
        </div>

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agencies.map((agency, index) => (
            <AgencyCard key={index} {...agency} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className=" text-xl md:text-2xl text-primary mb-4">
            Besoin de Plus d'Informations ?
          </h3>
          <Link to="/contact">
          <button className="bg-secondary hover:bg-accent text-primary hover:text-white  px-8 py-3 rounded-lg transition-colors">
            Contactez-nous
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NosAgences;