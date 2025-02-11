import React from 'react'
import { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault()
    console.log(message)
  }



  return (
    <div className="bg-gray-100 py-10 px-6 sm:px-12 lg:px-24 w-100vw">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Contact Us
      </h2>
      <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="Your Message"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};


export default Contact
