import Image from "next/image";

export default function ImpactCaseStudies() {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-green-50 to-blue-100 rounded-lg shadow-xl">
      <h1 className="text-5xl font-extrabold mb-8 text-green-900 text-center leading-tight ">
        Real-World Impact: Case Studies of Transformative Research
      </h1>
      <p className="text-xl text-gray-800 mb-8 text-center">
        Explore how groundbreaking research has sparked change across industries, societies, and policies, creating a lasting impact.
      </p>

      <div className="text-center mb-8 flex justify-center w-full">
        <Image 
          src="/images/impactCaseStudies.avif" 
          width={900} 
          height={500} 
          alt="Impact Case Studies" 
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          Featured Case Studies
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our case studies showcase the far-reaching influence of research on real-world challenges. From healthcare to energy sustainability, these examples highlight the critical role of research in driving innovation and solving global problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">AI for Healthcare: Saving Lives with Technology</h3>
            <p className="text-gray-600">
              This case study explores how artificial intelligence-powered diagnostics are revolutionizing healthcare by identifying diseases early, ultimately reducing patient mortality rates globally. Learn how AI is enhancing the accuracy and efficiency of medical practices, leading to better health outcomes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Renewable Energy Adoption: Powering Rural Communities</h3>
            <p className="text-gray-600">
              Discover how a collaborative initiative between researchers, government agencies, and NGOs led to a significant increase in solar energy adoption in rural regions. This case study highlights the impact of renewable energy in improving access to clean, affordable power for underserved communities.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Why Share Your Impact Case Study?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Your research could be the next game-changer! Sharing your case study will not only amplify your work but also inspire others in the scientific and business communities. Join us in showcasing how research can solve real-world problems and create lasting societal impact.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Submit Your Case Study</h2>
        <p className="text-lg text-gray-700 mb-6">
          If your research has led to tangible results or solutions in areas like healthcare, energy, technology, or policy, we want to hear from you! Submit your case study to be featured in our collection of impactful research. 
          <a href="/submit-case-study" className="text-green-600 font-semibold">Submit your case study here</a>.
        </p>

        <div className="text-center mt-8">
          <a href="/submit-case-study" className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700">
            Submit Your Impact
          </a>
        </div>
      </div>
    </div>
  );
}
