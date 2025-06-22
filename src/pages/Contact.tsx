import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h1>

        <p className="text-blue-200 mb-10 text-center">
          Reach out to us for any course inquiries, corporate training, or career guidance.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-blue-100">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block mb-2 text-blue-100">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-blue-100">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
