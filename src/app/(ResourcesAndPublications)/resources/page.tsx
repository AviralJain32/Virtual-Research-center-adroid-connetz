import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-8">
      {/* Datasets Section */}
      <section id="datasets" className="mb-16 bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Datasets</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/datasets-image.jpg"
              width={700}
              height={400}
              alt="Datasets"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-6">
              Explore a comprehensive range of open-access datasets designed to support data-driven research across diverse fields. These datasets are invaluable for those looking to enhance their academic or professional projects with solid, reliable data.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're conducting analysis in healthcare, environmental sciences, or technology, our curated datasets will equip you with the foundational data to drive your research forward.
            </p>
            <a href="/datasets" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Explore Datasets &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Tools and Software Section */}
      <section id="tools-software" className="mb-16 bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Tools and Software</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/tools-software.jpg"
              width={700}
              height={400}
              alt="Tools and Software"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-6">
              Unlock the power of cutting-edge research tools and software that significantly improve productivity. From advanced data analytics platforms to intuitive citation management tools, these resources are essential for streamlining your research process.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Discover tools designed for a variety of research needs, whether you're working with large datasets, writing publications, or collaborating with peers. These tools will make your workflow more efficient, saving you valuable time and effort.
            </p>
            <a href="/tools-software" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Discover Tools &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Open Access Research Section */}
      <section id="open-access-research" className="mb-16 bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Open Access Research</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/open-access-research.jpg"
              width={700}
              height={400}
              alt="Open Access Research"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-6">
              Stay ahead in your academic journey by embracing the world of open access research. Open access makes high-quality research freely available to anyone, eliminating the barriers of paywalls. Gain access to the latest publications, studies, and reports across a wide range of fields.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              By integrating open access into your research practice, you can stay up to date with the latest trends, discover groundbreaking work, and contribute to the broader scientific community.
            </p>
            <a href="/open-access-research" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Access Open Research &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Collaboration Portals Section */}
      <section id="collaboration-portals" className="mb-16 bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Collaboration Portals</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/collaboration-portals.jpg"
              width={700}
              height={400}
              alt="Collaboration Portals"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-6">
              Join a vibrant community of researchers, academics, and professionals through various collaboration portals. These platforms are designed to facilitate the exchange of knowledge, resources, and expertise, fostering collaborative innovation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're looking to partner on projects, share research findings, or engage in discussions, these portals provide a supportive ecosystem for enhancing your work and building professional relationships.
            </p>
            <a href="/collaboration-portals" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Explore Collaboration Portals &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
