import Image from "next/image";



const fundingCalls = [
    {
      title: "AI for Social Good Grant (2025)",
      amount: "$500,000",
      deadline: "March 30, 2025",
      description: "This grant supports AI research projects aimed at solving social challenges, including healthcare accessibility, education equity, and environmental sustainability.",
      image: "/images/AISocial.avif",
    },
    {
      title: "Renewable Energy Research Grant",
      amount: "$1 million",
      deadline: "June 15, 2025",
      description: "Designed for researchers developing next-generation renewable energy solutions, including advanced solar panels and efficient wind turbines.",
      image: "/images/RenewableEnergy.jpg",
    },
    {
      title: "Cybersecurity Innovation Fund",
      amount: "$750,000",
      deadline: "September 10, 2025",
      description: "Aimed at strengthening digital security infrastructure, this fund supports projects that enhance cybersecurity resilience against evolving threats.",
      image: "/images/CyberSecurity.jpg",
    },
  ];

export function FundingCallsPage() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Upcoming Funding Calls</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundingCalls.map((fund, index) => (
            <div key={index} className="bg-green-100 p-4 rounded-lg shadow">
              <Image src={fund.image} alt={fund.title} width={400} height={250} className="rounded" />
              <h2 className="text-xl font-semibold mt-4">{fund.title}</h2>
              <p className="text-gray-600">Funding Amount: {fund.amount}</p>
              <p className="text-gray-600">Deadline: {fund.deadline}</p>
              <p className="text-gray-600 mt-2">{fund.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
   export default FundingCallsPage