import Img from "../../assets/img-20241011-wa0017.jpg";
import ProgressUi from "../../ui/ProgressUi";
import utls from "../../utls";
export default function Actualite() {
  return (
    <>
      <div className="xxs:px-4 lg:px-0 min-h-screen w-full bg-textGray py-20">
        <div className="mx-auto max-w-[1300px] space-y-8">
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
                fill="white"
              />
            </svg>
            <p className="text-[32px] font-bold text-neutral">Actualite</p>
          </div>
          <div className="w-full overflow-hidden rounded-b-3xl rounded-t-lg">
            <div className="max-h-[536px] w-full overflow-hidden">
              <img src={Img} alt="photo" />
            </div>
            <ProgressUi />
            <div className="w-full space-y-4 bg-white p-7">
              <div className="flex w-full items-start justify-between">
                <div className="max-w-[709px]">
                  <p className="text-3xl font-bold text-textGray">
                    Passation de Pouvoir à la Direction Générale de BICOR Vie &
                    Capitalisation
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-textGray/70">
                    13 Octobre 2024
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl text-textGray">
                  Bujumbura, le 10 octobre 2024 – BICOR Vie & Capitalisation,
                  l’une des principales compagnies d'assurance du Burundi, entre
                  dans une nouvelle ère avec la passation de pouvoir entre
                  Monsieur Willy F.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex h-full w-[1500px] items-baseline gap-8 py-4">
              {utls.map((blog) => (
                <div className="max-w-[445px] flex-1 overflow-hidden rounded-b-3xl rounded-t-lg">
                  <div className="max-h-[300px] w-full overflow-hidden">
                    <img src={blog.photo} alt="photo" className="w-full" />
                  </div>
                  <ProgressUi />
                  <div className="w-full space-y-4 bg-white p-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="max-w-[330px]">
                        <p className="text-xl font-semibold text-textGray">
                          {blog.title}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-textGray/70">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
