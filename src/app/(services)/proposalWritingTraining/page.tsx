import Image from "next/image";

export default function ProposalWriting() {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-50 to-teal-100 rounded-lg shadow-2xl">
      <h1 className="text-5xl font-extrabold mb-8 text-blue-900 text-center leading-tight">
        Mastering Proposal Writing: Unlock Funding for Your Research
      </h1>
      <p className="text-xl text-gray-800 mb-8 text-center">
        Learn the art of crafting persuasive and comprehensive proposals that attract funding and support for your academic or industry projects.
      </p>

      <div className="text-center mb-8 w-full flex justify-center">
        <Image 
          src="/images/ProposalWritingTraining.jpg" 
          width={900} 
          height={500} 
          alt="Proposal Writing Training" 
          className="rounded-lg shadow-xl"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          Key Topics Covered in This Training
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          This comprehensive training is designed to equip you with the knowledge and skills necessary to write winning research proposals that stand out to funding agencies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Understanding Funding Agencies & Requirements</h3>
            <p className="text-gray-600">
              Learn how to identify the right funding bodies for your project and understand their specific requirements to tailor your proposal accordingly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Structuring a Strong Proposal</h3>
            <p className="text-gray-600">
              Discover how to structure your proposal to present your ideas clearly, persuasively, and in line with the expectations of funding bodies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Effective Budgeting & Justification</h3>
            <p className="text-gray-600">
              Master the art of crafting a well-reasoned budget that supports your project’s goals and justifies each expense.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Writing Persuasive Research Objectives</h3>
            <p className="text-gray-600">
              Learn how to write clear, concise, and compelling research objectives that demonstrate the value and impact of your project.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Common Mistakes & How to Avoid Them</h3>
          <p className="text-gray-600">
            Understand the most common mistakes that derail proposals and gain practical tips for avoiding them to improve your chances of success.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Who Should Attend?</h2>
        <p className="text-lg text-gray-700 mb-6">
          This training is ideal for researchers, PhD students, early-career academics, and professionals who are seeking to improve their proposal-writing skills and secure funding for their projects.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Upcoming Training Sessions</h2>
        <p className="text-lg text-gray-700 mb-6">
          Don&apos;t miss out on the opportunity to refine your proposal-writing skills. Check out our <a href="/upcoming-events" className="text-blue-600 font-medium">upcoming events</a> and register for the next session.
        </p>

        <div className="text-center mt-8">
          <a href="/upcoming-events" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
            View Upcoming Sessions
          </a>
        </div>
      </div>
    </div>
  );
}
