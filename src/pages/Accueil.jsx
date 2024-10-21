import logo from "../assets/logo.png";

function Accueil() {
  return (
    <div>
      <div className="py-2">
        <div className="mx-auto mb-2 flex w-full max-w-screen-xl flex-row items-center justify-between">
          <img src={logo} className="h-24" />
          <div className="space-x-4">
            <a href="#" className="linkStyle active">
              Accueil
            </a>
            <a href="#" className="linkStyle">
              A Propos de Nous
            </a>
            <a href="#" className="linkStyle">
              Nos Produits
            </a>
            <a href="#" className="linkStyle">
              Publications
            </a>
            <a href="#" className="linkStyle">
              Nos Agences
            </a>
            <a href="#" className="linkStyle">
              Contact
            </a>
          </div>
          <button className="rounded-xl bg-primary p-4 font-semibold text-neutral">
            Realiser un Devis
          </button>
        </div>
        <div className="grid w-full grid-cols-3">
          <div className="h-0.5 bg-secondary"></div>
          <div className="h-0.5 bg-primary"></div>
          <div className="h-0.5 bg-accent"></div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
