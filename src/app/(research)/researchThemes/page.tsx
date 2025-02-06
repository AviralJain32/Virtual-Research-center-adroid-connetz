
import React from "react";
import Image from "next/image";

const researchThemes = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Exploring AI ethics, autonomous systems, and healthcare AI. AI is transforming industries by enabling machines to learn from data and make intelligent decisions. Our research delves into deep learning, natural language processing, and AI-driven automation, ensuring ethical and fair AI practices.",
      image: "/images/AIML.png",
    },
    {
      title: "Sustainable Energy and Environment",
      description: "Optimizing renewable energy, mitigating climate change, and enabling circular economies. We focus on developing sustainable energy sources, enhancing energy storage solutions, and leveraging data-driven climate models to reduce global carbon footprints.",
      image: "/images/SustainableEnergy.jpg",
    },
    {
      title: "Digital Transformation & Smart Cities",
      description: "Innovating IoT, cybersecurity, and e-governance solutions. Our research explores how smart infrastructure, secure networks, and digital policies are reshaping modern urban environments, making cities more efficient and livable.",
      image: "/images/SmartCities.jpg",
    },
  ];
  

  export function page() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Research Themes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchThemes.map((theme, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <Image src={theme.image} alt={theme.title} width={400} height={250} className="rounded" />
              <h2 className="text-xl font-semibold mt-4">{theme.title}</h2>
              <p className="text-gray-600 mt-2">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default page