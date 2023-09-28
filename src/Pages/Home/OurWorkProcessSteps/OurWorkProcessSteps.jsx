const OurWorkProcessSteps = () => {
  const steps = [
    { title: "Accepting the Project", description: "Initiate the project after receiving client approval." },
    { title: "Requirement Analysis", description: "Gather and document project requirements." },
    { title: "Planning", description: "Create a detailed project plan, including timelines and resources." },
    { title: "Design & Development", description: "Design and develop the project according to the plan." },
    { title: "Testing", description: "Thoroughly test the project to identify and fix any issues." },
    { title: "Client Review", description: "Share the project with the client for feedback and review." },
    { title: "Revisions", description: "Incorporate client feedback and make necessary revisions." },
    { title: "Final Testing", description: "Perform a final round of testing to ensure quality." },
    { title: "Delivery", description: "Deliver the completed project to the client." },
    { title: "Client Feedback", description: "Collect feedback from the client for future improvements." },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Our Work Process Steps</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-3 border rounded-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2">{step?.title}</h3>
              <p className="text-gray-600">{step?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkProcessSteps;
