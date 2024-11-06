import Brarudi from "../../assets/brarudi_bicor.jpg";
import Sogea from "../../assets/sogeasatom_bicor.jpg";
import Toyota from "../../assets/toyota_bicor.jpg";
import Bancobu from "../../assets/bancobu_bicor.jpg";
import Engen from "../../assets/eigen_bicor23.jpg";
import Interpetrol from "../../assets/interpetrol_bicor.jpg";
import KenyaR from "../../assets/kenya_re.jpg";
export default function Patners() {
  const partners = [
    {
      id: 1,
      name: "Brarudi",
      logo: Brarudi,
      alt: "Brarudi logo",
    },
    {
      id: 2,
      name: "Sogea",
      logo: Sogea,
      alt: "Sogea logo",
    },
    {
      id: 3,
      name: "Toyota",
      logo: Toyota,
      alt: "Toyota logo",
    },
    {
      id: 4,
      name: "Bancobu",
      logo: Bancobu,
      alt: "Bancobu logo",
    },
    {
      id: 5,
      name: "Engen",
      logo: Engen,
      alt: "Engen logo",
    },
    {
      id: 6,
      name: "Interpetrol",
      logo: Interpetrol,
      alt: "Interpetrol logo",
    },
    {
      id: 7,
      name: "KenyaR",
      logo: KenyaR,
      alt: "KenyaR logo",
    },
  ];
  return (
    <>
      <section className="w-full bg-neutral py-16">
        <div className="container mx-auto px-4">
          {/* Title and Description */}
          <div className="mb-12 text-center">
            <h2 className="text-[32px] font-semibold text-primary">
              Nos Partenaires de Confiance
            </h2>
            <p className="mx-auto max-w-2xl text-base text-textGray/80">
              Nous collaborons avec des entreprises leaders pour vous offrir les
              meilleures solutions d'assurance. Découvrez nos partenaires qui
              nous font confiance.
            </p>
          </div>

          {/* Partners Logo Grid */}
          <div className="flex flex-wrap items-center justify-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-auto w-32 max-w-full grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
