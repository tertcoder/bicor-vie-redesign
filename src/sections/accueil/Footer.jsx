import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-primary py-12 text-neutral">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Bicor Vie</h3>
            <p className="text-neutral/80">
              Votre partenaire de confiance depuis plus de 20 ans.
            </p>
            <img src={Logo} alt="logo" className="w-56" />
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Services</h3>
            <ul className="space-y-2">
             
                <li>Protection Crédit</li>
             
             
                <li>Pension/Retraite</li>
             
             
                <li>Protection Social</li>
             
             
                <li>Assurance Education</li>
             
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li>bicorvie@bicor.com</li>
              <li>(+257) 22 28 08 10</li>
              <li>(+257) 68 70 78 06</li>
              <li>11.Av. de Grece, Bujumbura-Burundi</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-secondary">
                LinkedIn
              </a>
              <a href="#" className="transition-colors hover:text-secondary">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-secondary">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral/20 pt-8 text-center">
          <p>&copy; 2024 Bicor Vie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
