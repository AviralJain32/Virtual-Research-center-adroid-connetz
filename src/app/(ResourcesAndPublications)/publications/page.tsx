import Image from "next/image";

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Publications Title */}
      <section id="publications-title" className="mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Publications</h1>
        <p className="text-lg text-gray-700 mb-4">
          Explore our diverse range of publications, showcasing our research contributions to prestigious journals, conferences, and more.
        </p>
      </section>

      {/* Journals Section */}
      <section id="journals" className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Journals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/journal1.jpg" width={400} height={250} alt="Journal 1" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Journal of Artificial Intelligence</h3>
            <p className="text-gray-600">
              A comprehensive study on AI&apos;s evolving role in various industries, published in one of the leading journals.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/journal2.jpg" width={400} height={250} alt="Journal 2" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Medical Research Innovations</h3>
            <p className="text-gray-600">
              Cutting-edge research on medical advancements and their practical applications in patient care.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/journal3.jpg" width={400} height={250} alt="Journal 3" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Environmental Sustainability</h3>
            <p className="text-gray-600">
              Published work focused on sustainability practices and their integration into global policies and strategies.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
        </div>
      </section>

      {/* Conferences Section */}
      <section id="conferences" className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Conferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/conference1.jpg" width={400} height={250} alt="Conference 1" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">International Conference on AI</h3>
            <p className="text-gray-600">
              Presented groundbreaking research on AI in healthcare and its potential for revolutionizing patient outcomes.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/conference2.png" width={400} height={250} alt="Conference 2" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Global Renewable Energy Summit</h3>
            <p className="text-gray-600">
              A major international summit focused on renewable energy solutions for sustainable future development.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/conference3.avif" width={400} height={250} alt="Conference 3" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Tech Innovations in Healthcare</h3>
            <p className="text-gray-600">
              A deep dive into the latest technological advancements in healthcare, from AI-driven diagnostics to robotics.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
        </div>
      </section>

      {/* Books and Chapters Section */}
      <section id="books-chapters" className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Books and Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/journal1.jpg" width={400} height={250} alt="Book 1" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Advanced AI and Machine Learning</h3>
            <p className="text-gray-600">
              A comprehensive textbook covering the latest trends and research in AI, suitable for academics and practitioners alike.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/book2.jpg" width={400} height={250} alt="Book 2" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Sustainable Energy Solutions</h3>
            <p className="text-gray-600">
              This book explores renewable energy technologies and their implementation in global markets for long-term sustainability.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/book3.webp" width={400} height={250} alt="Book 3" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Digital Transformation in Healthcare</h3>
            <p className="text-gray-600">
              A guide to digital health technologies transforming the landscape of healthcare delivery worldwide.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
        </div>
      </section>

      {/* Monographs Section */}
      <section id="monographs" className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Monographs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/monograph1.jpg" width={400} height={250} alt="Monograph 1" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Quantum Computing: A Revolution</h3>
            <p className="text-gray-600">
              A scholarly monograph that delves into the theories, applications, and future of quantum computing in various industries.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/monograph2.jpg" width={400} height={250} alt="Monograph 2" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Global Health and Policy Reform</h3>
            <p className="text-gray-600">
              This monograph addresses global health policy reform efforts, highlighting the most significant changes in healthcare worldwide.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image src="/images/monograph3.jpg" width={400} height={250} alt="Monograph 3" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">The Future of Smart Cities</h3>
            <p className="text-gray-600">
              An in-depth exploration of the technologies and infrastructure that will define the cities of tomorrow.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
}
