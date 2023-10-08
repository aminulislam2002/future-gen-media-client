const OurWebServicesWhichWeProvide = () => {
  return (
    <div className="container mx-auto bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold ">Web Services Which We Provide</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-fuchsia-950 hover:text-white transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold ">1. Web Design</h2>
          <p className="mt-4">
            Elevate your online presence with our stunning web design solutions. We create visually captivating websites that
            leave a lasting impression.
          </p>
          <ul className="list-disc mt-4 ml-6 ">
            <li>Responsive design using HTML and CSS.</li>
            <li>Modern UI with Bootstrap and Tailwind CSS.</li>
            <li>Interactive experiences with JavaScript.</li>
            <li>Dynamic web applications using React.js.</li>
          </ul>
        </div>
        <div className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-fuchsia-950 hover:text-white transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold ">2. Web Development</h2>
          <p className=" mt-4">
            We bring your ideas to life with cutting-edge web development. Our team creates robust, scalable, and secure web
            solutions.
          </p>
          <ul className="list-disc mt-4 ml-6 ">
            <li>Backend development using JavaScript and Node.js.</li>
            <li>API development with Express.js for seamless integration.</li>
            <li>Database management with MongoDB.</li>
            <li>User authentication and authorization through Firebase.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurWebServicesWhichWeProvide;
