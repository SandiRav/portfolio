export default function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto px-5 z-50 mt-16 lg:px-0">
      <h1 className="text-2xl md:text-5xl text-lime-600 font-semibold md:text-center">
        Get In Touch
      </h1>
      <p className="mt-5 md:mt-6 text-base text-slate-900 md:max-w-xl md:mx-auto md:text-center">
        I'm always excited to collaborate on new and meaningful projects.
        Whether you have a question, a project idea, or just want to say hi —
        feel free to reach out using the form below. I'll get back to you as
        soon as possible!
      </p>
      <div className="mt-10 md:max-w-sm md:mx-auto">
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
                className="text-base text-slate-900 p-3 border border-slate-200 focus:outline focus:outline-2 focus:outline-lime-500 rounded-sm"
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
                className="text-base text-slate-900 p-3 border border-slate-200 focus:outline focus:outline-2 focus:outline-lime-500 rounded-sm"
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
                className="text-base text-slate-900 p-3 border border-slate-200 focus:outline focus:outline-2 focus:outline-lime-500 rounded-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-block py-4 px-10 bg-lime-600 text-white font-semibold rounded-md transition-all hover:bg-primary-300 shadow-lg"
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
