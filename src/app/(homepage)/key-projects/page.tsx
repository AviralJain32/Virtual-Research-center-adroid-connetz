"use client";
import { ProjectCard } from "@/components/HomePageComponents/ProjectCard";
import { projectCardDataType } from "@/types/HomePageTypes";
import React from "react";

const ProjectsPage = () => {
  const ProjectCardData: projectCardDataType[] = [
    {
      image:
        "https://images.pexels.com/photos/7723574/pexels-photo-7723574.jpeg",
      name: "Project A: Transforming Healthcare Through Technology",
      description:
        "This project focuses on integrating AI into patient care, improving diagnostic precision and enhancing patient outcomes.",
    },
    {
      image:
        "https://images.pexels.com/photos/7947711/pexels-photo-7947711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Project B: Sustainable Energy Solutions for Tomorrow",
      description:
        "Developing renewable energy technologies, including solar and wind power, to combat climate change and promote sustainability.",
    },
    {
      image:
        "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Project C: Advancements in Educational Technology",
      description:
        "This initiative focuses on enhancing learning experiences through innovative digital tools, personalized education, and immersive technology.",
    },
    {
      image:
        "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Project D: Advancements in Educational Technology",
      description:
        "This initiative focuses on enhancing learning experiences through innovative digital tools, personalized education, and immersive technology.",
    },
    {
      image:
        "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Project E: Advancements in Educational Technology",
      description:
        "This initiative focuses on enhancing learning experiences through innovative digital tools, personalized education, and immersive technology.",
    },
    {
      image:
        "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Project F: Advancements in Educational Technology",
      description:
        "This initiative focuses on enhancing learning experiences through innovative digital tools, personalized education, and immersive technology.",
    },
    {
      image:
        "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Project G: Advancements in Educational Technology",
      description:
        "This initiative focuses on enhancing learning experiences through innovative digital tools, personalized education, and immersive technology.",
    },
    {
      image:
        "https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Project H: Advancements in Educational Technology",
      description:
        "This initiative focuses on enhancing learning experiences through innovative digital tools, personalized education, and immersive technology.",
    },
  ];

  return (
    <div>
      <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            Our Research Projects
          </h2>
          <p className="text-xl text-gray-600">
            Discover the groundbreaking projects that are shaping the future of
            research. Our key initiatives showcase innovative solutions and
            impactful findings across various fields.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 px-6">
          {ProjectCardData.map((CardData: projectCardDataType) => (
            <ProjectCard key={CardData.name} {...CardData} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
