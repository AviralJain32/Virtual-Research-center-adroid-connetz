import Image from "next/image";

export default function HighQualityArticles() {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-indigo-50 to-blue-100 rounded-lg shadow-xl">
      <h1 className="text-5xl font-extrabold mb-8 text-purple-900 text-center leading-tight">
        Master the Art of Publishing High-Quality Research Articles
      </h1>
      <p className="text-xl text-gray-800 mb-8 text-center">
        Gain expert insights and best practices to successfully publish your research in prestigious journals and conferences.
      </p>

      <div className="text-center mb-8">
        <div className="w-full flex justify-center">
        <Image 
          src="/images/HighQualityArticles.jpg" 
          width={900} 
          height={500} 
          alt="Publishing Training" 
          className="rounded-lg shadow-lg"
        />
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          What You&apos;ll Learn
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          This training will provide you with comprehensive insights into the world of academic publishing. You will learn how to navigate the complex landscape of research publishing, improve your writing skills, and understand how to make your research stand out.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Topics Covered</h3>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          <li>Understanding Journal Selection & Impact Factors</li>
          <li>Crafting a Strong Introduction & Literature Review</li>
          <li>Common Reviewer Feedback & How to Address It</li>
          <li>Ethics in Research Publishing</li>
          <li>Strategies to Increase Citation Rates & Visibility</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why This Training is Essential</h3>
        <p className="text-lg text-gray-700 mb-8">
          Publishing in top-tier journals and conferences can be a daunting process. This training will guide you step-by-step through the essential skills needed to craft articles that are not only well-received but also stand out in the competitive academic world. Whether you’re aiming for a high-impact factor journal or a prestigious conference, this training will prepare you for success.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who Should Join?</h3>
        <p className="text-lg text-gray-700 mb-6">
          This program is designed for early-career researchers, including PhD students, postdoctoral researchers, and early-career academics, who are looking to enhance their publishing skills and increase their chances of getting published in high-impact journals and conferences.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Training Session</h3>
        <p className="text-lg text-gray-700 mb-6">
          Ready to take the next step in your academic journey? Our next training session is just around the corner. Don&apos;t miss the opportunity to learn from seasoned professionals in the publishing field. <strong>Seats are limited!</strong>
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Register for the upcoming session and unlock the key strategies to boost your publication success. <a href="/training-registration" className="text-purple-600 font-semibold">Sign up now</a>.
        </p>

        <div className="text-center mt-8">
          <a href="/training-registration" className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}
