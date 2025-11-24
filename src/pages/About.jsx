import React from "react";
import { Link } from "react-router";
import {
  FaReact,
  FaFire,
  FaRoute,
  FaCss3Alt,
  FaBolt,
} from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFirebase } from "react-icons/si";
import { ArrowLeftCircle } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaFire className="text-primary" size={30} />
        About This Project
      </h1>

      {/* Description */}
      <p className="text-gray-600 leading-7 mb-8">
        <span className="font-semibold">Dragon News</span> is a modern news
        portal built using React and Firebase. It provides category-based news,
        protected routes, dynamic data loading using React Router (Data Mode),
        and a clean, responsive UI using Tailwind CSS.
      </p>

      {/* Project Features */}
      <div className="bg-white rounded-2xl shadow p-6 border mb-10">
        <h2 className="text-2xl font-semibold mb-4">🚀 Key Features</h2>

        <ul className="space-y-3 text-gray-700">
          <li>✔ Dynamic category-based news rendering</li>
          <li>✔ Firebase authentication (email/password, Google login)</li>
          <li>✔ Protected and private routes</li>
          <li>✔ React Router Data Loaders for fast page loading</li>
          <li>✔ Reusable components such as NewsCard & CategoryNews</li>
          <li>✔ Fully responsive UI with Tailwind CSS</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-2xl shadow p-6 border">
        <h2 className="text-2xl font-semibold mb-4">🛠 Technologies Used</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

          <div className="flex flex-col items-center">
            <FaReact size={40} className="text-blue-500" />
            <p className="mt-2 font-medium">React</p>
          </div>

          <div className="flex flex-col items-center">
            <SiFirebase size={40} className="text-yellow-500" />
            <p className="mt-2 font-medium">Firebase Auth</p>
          </div>

          <div className="flex flex-col items-center">
            <FaRoute size={40} className="text-green-600" />
            <p className="mt-2 font-medium">React Router</p>
          </div>

          <div className="flex flex-col items-center">
            <SiTailwindcss size={40} className="text-cyan-500" />
            <p className="mt-2 font-medium">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <SiVite size={40} className="text-purple-600" />
            <p className="mt-2 font-medium">Vite</p>
          </div>

        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <Link
          className="inline-flex items-center gap-2 btn btn-primary px-5 py-2 rounded-lg"
          to="/"
        >
          <ArrowLeftCircle size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
