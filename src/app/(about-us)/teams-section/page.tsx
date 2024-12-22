"use client";

import Image from "next/image";
import * as React from "react";

const teamData = {
  projectManagers: [
    { name: "Alice Johnson", role: "Lead Project Manager", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Bob Smith", role: "Senior Project Manager", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Alice Johnson", role: "Lead Project Manager", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Bob Smith", role: "Senior Project Manager", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Alice Johnson", role: "Lead Project Manager", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Bob Smith", role: "Senior Project Manager", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  ],
  researchers: [
    { name: "Dr. Emily Carter", role: "AI Researcher", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Dr. Michael Lee", role: "Data Scientist", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Dr. Sarah Kim", role: "Quantum Computing Researcher", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Dr. John Doe", role: "Blockchain Expert", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  ],
  consultants: [
    { name: "Lisa Brown", role: "Tech Consultant", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Daniel Green", role: "Business Consultant", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Prof. Anne White", role: "Academic Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Mr. Thomas Clark", role: "Industry Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Prof. Anne White", role: "Academic Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Mr. Thomas Clark", role: "Industry Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  ],
  advisers: [
    { name: "Prof. Anne White", role: "Academic Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Mr. Thomas Clark", role: "Industry Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Prof. Anne White", role: "Academic Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Mr. Thomas Clark", role: "Industry Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Prof. Anne White", role: "Academic Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
    { name: "Mr. Thomas Clark", role: "Industry Adviser", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  ],
};

const TeamPage = () => {
  const renderCard = (member: { name: string; role: string; image: string }) => (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
      <Image
        src={member.image}
        alt={member.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.role}</p>
    </div>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="mt-2 text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla et sagittis, vestibulum risus lacus sit.
          </p>
        </div>

        {/* Project Managers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Project Managers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.projectManagers.map(renderCard)}
          </div>
        </section>

        {/* Researchers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Researchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.researchers.map(renderCard)}
          </div>
        </section>

        {/* Consultants Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Consultants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamData.consultants.map(renderCard)}
          </div>
        </section>

        {/* Advisers Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Advisers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamData.advisers.map(renderCard)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;
