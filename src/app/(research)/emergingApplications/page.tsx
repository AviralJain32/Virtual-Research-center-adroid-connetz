function EmergingApplicationsPage() {

    // const router = useRouter();

    // useEffect(() => {
    //   if (router.asPath.includes("#")) {
    //     const id = router.asPath.split("#")[1];
    //     const element = document.getElementById(id);
    //     if (element) {
    //       setTimeout(() => {
    //         element.scrollIntoView({ behavior: "smooth" });
    //       }, 100); // Delay to ensure DOM is loaded
    //     }
    //   }
    // }, [router.asPath]);
    return (
      <div className="container mx-auto p-6" id="EmergingApplications">
        <h1 className="text-3xl font-bold mb-6">Emerging Applications & Use Cases</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our research focuses on real-world applications of cutting-edge technologies across multiple domains, 
          revolutionizing industries and society. Below are some key areas where our research is making an impact.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">AI in Financial Risk Management</h2>
            <p className="text-gray-600">AI-driven analytics detect fraudulent transactions and optimize algorithmic trading strategies.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Blockchain for Secure Transactions</h2>
            <p className="text-gray-600">Decentralized identity verification and transparent supply chain management improve digital trust.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">IoT in Smart Agriculture</h2>
            <p className="text-gray-600">IoT-enabled precision farming techniques help optimize water usage and monitor soil conditions in real time.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Quantum Computing in Drug Discovery</h2>
            <p className="text-gray-600">Quantum simulations accelerate pharmaceutical research and molecular analysis.</p>
          </div>
        </div>
        
        {/* Completed Projects Section */}
        <div className="mb-12" id="CompletedProjects">
          <h2 className="text-2xl font-bold mb-4">Completed Projects</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2"><strong>AI-Powered Risk Analysis:</strong> Developed predictive models to assess financial risk and fraud detection.</li>
            <li className="mb-2"><strong>Decentralized Healthcare Records:</strong> Implemented blockchain-based patient record management for secure data storage.</li>
            <li className="mb-2"><strong>Autonomous Farming Systems:</strong> Created AI-driven automation for pesticide application and crop monitoring.</li>
            <li className="mb-2"><strong>Cybersecurity Threat Intelligence:</strong> Built an ML-powered system for early detection of cyber threats.</li>
          </ul>
        </div>
        
        {/* Collaborators Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Collaborators</h2>
          <p className="text-gray-700 mb-4">
            We work with leading institutions and organizations worldwide to advance research and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Tech University London</h3>
              <p className="text-gray-600">A premier institute contributing to AI and machine learning advancements.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Global Data Science Network</h3>
              <p className="text-gray-600">Collaborating on real-world applications of big data analytics.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">European Innovation Lab</h3>
              <p className="text-gray-600">Partnering in projects involving cybersecurity and blockchain technology.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default EmergingApplicationsPage;
