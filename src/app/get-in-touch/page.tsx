export default function Contact() {
  return (
    <div className="z-50 mx-auto mt-16 max-w-screen-lg px-5 lg:px-0">
      <h1 className="text-2xl font-semibold text-lime-600 md:text-center md:text-5xl">
        Get In Touch
      </h1>
      <p className="mt-5 text-base text-slate-900 md:mx-auto md:mt-6 md:max-w-xl md:text-center">
        I am always excited to collaborate on new and meaningful projects.
        Whether you have a question, a project idea, or just want to say hi —
        feel free to reach out using the form below. I will get back to you as
        soon as possible!
      </p>
      <div className="mt-10 md:mx-auto md:max-w-sm">
        <form action="/contact" method="POST">
          <fieldset className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-base text-slate-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
                required
                className="rounded-sm border border-slate-200 p-3 text-base text-slate-900 focus:outline focus:outline-2 focus:outline-lime-500"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="phone" className="text-base text-slate-900">
                Mobile
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10,15}"
                placeholder="Enter mobile"
                className="rounded-sm border border-slate-200 p-3 text-base text-slate-900 focus:outline focus:outline-2 focus:outline-lime-500"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="message" className="text-base text-slate-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                required
                className="rounded-sm border border-slate-200 p-3 text-base text-slate-900 focus:outline focus:outline-2 focus:outline-lime-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="hover:bg-primary-300 inline-block w-full rounded-md bg-lime-600 px-10 py-4 font-semibold text-white shadow-lg transition-all"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
