
const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Learn more about our journey, our vision, and how we are making an
            impact in the world through innovation and dedication.
          </p>
        </div>
      </section>

      {/* Long Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our platform is a comprehensive solution designed to empower
            individuals and organizations in their quest for knowledge,
            collaboration, and innovation. By offering state-of-the-art tools
            and a user-centric interface, we ensure seamless experiences for
            everyone—from researchers and authors to event organizers and
            attendees.
            <br />
            <br />
            Whether it&apos;s managing academic conferences, streamlining the paper
            submission process, or fostering meaningful discussions within the
            research community, our platform is at the forefront of
            technological excellence. Built on the principles of accessibility,
            scalability, and inclusivity, we aim to bridge the gap between
            technology and human creativity.
            <br />
            <br />
            Since our inception, we&apos;ve grown into a trusted partner for numerous
            academic institutions, enterprises, and innovators worldwide.
            Together, we&apos;re shaping a future where knowledge sharing is
            effortless, impactful, and boundless.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To become a global leader in connecting minds and ideas through
            innovative technology, fostering a culture of collaboration and
            inclusivity in research and education. Our vision is to build a
            future where knowledge flows freely across boundaries, empowering
            individuals and organizations to achieve their fullest potential.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to revolutionize the way the world connects and
            collaborates by providing a dynamic platform that simplifies complex
            processes, inspires innovation, and nurtures the next generation of
            thinkers and creators. We are committed to empowering our users
            with cutting-edge tools, exceptional support, and an unwavering
            dedication to excellence.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg mb-6">
            Be a part of a community that values innovation, collaboration, and
            progress. Together, we can shape the future of knowledge sharing and
            technological advancement.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
