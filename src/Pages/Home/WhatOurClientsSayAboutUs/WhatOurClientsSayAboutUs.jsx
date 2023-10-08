import { BiSolidUserRectangle } from "react-icons/bi";

const clientTestimonials = [
  {
    id: 1,
    name: "Sahin Ahamed",
    email: "sahinahamed124@gmail.com",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod elit, in laoreet metus malesuada sed. Ut lacinia ante sit amet quam feugiat, in egestas quam luctus.",
    timestamp: "October 15, 2023, 10:30 AM",
  },
  {
    id: 2,
    name: "Aiub Hasan",
    email: "aiubhasan145@gmail.com",
    comment:
      "Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.",
    timestamp: "October 16, 2023, 2:45 PM",
  },
  {
    id: 3,
    name: "MD. Alamgir",
    email: "alamgir027458@gmail.com",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod elit, in laoreet metus malesuada sed. Ut lacinia ante sit amet quam feugiat, in egestas quam luctus.",
    timestamp: "October 15, 2023, 10:30 AM",
  },
  {
    id: 4,
    name: "",
    email: "jane@example.com",
    comment:
      "Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.",
    timestamp: "October 16, 2023, 2:45 PM",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + " ...";
};

const WhatOurClientsSayAboutUs = () => {
  return (
    <div className="container mx-auto bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">What Our Clients Say About Us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {clientTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="flex items-center mb-4">
              <div>
                <BiSolidUserRectangle className="w-10 h-10 rounded-full"></BiSolidUserRectangle>
              </div>
              <div className="ml-3">
                <p className="text-base font-bold">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.email}</p>
              </div>
            </div>
            <div className="mb-8">
              <p className="text-gray-800">{truncateText(testimonial.comment, 200)}</p>
            </div>
            <div className="text-gray-600 text-sm absolute bottom-4">
              <p>{testimonial.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatOurClientsSayAboutUs;
