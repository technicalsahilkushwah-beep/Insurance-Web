import React from "react";
import mark from "../assets/Images/Mark.png";

const Mark = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={mark}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Title */}
        <h1 className="text-5xl font-bold text-[#313C47] mb-14 font-6">
          Contact Details
        </h1>

        {/* ================= TOP CONTACT ROW ================= */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-6 text-[#313C47]">
            Insurance Ireland Dublin
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#1f4f66] text-white px-6 py-5 rounded-md">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p className="font-medium text-gray-700 font-6">Phone Number</p>
                <p className="text-gray-600 font-6">+353 (1) 676 1820</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#1f4f66] text-white px-6 py-5 rounded-md">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="font-medium text-gray-700 font-6">Email Address</p>
                <p className="text-gray-600 underline font-6">
                  info@insuranceireland.eu
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#1f4f66] text-white px-6 py-5 rounded-md">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="font-medium text-gray-700 font-6">Office Address</p>
                <p className="text-gray-600 leading-relaxed font-6">
                  Insurance Ireland, Insurance Centre, 5 Harbourmaster Place,
                  IFSC, Dublin 1, D01 E7E8.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM INFO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

          {/* Brussels */}
          <div>
            <h3 className="font-semibold text-[#313C47] font-6 text-2xl mb-2">
              Insurance Ireland Brussels
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Insurance Ireland, Rue du Champ de Mars 23, B-1050 Ixelles
            </p>
            <p className="text-gray-600 mt-2">
              email:
              <span className="text-[#11BAD7] underline ml-1">
                brussels@insuranceireland.eu
              </span>
            </p>
          </div>

          {/* Consumer Info */}
          <div>
            <h3 className=" text-gray-800 font-6 mb-2">
              Consumer Information & Assistance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Information service for members of the public.
            </p>
            <p className="text-[#11BAD7] mt-2">
              tel: +353 (1) 676 1820
            </p>
            <p className="text-[#11BAD7] underline mt-1">
              feedback@insuranceireland.eu
            </p>
          </div>

          {/* Fraud */}
          <div>
            <h3 className="font-6 text-gray-800 mb-2">
              Report Suspected Insurance Fraud
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A lo-call confidential hotline to report suspected insurance fraud.
            </p>
            <p className="text-[#11BAD7] underline mt-2">
              www.insuranceconfidential.ie
            </p>
          </div>

          {/* Media */}
          <div>
            <h3 className="font-6 text-gray-800 mb-2">
              Media Queries
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All media queries should be referred to Nuala Buttner, Q4 Public
              Relations.
            </p>
            <p className="text-gray-600 mt-2">
              tel: +353 (85) 174 4275
            </p>
            <p className="text-[#11BAD7] underline mt-1">
              nuala@q4pr.ie
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Mark;
