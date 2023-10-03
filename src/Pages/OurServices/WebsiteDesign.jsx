const WebsiteDesign = () => {
  const data = [
    {
      packageName: "Landing Page Design",
      description: "Create an attractive and functional landing page for your website.",
      deliverables: [
        "Custom-designed landing page",
        "Responsive design for all devices",
        "Content upload",
        "Call-to-action elements",
        "Basic SEO optimization",
      ],
      pages: 1,
      sections: "5 - 7",
      pricing: "$30 - $50",
      deliveryTime: "3 days",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
    {
      packageName: "Full Website Design",
      description: "Design a complete website for your business or project.",
      deliverables: [
        "Custom website design with multiple pages",
        "Responsive design for all devices",
        "User-friendly navigation",
        "Content management system",
        "Integration of contact forms",
        "Social media links",
        "Basic SEO-friendly structure",
      ],
      pages: 10,
      sections: "5 - 7",
      pricing: "$150 - $200",
      deliveryTime: "2-3 weeks",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
    {
      packageName: "E-commerce Website Design",
      description: "Create an online store with a focus on user experience and sales.",
      deliverables: [
        "Custom e-commerce website design",
        "Product catalog with categories",
        "Shopping cart and secure checkout process",
        "Product search and filter functionality",
        "Inventory management system",
      ],
      pages: 15,
      sections: "5 - 7",
      pricing: "$250 - $300",
      deliveryTime: "3-4 weeks",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
    {
      packageName: "Student Portfolio Website",
      description: "Build a portfolio website to showcase your academic achievements and projects.",
      deliverables: [
        "Custom portfolio website design",
        "Gallery for project showcases",
        "Resume/CV page",
        "Contact information section",
      ],
      pages: 5,
      sections: "5 - 7",
      pricing: "$50 - $80",
      deliveryTime: "1-2 weeks",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
    {
      packageName: "Business Portfolio Website",
      description: "Create a professional portfolio website for your business or services.",
      deliverables: [
        "Custom business portfolio website design",
        "Multiple pages with service descriptions",
        "Contact and inquiry forms",
        "Integration of client testimonials",
      ],
      pages: 8,
      sections: "5 - 7",
      pricing: "$100 - $150",
      deliveryTime: "2-3 weeks",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
    {
      packageName: "Restaurant Website",
      description: "Design a website tailored to the needs of a restaurant, including menus and reservations.",
      deliverables: [
        "Custom restaurant website design",
        "Menu pages with high-quality images",
        "Online reservation system",
        "Location and contact information",
        "Integration of customer reviews",
      ],
      pages: 12,
      sections: "5 - 7",
      pricing: "$200 - $250",
      deliveryTime: "3-5 weeks",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
    {
      packageName: "Shopping Website",
      description: "Design an online custom shopping website platform with a focus on user experience and sales.",
      deliverables: [
        "Shopping cart and secure checkout process pages",
        "Product catalog with categories section",
        "Product search and filter functionality",
        "Live Chat or Customer Support pages",
        "Interactive Shop Map section",
        "Integration with Social Media",
        "Users SignUp and SignIn form",
        "Product Reviews and Ratings",
        "Products uploading form",
        "User Notifications page",
        "Wishlist/Favorites pages",
        "Users profile pages",
        "Discounts and Coupons",
        "Product Videos page",
        "Top banner/slider",
        "Contact form",
        "Content upload",
        "Responsive design",
        "Speed optimization",
        "Hosting setup (If need)",
      ],
      pages: 15,
      sections: "5 - 7",
      pricing: "$2,000 - $4,000",
      deliveryTime: "6-8 weeks",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
    {
      packageName: "School/College Website",
      description: "Design a custom and responsive website for educational institutions (school/college).",
      deliverables: [
        "Information pages about faculty, students, courses and programs",
        "Students and faculty SignUp and SignIn form",
        "News, Events and Announcements Section",
        "Students and faculty profile pages",
        "Online admission application forms",
        "Online results publication forms",
        "Interactive Campus Map section",
        "Integration with Social Media",
        "Photo and Video gallery pages",
        "Blog and Event Calendar pages",
        "Student/Parent Portal pages",
        "Feedback/Survey Forms",
        "Search Functionality",
        "Top banner/slider",
        "Contact form",
        "Content upload",
        "Responsive design",
        "Speed optimization",
        "Hosting setup (If need)",
      ],
      pages: 15,
      sections: "5 - 7",
      pricing: "$80 - $150",
      deliveryTime: "10 days",
      technologies: ["HTML5", "CSS3", "Bootstrap / Tailwind.css", "JavaScript", "React.js"],
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Web Design Packages</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {data.map((packageItem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-3">
                <h2 className="text-xl font-semibold text-gray-800">{packageItem?.packageName}</h2>
                <p className="text-gray-600">{packageItem?.description}</p>
              </div>
              <div className="mb-3">
                <h3 className="font-semibold">What We Offer:</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  {packageItem?.deliverables?.map((deliverable, subIndex) => (
                    <li key={subIndex}>{deliverable}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-3">
                <p className="text-gray-700">Pages: {packageItem?.pages}</p>
                <p className="text-gray-700">
                  Sections: {packageItem?.sections} {`(For each page)`}
                </p>
                <p className="text-gray-700">Pricing: {packageItem?.pricing}</p>
                <p className="text-gray-700">Delivery Time: {packageItem?.deliveryTime}</p>
              </div>
              <div className="mb-3">
                <h3 className="font-semibold">Uses Technologies:</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  {packageItem?.technologies?.map((technology, subIndex) => (
                    <li key={subIndex}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
