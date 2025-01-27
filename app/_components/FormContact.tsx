// import { submitContactForm } from "../_lib/action";

// function FormContact() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#100D25] p-6 rounded-lg">
//       <div className=" text-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <h3 className="text-lg text-gray-400 uppercase tracking-wide">
//           Get in Touch
//         </h3>
//         <h1 className="text-4xl font-bold mb-6">
//           Contact<span className="text-purple-400">.</span>
//         </h1>

//         <form action={submitContactForm} className="space-y-4">
//           <div>
//             <label className="block font-semibold mb-1">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="w-full px-4 py-3 rounded bg-[#16162d] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-semibold mb-1">Your E-mail</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your e-mail"
//               className="w-full px-4 py-3 rounded bg-[#16162d] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block font-semibold mb-1">Your Message</label>
//             <textarea
//               name="message"
//               placeholder="What do you want to say?"
//               rows={4}
//               className="w-full px-4 py-3 rounded bg-[#16162d] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-500 transition py-3 text-white font-semibold rounded-lg"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default FormContact;

import { submitContactForm } from "../_lib/action";

function FormContact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 rounded-lg transition-colors duration-300">
      <div className="text-gray-900 dark:text-gray-100 p-8 rounded-lg shadow-lg dark:shadow-gray-800 w-full max-w-lg bg-white dark:bg-gray-800 transition-colors duration-300">
        <h3 className="text-lg text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Get in Touch
        </h3>
        <h1 className="text-4xl font-bold mb-6">
          Contact<span className="text-purple-500 dark:text-purple-400">.</span>
        </h1>

        <form action={submitContactForm} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Your E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              className="w-full px-4 py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Your Message</label>
            <textarea
              name="message"
              placeholder="What do you want to say?"
              rows={4}
              className="w-full px-4 py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400 transition py-3 text-white font-semibold rounded-lg shadow-md dark:shadow-gray-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormContact;
