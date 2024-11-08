export default function ContactForm() {
  return (
    <div className="h-screen w-full">
      <div className="bg-pourquoi h-80 w-full"/>
      <div className="h-screen my-20">
        <form class="mx-auto  w-full max-w-5xl rounded-lg bg-neutral p-8">
          <div class="mb-6">
            <label for="fullName" class="mb-2 block font-medium text-textGray">
              Full Name *
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
              Email Address *
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
              Phone
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
              Company Name *
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
              Your Message *
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
            class="rounded-md bg-primary px-6 py-3 font-medium text-neutral transition-colors duration-300 hover:bg-secondary w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
