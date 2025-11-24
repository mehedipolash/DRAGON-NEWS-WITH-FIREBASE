import { ArrowLeftCircle } from "lucide-react";
import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router";

const Career = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Page Title */}
      <div className="flex items-center gap-3 mb-6">
        <FaBriefcase size={28} className="text-primary" />
        <h1 className="text-3xl font-bold text-gray-800">Career Opportunities</h1>
      </div>

      <p className="text-gray-600 mb-8 leading-7">
        Join the Dragon News team! We are always looking for passionate writers,
        editors, and tech-savvy individuals who want to help shape the future of
        digital journalism. Explore our current openings below.
      </p>

      {/* Job List Container */}
      <div className="space-y-6">
        {/* Job Card 1 */}
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Senior News Editor
          </h2>

          <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </div>
            <div className="flex items-center gap-1">
              <FaClock /> Full-time
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm leading-6">
            We are looking for a Senior Editor with strong leadership and content
            management skills. Experience in editorial writing and managing a
            newsroom team is required.
          </p>

          <button className="btn btn-primary mt-5">Apply Now</button>
        </div>

        {/* Job Card 2 */}
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow transition">
          <h2 className="text-xl font-semibold text-gray-800">
            React Frontend Developer
          </h2>

          <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt /> Remote / Hybrid
            </div>
            <div className="flex items-center gap-1">
              <FaClock /> Full-time
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm leading-6">
            Dragon News is expanding! We need a skilled React developer familiar
            with React Router, Firebase Auth, Tailwind CSS, and modern UI/UX
            practices.
          </p>

          <button className="btn btn-primary mt-5">Apply Now</button>
        </div>

        {/* Job Card 3 */}
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Junior Content Writer
          </h2>

          <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </div>
            <div className="flex items-center gap-1">
              <FaClock /> Part-time
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm leading-6">
            A great opportunity for freshers! If you love writing trending news,
            sports updates, and entertainment stories — this role is for you.
          </p>

          <button className="btn btn-primary mt-5">Apply Now</button>
        </div>
      </div>
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

export default Career;
