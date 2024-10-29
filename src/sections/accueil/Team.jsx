import Photo1 from "../../assets/IMG-20241027-WA0037.jpg";
import Photo2 from "../../assets/IMG-20241027-WA0041.jpg";
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
        <p className="text-[32px] font-bold text-primary">Comité de Direction</p>
      </div>
      <div className="flex w-full items-center md:justify-between xxs:flex-col xxs:justify-center md:flex-row">
        <div className="max-w-[350px] flex-1 space-y-4">
          <div className="h-[500px] w-full overflow-hidden rounded-xl">
            <img
              src={Photo1}
              alt="photo"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="w-full text-center">
            <p className="text-xl font-bold">Directrice Generale</p>
            <p className="text-lg">Niyonkuru Mireille</p>
          </div>
        </div>
        <div className="max-w-[350px] flex-1 space-y-4">
          <div className="h-[500px] w-full overflow-hidden rounded-xl">
            <img
              src={Photo2}
              alt="photo"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="w-full text-center">
            <p className="text-xl font-bold">Raoul Kayuku</p>
            <p className="text-lg">Auditeur Interne</p>
          </div>
        </div>
        <div className="max-w-[350px] flex-1 space-y-4">
          <div className="h-[500px] w-full overflow-hidden rounded-xl">
            <img
              src={Photo2}
              alt="photo"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="w-full text-center">
            <p className="text-xl font-bold">Raoul Kayuku</p>
            <p className="text-lg">Auditeur Interne</p>
          </div>
        </div>
      </div>
    </div>
  );
}
