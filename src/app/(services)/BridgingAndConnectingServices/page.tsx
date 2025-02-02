import Image from "next/image";

export default function BridgingConnecting() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-red-800 mb-4">Bridging and Connecting Services</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We facilitate collaboration between researchers, institutions, and industry to maximize the impact of research.
        </p>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center my-8">
        <Image
          src="/images/bridgingAndConncetingServices.webp"
          width={900}
          height={500}
          alt="Bridging Services"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* How We Connect Researchers */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">How We Connect Researchers</h2>
        <p className="text-gray-600 mb-6">
          We provide an ecosystem where researchers, institutions, and industries collaborate seamlessly to drive innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Funding & Grant Support</h3>
            <p className="text-gray-700">
              Get access to funding opportunities and personalized guidance on writing successful grant proposals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Industry-Academic Collaborations</h3>
            <p className="text-gray-700">
              We bridge the gap between industry and academia, fostering joint research and real-world impact.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Global Networking Events</h3>
            <p className="text-gray-700">
              Join our exclusive events and conferences to connect with like-minded professionals and experts worldwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Research Collaboration Platform</h3>
            <p className="text-gray-700">
              Discover research partners, share ideas, and collaborate on groundbreaking projects.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-red-800">Join Our Global Network</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-2">
          Become a part of a thriving research community and gain access to exclusive collaboration opportunities.
        </p>
        <a
          href="/join-us"
          className="mt-6 inline-block bg-red-700 text-white px-6 py-3 rounded-full shadow-md text-lg font-semibold hover:bg-red-800 transition"
        >
          Join Now
        </a>
      </div>
    </div>
  );
}
