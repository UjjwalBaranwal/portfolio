import { submitContactForm } from "../_lib/action";

function FormContact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#100D25] p-6 rounded-lg">
      <div className=" text-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h3 className="text-lg text-gray-400 uppercase tracking-wide">
          Get in Touch
        </h3>
        <h1 className="text-4xl font-bold mb-6">
          Contact<span className="text-purple-400">.</span>
        </h1>

        <form action={submitContactForm} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded bg-[#16162d] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Your E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              className="w-full px-4 py-3 rounded bg-[#16162d] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Your Message</label>
            <textarea
              name="message"
              placeholder="What do you want to say?"
              rows={4}
              className="w-full px-4 py-3 rounded bg-[#16162d] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 transition py-3 text-white font-semibold rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormContact;
