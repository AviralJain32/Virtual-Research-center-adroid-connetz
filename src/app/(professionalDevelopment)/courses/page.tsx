import Image from "next/image";

export default function CoursesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
        Our Professional Development Courses
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center">
        Enhance your skills with our industry-leading courses designed to help you succeed. Explore a variety of topics to boost your professional growth.
      </p>

      <section id="virtual-research-learning-series" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/virtual-research.jpg"
              width={500}
              height={300}
              alt="Virtual Research Learning Series"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Virtual Research Learning Series</h2>
            <p className="text-lg text-gray-700 mb-4">
              Participate in an interactive online research learning program designed for students, academics, and professionals. Enhance your research methodology, writing skills, and publishing strategies.
            </p>
            <ul className="text-lg text-gray-700 mb-6">
              <li>Benefits:
                <ul className="list-disc pl-6">
                  <li>Learn advanced research techniques</li>
                  <li>Access to live and recorded sessions</li>
                  <li>Guidance from experienced researchers</li>
                </ul>
              </li>
              <li>Duration: 6 Weeks</li>
              <li>Price: $299</li>
            </ul>
            <a href="/virtual-research-learning-series" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Course 1 */}
      <section id="training" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/course-1.jpg"
              width={500}
              height={300}
              alt="Course 1"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Data Science Mastery</h2>
            <p className="text-lg text-gray-700 mb-4">
              Master the essentials of data science, including machine learning, data visualization, and statistical analysis. This course is perfect for professionals looking to transition into data-driven roles.
            </p>
            <ul className="text-lg text-gray-700 mb-6">
              <li>Benefits:
                <ul className="list-disc pl-6">
                  <li>Comprehensive understanding of data analysis</li>
                  <li>Hands-on projects with real-world data</li>
                  <li>Industry-relevant tools and software</li>
                </ul>
              </li>
              <li>Duration: 8 Weeks</li>
              <li>Price: $499</li>
            </ul>
            <a href="/course-1" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Course 2 */}
      <section className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/course-2.jpg"
              width={500}
              height={300}
              alt="Course 2"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Full-Stack Web Development</h2>
            <p className="text-lg text-gray-700 mb-4">
              Become a proficient full-stack web developer by learning both front-end and back-end technologies, including React, Node.js, and Express. This course is ideal for those looking to build scalable, dynamic web applications.
            </p>
            <ul className="text-lg text-gray-700 mb-6">
              <li>Benefits:
                <ul className="list-disc pl-6">
                  <li>Hands-on experience with both front-end and back-end development</li>
                  <li>Learn how to deploy and maintain web applications</li>
                  <li>Access to a professional developer community</li>
                </ul>
              </li>
              <li>Duration: 12 Weeks</li>
              <li>Price: $799</li>
            </ul>
            <a href="/course-2" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Course 3 */}
      <section className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/course-3.jpg"
              width={500}
              height={300}
              alt="Course 3"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Digital Marketing Specialist</h2>
            <p className="text-lg text-gray-700 mb-4">
              Learn the fundamentals of digital marketing, including SEO, SEM, content marketing, and social media strategy. This course equips professionals with the skills to drive online business growth.
            </p>
            <ul className="text-lg text-gray-700 mb-6">
              <li>Benefits:
                <ul className="list-disc pl-6">
                  <li>Learn how to craft and execute marketing strategies</li>
                  <li>Gain in-depth knowledge of Google Analytics and Ads</li>
                  <li>Understand the dynamics of social media and content marketing</li>
                </ul>
              </li>
              <li>Duration: 10 Weeks</li>
              <li>Price: $399</li>
            </ul>
            <a href="/course-3" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Course 4 */}
      <section className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/course-4.jpg"
              width={500}
              height={300}
              alt="Course 4"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Project Management Professional (PMP)</h2>
            <p className="text-lg text-gray-700 mb-4">
              Prepare for the PMP certification exam with this comprehensive course. Learn advanced project management techniques, risk management strategies, and agile methodologies to lead successful projects.
            </p>
            <ul className="text-lg text-gray-700 mb-6">
              <li>Benefits:
                <ul className="list-disc pl-6">
                  <li>Master key project management methodologies</li>
                  <li>Prepare effectively for the PMP certification exam</li>
                  <li>Learn time management and resource optimization skills</li>
                </ul>
              </li>
              <li>Duration: 8 Weeks</li>
              <li>Price: $599</li>
            </ul>
            <a href="/course-4" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Course 5 */}
      <section className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/course-5.jpg"
              width={500}
              height={300}
              alt="Course 5"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Cloud Computing Fundamentals</h2>
            <p className="text-lg text-gray-700 mb-4">
              Gain a strong foundation in cloud computing concepts, platforms like AWS, and services like virtualization and containerization. This course is ideal for professionals looking to transition into cloud technologies.
            </p>
            <ul className="text-lg text-gray-700 mb-6">
              <li>Benefits:
                <ul className="list-disc pl-6">
                  <li>Hands-on experience with cloud platforms like AWS and Azure</li>
                  <li>Learn about cloud architecture and infrastructure</li>
                  <li>Understand cloud security practices</li>
                </ul>
              </li>
              <li>Duration: 6 Weeks</li>
              <li>Price: $399</li>
            </ul>
            <a href="/course-5" className="text-blue-600 font-semibold hover:underline transition duration-200">
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
