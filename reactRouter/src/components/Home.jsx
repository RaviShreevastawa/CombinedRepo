import React from "react";
import attention from '../assets/Attention.png'
import Ravi from'../assets/Ravi.jpg'
import Rachit from '../assets/Rachit-1.jpg'

const Home = () => {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-transparent text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-300">
            Welcome to AI World
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Explore cutting-edge artificial intelligence innovations and 
            revolutionize the way you think about technology.
          </p>
          <button onClick= { () => {"/signin"}} className="bg-blue-500 hover:bg-blue-600 text-gray-300 font-bold px-6 rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-300">
            What We Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-blue-950 p-6 shadow-md rounded-lg text-center hover:2xl:">
              <img
                src= {attention}
                alt="AI Research"
                className="w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">AI Research</h3>
              <p className="text-black">
                Discover groundbreaking advancements in artificial intelligence
                and machine learning technologies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-950 p-6 shadow-lg rounded-lg text-center">
              <img
                src = {Rachit}
                alt="Generative AI"
                className="w-full rotate-2 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Generative AI</h3>
              <p className="text-black">
                Harness the power of generative models to create innovative
                content and solve complex problems.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-950 p-6 shadow-md rounded-lg text-center">
              <img
                src= {Ravi}
                alt="AI Consulting"
                className="w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">AI Consulting</h3>
              <p className="text-black">
                Collaborate with AI experts to transform your business with
                smart automation and predictive insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-transparent text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-300">
            Ready to Dive into AI?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Join the community of innovators and explore the endless
            possibilities of artificial intelligence.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-gray-300 font-bold py-3 px-6 rounded-lg ">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
