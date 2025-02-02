
export default function ContactUsPage() {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Get in touch with us for any inquiries or assistance. We're here to help!
        </p>
  
        {/* Our Offices */}
        <section id="ourOffices" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Offices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Head Office</h3>
              <p className="text-gray-700">123 Research Lane, Tech City, USA</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Branch Office</h3>
              <p className="text-gray-700">456 Innovation Drive, Science Park, UK</p>
            </div>
          </div>
        </section>
  
        {/* Contact Form */}
        <section id="contactForm" className="mb-16 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Form</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" required />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-md h-32" required></textarea>
            <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>
  
        {/* Email and Phone */}
        <section id="emailAndPhone" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Email & Phone</h2>
          <p className="text-lg text-gray-700 mb-4">
            Reach out to us via email or phone for quick assistance.
          </p>
          <ul className="text-lg text-gray-700 space-y-2">
            <li><strong>Email:</strong> contact@virtualresearch.com</li>
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Support:</strong> support@virtualresearch.com</li>
          </ul>
        </section>
      </div>
    );
  }
  