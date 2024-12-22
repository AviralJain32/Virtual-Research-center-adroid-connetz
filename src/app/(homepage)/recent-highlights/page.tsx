"use client";
import { NewsAndHighlightsCard } from "@/components/HomePageComponents/NewsAndHighlightsCard";
import { NewsAndHighlightsCardDataType } from "@/types/HomePageTypes";
import React from "react";

const NewsPage = () => {
  const NewsAndHighlightsCardData: NewsAndHighlightsCardDataType[] = [
    {
      readMinutes: "5 min",
      Type: "News",
      image:
        "https://images.pexels.com/photos/7723574/pexels-photo-7723574.jpeg",
      name: "Innovative Solutions in Research",
      description:
        "Explore how our latest project is transforming research methodologies.",
    },
    {
      readMinutes: "5 min",
      Type: "Event",
      image:
        "https://images.pexels.com/photos/3228684/pexels-photo-3228684.jpeg",
      name: "Join Our Upcoming Webinar",
      description:
        "Learn about the latest trends in research during our interactive session.",
    },
    {
      readMinutes: "3 min",
      Type: "Achievement",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
      name: "Celebrating Our Recent Success",
      description:
        "Discover the impact of our latest research on the community.",
    },
    {
      readMinutes: "4 min",
      Type: "Highlight",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
      name: "Groundbreaking Research Published",
      description:
        "Dive into our recently published study that is gaining global attention.",
    },
    {
      readMinutes: "6 min",
      Type: "News",
      image:
        "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg",
      name: "Advancing AI in Healthcare",
      description:
        "Discover how our team is integrating AI to revolutionize healthcare systems.",
    },
    {
      readMinutes: "4 min",
      Type: "Event",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      name: "Annual Research Symposium",
      description:
        "Join us for a day of inspiring talks and groundbreaking research presentations.",
    },
  ];

  return (
    <div>
      <section className="text-center py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Latest Research Highlights
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest achievements, events, and news.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
          {NewsAndHighlightsCardData.map((CardData: NewsAndHighlightsCardDataType) => (
            <NewsAndHighlightsCard key={CardData.name} {...CardData} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
