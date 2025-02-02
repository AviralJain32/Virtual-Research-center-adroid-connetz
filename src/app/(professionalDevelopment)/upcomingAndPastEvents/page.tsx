import Image from "next/image";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Research Symposium 2025",
      date: "5th - 7th March 2025",
      description: "A groundbreaking symposium discussing the future of virtual research platforms.",
      image: "/virtual-research-symposium.jpg",
      link: "/event/virtual-research-symposium",
    },
    {
      id: 2,
      title: "AI in Virtual Research Tools Workshop",
      date: "20th March 2025",
      description: "A workshop focusing on integrating AI into virtual research tools for enhanced productivity.",
      image: "/ai-virtual-tools.jpg",
      link: "/event/ai-in-virtual-research-tools-workshop",
    },
    {
      id: 3,
      title: "Digital Collaboration Platforms for Researchers",
      date: "12th April 2025",
      description: "A seminar on how digital collaboration tools are transforming research methodologies.",
      image: "/digital-collaboration.jpg",
      link: "/event/digital-collaboration-platforms-for-researchers",
    },
    {
      id: 4,
      title: "Virtual Reality in Education and Research",
      date: "25th April 2025",
      description: "Exploring how VR technologies are being used in virtual research environments and education.",
      image: "/virtual-reality-research.jpg",
      link: "/event/virtual-reality-in-education-and-research",
    },
    {
      id: 5,
      title: "Blockchain for Research Data Security",
      date: "10th May 2025",
      description: "A conference focused on using blockchain technology to secure research data in virtual environments.",
      image: "/blockchain-research.jpg",
      link: "/event/blockchain-for-research-data-security",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Virtual Research Tools Expo 2024",
      date: "1st December 2024",
      description: "A virtual expo showcasing cutting-edge research tools and platforms used by researchers globally.",
      image: "/virtual-research-tools-expo.jpg",
      link: "/event/virtual-research-tools-expo",
    },
    {
      id: 2,
      title: "AI and Ethics in Research",
      date: "15th November 2024",
      description: "A panel discussion on the ethical challenges in using AI for virtual research.",
      image: "/ai-ethics-research.jpg",
      link: "/event/ai-and-ethics-in-research",
    },
    {
      id: 3,
      title: "Remote Collaboration for Global Research Teams",
      date: "25th October 2024",
      description: "A global conference on overcoming challenges in remote collaboration for research teams.",
      image: "/remote-collaboration-research.jpg",
      link: "/event/remote-collaboration-for-global-research-teams",
    },
    {
      id: 4,
      title: "Virtual Research in Emerging Markets",
      date: "10th September 2024",
      description: "Exploring the impact of virtual research in emerging markets and how to overcome regional barriers.",
      image: "/virtual-research-emerging-markets.jpg",
      link: "/event/virtual-research-in-emerging-markets",
    },
    {
      id: 5,
      title: "Data Privacy in Virtual Research Platforms",
      date: "5th August 2024",
      description: "A comprehensive session on the importance of data privacy in virtual research ecosystems.",
      image: "/data-privacy-research.jpg",
      link: "/event/data-privacy-in-virtual-research-platforms",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
        Upcoming and Past Events
      </h1>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={event.image}
                width={500}
                height={300}
                alt={event.title}
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-extrabold text-blue-800 mb-4">{event.title}</h3>
                <p className="text-lg text-gray-700 mb-4">{event.description}</p>
                <p className="text-lg text-gray-500 mb-4">{event.date}</p>
                <a
                  href={event.link}
                  className="text-blue-600 font-medium hover:underline transition duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg opacity-70 cursor-not-allowed"
            >
              <Image
                src={event.image}
                width={500}
                height={300}
                alt={event.title}
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-extrabold text-gray-500 mb-4">{event.title}</h3>
                <p className="text-lg text-gray-500 mb-4">{event.description}</p>
                <p className="text-lg text-gray-400 mb-4">{event.date}</p>
                <p className="text-gray-500 italic">Event has been completed.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
