"use client";

import { NewsAndHighlightsCard } from "@/components/HomePageComponents/NewsAndHighlightsCard";
import { ProjectCard } from "@/components/HomePageComponents/ProjectCard";
import { PublicationCard } from "@/components/HomePageComponents/PublicationCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NewsAndHighlightsCardDataType, projectCardDataType, publicationCardDataType } from "@/types/HomePageTypes";
import Image from "next/image";


export default function Home() {

  const ProjectCardData:projectCardDataType[]=[
    {
      image:"https://images.pexels.com/photos/7723574/pexels-photo-7723574.jpeg",
      name:"Project A: Transforming Healthcare Through Technology",
      description:"This project focuses on integrating AI into patient care."
    },
    {
      image:"https://images.pexels.com/photos/7947711/pexels-photo-7947711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Project B: Sustainable Energy Solutions for Tomorrow",
      description:"We are developing renewable energy technologies to combat climate change."
    },
    {
      image:"https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Project C: Advancements in Educational Technology",
      description:"This initiative enhances learning experiences through innovative digital tools."
    }
  ]

  const PublicationCardData:publicationCardDataType[]=[
    {
      name:"Project A: Transforming Healthcare Through Technology",
      description:"This project focuses on integrating AI into patient care."
    },
    {
      name:"Project B: Sustainable Energy Solutions for Tomorrow",
      description:"We are developing renewable energy technologies to combat climate change."
    },
    {
      name:"Project C: Advancements in Educational Technology",
      description:"This initiative enhances learning experiences through innovative digital tools."
    }
  ]

  
  const NewsAndHighlightsCardData:NewsAndHighlightsCardDataType[]=[
    {
      readMinutes:"5 min",
      Type:"News",
      image:"https://images.pexels.com/photos/7723574/pexels-photo-7723574.jpeg",
      name:"Innovative Solutions in Research",
      description:"Explore how our latest project is transforming research methodologies."
    },
    {
      readMinutes:"5 min",
      Type:"News",
      image:"https://images.pexels.com/photos/7723574/pexels-photo-7723574.jpeg",
      name:"Join Our Upcoming Webinar",
      description:"Learn about the latest trends in research during our interactive session."
    },
    {
      readMinutes:"5 min",
      Type:"News",
      image:"https://images.pexels.com/photos/7723574/pexels-photo-7723574.jpeg",
      name:"Celebrating Our Recent Success",
      description:"Discover the impact of our latest research on the community."
    }
  ]
  return (
    <main>
      <section className="relative w-full h-[50vh]"> {/* Adjust height as needed */}
        <Image
          src="/images/HomePageBanner.webp"
          alt="Homepage Banner"
          layout="fill" // Makes the image fill the container
          style={{
            objectFit: "cover", // Ensures it covers the container
          }}
          priority
        />
      </section>

      <section className="grid sm:grid-cols-2 gap-8 h-[35vh] items-center container mx-auto px-6 lg:px-12">
  <div className="text-center sm:text-left">
    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
      Welcome to the Virtual Research Center
    </h1>
  </div>
  <div className="space-y-6">
    <p className="text-gray-600 text-lg leading-relaxed">
      At our Virtual Research Center, we connect researchers, institutions, and innovative ideas to drive impactful discoveries. Join us in exploring cutting-edge research and collaborative opportunities.
    </p>
    <div className="flex space-x-4">
      <Button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md">
        Learn More
      </Button>
      <Button
        variant="secondary"
        className="px-6 py-3 border border-blue-600 text-blue-600 bg-white rounded-lg hover:bg-blue-50 shadow-md"
      >
        Sign Up
      </Button>
    </div>
  </div>
</section>

<section className="text-center py-16 bg-gray-50">
  <div className="max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold text-blue-600">Innovate</h3>
    <h2 className="text-4xl font-bold text-gray-800 my-4">Explore Our Key Research Projects</h2>
    <p className="text-lg text-gray-600">
      Discover the groundbreaking projects that are shaping the future of research. Our key initiatives showcase innovative solutions and impactful findings across various fields.
    </p>
  </div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
    {ProjectCardData.map((CardData: projectCardDataType) => (
      <ProjectCard key={CardData.name} {...CardData} />
    ))}
  </div>
</section>


<section className="text-center py-16 ">
  <div className="max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold text-blue-600">Discover</h3>
    <h2 className="text-4xl font-bold text-gray-800 my-4">Explore Our Most Impactful Publications</h2>
    <p className="text-lg text-gray-600">
      Dive into our latest research that is shaping the future. These publications showcase groundbreaking findings and innovative applications.
    </p>
  </div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
    {PublicationCardData.map((CardData: publicationCardDataType) => (
      <PublicationCard key={CardData.name} {...CardData} />
    ))}
  </div>
</section>

<section className="text-center py-16 bg-gray-50">
  <div className="max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold text-blue-600">Updates</h3>
    <h2 className="text-4xl font-bold text-gray-800 my-4">Latest Research Highlights</h2>
    <p className="text-lg text-gray-600">
      Discover our latest achievements and upcoming events.
    </p>
  </div>
  <div className="grid gap-8 mt-12 px-4">
    {NewsAndHighlightsCardData.map((CardData: NewsAndHighlightsCardDataType) => (
      <NewsAndHighlightsCard key={CardData.name} {...CardData} />
    ))}
  </div>
</section>

    </main>
  );
}

