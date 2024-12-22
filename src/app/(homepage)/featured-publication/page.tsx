import { PublicationCard } from '@/components/HomePageComponents/PublicationCard';
import { publicationCardDataType } from '@/types/HomePageTypes';
import React from 'react';

const PublicationsPage = () => {
  const PublicationCardData: publicationCardDataType[] = [
    {
      name: "Project A: Transforming Healthcare Through Technology",
      description: "This project focuses on integrating AI into patient care, revolutionizing the healthcare industry by improving diagnostic accuracy and patient outcomes.",
    },
    {
      name: "Project B: Sustainable Energy Solutions for Tomorrow",
      description: "We are developing renewable energy technologies to combat climate change, focusing on solar power, wind energy, and energy storage innovations.",
    },
    {
      name: "Project C: Advancements in Educational Technology",
      description: "This initiative enhances learning experiences through innovative digital tools, leveraging AI to personalize education and improve engagement.",
    },
    {
      name: "Project D: Tackling Global Water Scarcity",
      description: "Exploring advanced desalination techniques and water management solutions to address the global water crisis.",
    },
    {
      name: "Project E: Enhancing Cybersecurity with AI",
      description: "Using AI and machine learning to create robust cybersecurity frameworks that protect against evolving digital threats.",
    },
    {
      name: "Project F: Next-Gen Transportation Solutions",
      description: "Developing smart, eco-friendly transportation systems to reduce urban congestion and minimize environmental impact.",
    },
  ];

  return (
    <div>
      <section className="text-center py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Our Publications</h1>
          <p className="text-2xl text-gray-700">
            Dive into our most impactful research that is shaping the future of various industries. These publications showcase groundbreaking findings and innovative applications.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
          {PublicationCardData.map((CardData: publicationCardDataType) => (
            <PublicationCard key={CardData.name} {...CardData} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
