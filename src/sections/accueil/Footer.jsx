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
                <li>Assurance vie</li>
                <li>Protection entreprise</li>
                <li>Épargne retraite</li>
                <li>Solutions sur mesure</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact</h3>
              <ul className="space-y-2">
                <li>contact@bicorvie.com</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, France</li>
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
