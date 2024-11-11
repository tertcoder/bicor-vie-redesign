export default function ContactForm() {
  return (
    <div className="h-screen min-h-screen w-full">
      <div className="bg-pourquoi w-full" />
      <div className="my-20 h-screen">
        <form class="mx-auto w-full max-w-5xl rounded-lg bg-neutral p-8">
          <div className="pb-8 text-xl font-bold">
            <h1>Veuillez entrer les informations suivantes</h1>
          </div>
          <div class="mb-6">
            <label for="fullName" class="mb-2 block font-medium text-textGray">
              Nom et Prenom *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              class="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div class="mb-6">
            <label for="email" class="mb-2 block font-medium text-textGray">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div class="mb-6">
            <label for="phone" class="mb-2 block font-medium text-textGray">
              Numero de telephone (facultatif)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div class="mb-6">
            <label
              for="companyName"
              class="mb-2 block font-medium text-textGray"
            >
              Nom de l'entreprise (facultatif)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              class="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>

          <div class="mb-6">
            <label for="message" class="mb-2 block font-medium text-textGray">
              Votre message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="h-24 w-full resize-none rounded-md border border-gray-300 px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full rounded-md bg-primary px-6 py-3 font-medium text-neutral transition-colors duration-300 hover:bg-secondary"
          >
            envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
