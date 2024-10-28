import Logo from "../../assets/logo.png";
import FBIcon from "../../assets/fb.svg"
export default function Footer() {
  return (
    <div className="min-h-80 w-full bg-textGray py-20 ">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="flex xxs:flex-col justify-between md:flex-row xxs:px-4 md: px-0 gap-8">
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-2xl text-white">Bicor Vie</p>
            </div>
            <div>
              <img src={Logo} alt="logo" className="w-32" />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-2xl text-white">Lien Rapide</p>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-primary">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary">
                    A Propos de Nous
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary">
                    Nos Produits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary">
                    Nos Agences
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-2xl text-white">Contactez-Nous</p>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:info@bicorvie.com"
                      className="text-white/70 hover:text-primary"
                    >
                      11, Avenue de Grèce, Bujumbura,Burundi
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@bicorvie.com"
                      className="text-white/70 hover:text-primary"
                    >
                      bicorvie@bicorvie.bi
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+22133874321"
                      className="text-white/70 hover:text-primary"
                    >
                      Fixe:+25722222820
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/company/bicorvie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a
                      href="https://www.twitter.com/bicorvie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-primary"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#eaececef"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="">
                    <img src={FBIcon} alt="aa" className="w-6"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
