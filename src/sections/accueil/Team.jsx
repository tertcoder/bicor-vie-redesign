import Photo1 from "../../assets/about.jpg";
import Photo2 from "../../assets/IMG-20241027-WA0041.jpg";
import Photo3 from "../../assets/chef-de-service-commercial.jpg";
import Photo4 from "../../assets/directeur_technique.jpg";
export default function Team() {
  return (
    <div className="mx-auto my-16 w-full max-w-[1300px] space-y-8 xxs:px-4 lg:px-0">
      <div className="flex w-full items-center gap-4">
        <svg
          width="29"
          height="30"
          viewBox="0 0 29 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="14.3701"
            y="0.859619"
            width="20"
            height="20"
            transform="rotate(45.9311 14.3701 0.859619)"
            fill="#014D30"
          />
        </svg>
        <p className="text-[32px] font-bold text-primary">
          Comité de Direction
        </p>
      </div>
      <div className="grid w-full grid-cols-3 items-center justify-center gap-12 xxs:flex-col xxs:justify-center md:flex-row md:justify-between">
        <div className="col-span-1">
          <div className="h-[300px] w-full overflow-hidden rounded-xl">
            <img
              src={Photo1}
              alt="photo"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="w-full text-center">
            <p className="text-xl font-bold"> Niyonkuru Mireille</p>
            <p className="text-lg">DIRECTRICE GENERALE</p>
          </div>
        </div>
        
        <div className="col-span-1">
          <div className="h-[300px] w-full overflow-hidden rounded-xl">
            <img
              src={Photo3}
              alt="photo"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="w-full text-center">
            <p className="text-xl font-bold">Eric NSHIMIRIMANA</p>

            <p className="text-lg">CHEF DU SERVICE TECHNIQUE</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="h-[300px] w-full overflow-hidden rounded-xl">
            <img
              src={Photo4}
              alt="photo"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="w-full text-center">
            <p className="text-xl font-bold">Odilon GASHIRAHAMWE</p>
            <p className="text-lg">CHEF DU SERVICE COMMERCIAL</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
