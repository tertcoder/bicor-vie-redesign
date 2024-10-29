import React from "react";
import Footer from "../sections/accueil/Footer";

const AdvantagesList = () => {
  const educationInsuranceAdvantages = [
    {
      id: 1,
      title: "Épargne dédiée",
      description:
        "Ce type de contrat permet de constituer une épargne spécifiquement destinée à financer l'éducation de vos enfants, que ce soit pour les frais de scolarité, les manuels ou les études supérieures.",
      svgIcon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
              stroke="#014D30"
              stroke-width="1.5"
            ></path>{" "}
            <path
              d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
              stroke="#014D30"
              stroke-width="1.5"
            ></path>{" "}
            <path
              d="M12 17.3333C13.1046 17.3333 14 16.5871 14 15.6667C14 14.7462 13.1046 14 12 14C10.8954 14 10 13.2538 10 12.3333C10 11.4129 10.8954 10.6667 12 10.6667M12 17.3333C10.8954 17.3333 10 16.5871 10 15.6667M12 17.3333V18M12 10V10.6667M12 10.6667C13.1046 10.6667 14 11.4129 14 12.3333"
              stroke="#014D30"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Sécurisation de l'avenir",
      description:
        "En anticipant les coûts liés à l'éducation, vous assurez à vos enfants les moyens d'accéder à des opportunités d'études, réduisant le stress financier à l'approche de ces dépenses.",
      svgIcon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M20.9099 11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198V6.72979C3.08984 5.90979 3.70986 4.97979 4.47986 4.66979L10.0498 2.38982C11.2998 1.87982 12.7098 1.87982 13.9598 2.38982L19.5298 4.66979C20.2898 4.97979 20.9199 5.90979 20.9199 6.72979L20.9099 11.1198Z"
              stroke="#014D30"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <g opacity="0.4">
              {" "}
              <path
                d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
                stroke="#014D30"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M12 12.5V15.5"
                stroke="#014D30"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Rendement potentiel",
      description:
        "Les contrats d'assurance éducation incluent souvent des options de capitalisation, permettant à votre épargne de croître avec le temps, augmentant ainsi le montant disponible pour les études de vos enfants.",
      svgIcon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M9.31993 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32993 13.28 9.31993 13.28Z"
              stroke="#014D30"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M8.5 4H1.5"
              stroke="#014D30"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M7.5 20H1.5"
              stroke="#014D30"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M4.5 12H1.5"
              stroke="#014D30"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Discipline d'épargne",
      description:
        "Souscrire à ce type d'assurance vous incite à épargner régulièrement, ce qui peut être bénéfique pour votre budget familial sur le long terme.",
      svgIcon: (
        <svg
          fill="#014D30"
          className="h-8 w-8"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>flower-heart</title>{" "}
            <path d="M23.301 17.203c-0.736-1.273-2.971-1.267-5.201 0.024-0.511 0.297-0.952 0.62-1.357 0.983l0.008-0.007v-1.915l5.83-6.47c1.118-1.009 1.817-2.464 1.817-4.082 0-0.439-0.052-0.866-0.149-1.275l0.008 0.037c-0.473-1.712-1.794-3.033-3.471-3.498l-0.035-0.008c-0.378-0.096-0.811-0.151-1.258-0.151-1.367 0-2.614 0.516-3.556 1.364l0.005-0.004c-0.86-0.745-1.989-1.199-3.225-1.199-1.384 0-2.634 0.569-3.531 1.486l-0.001 0.001c-0.883 0.866-1.444 2.057-1.492 3.379l-0 0.009c-0 0.015-0 0.032-0 0.050 0 1.508 0.637 2.867 1.656 3.824l0.003 0.003 5.899 6.535v5.077c-0.824-0.809-1.78-1.487-2.832-1.998l-0.064-0.028c-3.248-1.581-6.349-1.437-7.21 0.34-0.12 0.315-0.189 0.679-0.189 1.060 0 0.849 0.346 1.618 0.904 2.173l0 0c0.937 1.112 2.092 2.007 3.404 2.626l0.061 0.026c1.228 0.64 2.675 1.037 4.209 1.089l0.017 0h0.007c0.019 0 0.041 0 0.063 0 0.587 0 1.147-0.114 1.66-0.322l-0.030 0.011v3.657c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-7.421c0.224 0.056 0.482 0.088 0.747 0.089h0.001c1.184-0.051 2.275-0.406 3.209-0.989l-0.028 0.016c2.229-1.287 3.355-3.219 2.623-4.491zM15.187 24.568h-0.001c-0.179 0.367-0.787 0.586-1.629 0.586h-0.005c-1.312-0.055-2.533-0.396-3.619-0.96l0.048 0.023c-1.162-0.546-2.143-1.299-2.932-2.221l-0.010-0.012c-0.521-0.664-0.726-1.279-0.547-1.648 0.17-0.348 0.771-0.578 1.648-0.578 1.307 0.047 2.524 0.386 3.604 0.952l-0.046-0.022c1.162 0.546 2.142 1.299 2.932 2.221l0.010 0.012c0.521 0.664 0.726 1.281 0.547 1.648zM9.192 5.92c0.037-0.931 0.433-1.764 1.052-2.368l0.001-0.001c0.605-0.62 1.438-1.016 2.362-1.053l0.007-0 0.090-0.002c1.075 0.037 2.032 0.509 2.707 1.244l0.003 0.003c0.136 0.136 0.323 0.22 0.53 0.22s0.395-0.084 0.53-0.22v0c0.737-0.855 1.822-1.393 3.032-1.393 0.303 0 0.598 0.034 0.881 0.098l-0.027-0.005c1.194 0.329 2.116 1.25 2.44 2.42l0.006 0.024c0.059 0.256 0.092 0.551 0.092 0.854 0 1.21-0.538 2.295-1.388 3.028l-0.005 0.004-0.027 0.028-5.48 6.079-5.562-6.159c-0.762-0.696-1.24-1.692-1.245-2.8v-0.001zM19.93 20.397c-1.598 0.92-2.971 0.896-3.153 0.574-0.069-0.121-0.012-0.445 0.28-0.877 0.479-0.642 1.077-1.168 1.765-1.552l0.028-0.015c0.704-0.443 1.551-0.725 2.459-0.776l0.014-0.001c0.363 0 0.607 0.079 0.68 0.201 0.186 0.321-0.479 1.524-2.072 2.444z"></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Protection en cas d'imprévu",
      description:
        "Certains contrats incluent des garanties en cas de décès ou d'invalidité, assurant que l'épargne continue d'être alimentée même en cas de coup dur.",
      svgIcon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.4"> <path d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402" stroke="#014D30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7.5V16.5" stroke="#014D30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#014D30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 3V7H21" stroke="#014D30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 2L17 7" stroke="#014D30" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      ),
    },
    {
      id: 6,
      title: "Avantages fiscaux",
      description:
        "Dans certains pays, les versements effectués dans le cadre d'une assurance éducation peuvent bénéficier d'avantages fiscaux, ce qui rend l'épargne encore plus attractive.",
      svgIcon: (
        <svg className="w-8 h-8" fill="#014D30" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 412.035 412.035" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M349.615,247.399l-1.693-13.898c-0.611-5.011-4.879-8.79-9.928-8.79c-0.401,0-0.808,0.024-1.209,0.073l-3.683,0.449 c-1.54-1.836-3.793-2.946-6.363-2.946c-1.304,0-2.6,0.288-3.854,0.856l-79.456,36.008c-0.024,0.011-0.082,0.024-0.163,0.024 c-0.323,0-0.604-0.182-0.662-0.279l-21.359-35.003c-0.6-0.983-1.385-1.892-2.296-2.698l-4.781-46.864 c-0.3-2.94,0.542-8.066,1.767-10.755l13.167-28.917l41.252-21.402c5.296-2.748,12.916-8.031,17.349-12.027l49.215-44.381 c6.128-5.526,6.652-15.039,1.172-21.205l-0.362-0.408c-2.845-3.2-6.947-5.034-11.257-5.034c-3.668,0-7.196,1.328-9.934,3.739 l-51.022,44.935c-3.582,3.155-10.71,7.208-15.252,8.675L224.703,95.8l-43.373,3.143c-0.545,0.04-1.094,0.125-1.643,0.232 l-18.075-15.558c-3.618-3.114-8.614-9.616-10.691-13.913L121.334,8.491C118.842,3.333,113.51,0,107.751,0 c-2.249,0-4.419,0.492-6.451,1.462l-0.489,0.234c-7.445,3.557-10.653,12.528-7.15,19.999l28.137,60 c2.534,5.403,7.507,13.229,11.322,17.817l25.342,30.475c-4.985,13.108-10.493,29.761-11.885,42.432 c-1.293,11.766-1.242,45.988-1.216,53.287c-0.114,0.327-0.238,0.781-0.303,1.331L66.67,372.029 c-2.001,3.698-1.413,8.2,1.131,11.316c-0.458,0.518-0.88,1.072-1.227,1.688l-2.944,5.228c-2.706,4.804-0.999,10.914,3.805,13.621 l12.199,6.871c1.49,0.84,3.182,1.283,4.893,1.283c3.615,0,6.959-1.95,8.728-5.089l2.944-5.228c0.147-0.262,0.276-0.529,0.398-0.798 c1.32,0.623,2.756,0.966,4.217,0.966c3.574,0,6.884-1.935,8.638-5.049l73.605-130.684l44.036,40.785 c2.205,2.042,5.36,3.213,8.657,3.213c1.806,0,3.554-0.371,5.057-1.074l90.931-42.543c3.073-1.437,5.391-4.37,6.33-7.652 l2.831-0.345c2.646-0.322,5.012-1.66,6.66-3.767C349.208,252.663,349.938,250.045,349.615,247.399z M100.782,391.851 l-25.248-14.825c-0.049-0.029-0.095-0.189-0.067-0.24l75.754-140.118l24.293,22.5L100.782,391.851z M236.568,300.019 c-0.13,0.061-0.423,0.132-0.818,0.132c-0.875,0-1.615-0.321-1.862-0.55L159.494,230.7l50.263-3.165c1.027,0,2.534,0.885,2.952,1.57 l21.358,35.002c1.909,3.127,5.434,5.07,9.199,5.07c1.506,0,2.95-0.308,4.291-0.916l73.533-33.777 c-0.068,0.707,6.141,20.276,6.634,22.836c-0.075,0.065-0.15,0.121-0.225,0.155L236.568,300.019z"></path> <path d="M178.165,78.804c7.656,7.129,17.632,11.055,28.089,11.055c11.412,0,22.414-4.787,30.186-13.134 c7.505-8.06,11.421-18.561,11.028-29.568c-0.393-11.007-5.048-21.202-13.108-28.707c-7.656-7.129-17.632-11.055-28.089-11.055 c-11.411,0-22.414,4.787-30.185,13.134C160.592,37.169,161.525,63.311,178.165,78.804z"></path> </g> </g></svg>
      ),
    },
  ];

  return (
    <>
      <div className="">
        {/* Hero Section */}
        <div className="bg-education flex min-h-[800px] items-center justify-center bg-cover bg-center text-neutral">
          <div className="rounded-md bg-primary bg-opacity-70 p-8">
            <h1 className="mb-4 text-4xl font-bold">
              Pourquoi souscrire à une assurance éducation pour vos enfants ?
            </h1>
            <p className="text-lg">
              souscrire à une assurance éducation peut présenter plusieurs
              avantages.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mx-auto grid max-w-[1300px] gap-6 py-16 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {educationInsuranceAdvantages.map((advantage) => (
            <div
              key={advantage.id}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <div className="mb-4 text-primary">{advantage.svgIcon}</div>
              <h2 className="mb-2 mt-4 text-2xl font-bold text-primary">
                {advantage.title}
              </h2>
              <p className="text-textGray">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdvantagesList;
