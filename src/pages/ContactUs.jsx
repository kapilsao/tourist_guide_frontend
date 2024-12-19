import React from 'react'

function ContactUs() {
  return (
    <div>
        {/* <section className="bg-gray-100 flex items-center justify-center min-h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Contact Us
    </h2>
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Your Message"
        name="message"
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      ></textarea>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
    <p className="mt-6 text-center text-gray-500">
      Need immediate assistance? <a href="tel:+1234567890" className="text-blue-500 hover:underline">Call Us</a>
    </p>
  </div>
</section> */}


<section className="bg-gray-100 flex items-center justify-center min-h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Contact Us
    </h2>
    <form
      action="https://getform.io/f/nbdodwya"
      method="POST"
      className="flex flex-col w-full"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="p-2 bg-transparent border-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <textarea
        name="message"
        placeholder="Enter your message"
        rows="10"
        className="p-2 bg-transparent border-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      ></textarea>
      <button
        type="submit"
        className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
      >
        Send Message
      </button>
    </form>
    <p className="mt-6 text-center text-gray-500">
      Need immediate assistance? <a href="tel:+1234567890" className="text-blue-500 hover:underline">Call Us</a>
    </p>
  </div>
</section>


    </div>
  )
}

export default ContactUs