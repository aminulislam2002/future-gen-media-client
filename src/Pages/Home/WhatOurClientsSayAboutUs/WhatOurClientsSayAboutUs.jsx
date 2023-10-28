import { BiSolidUserPin } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const clientTestimonials = [
  {
    id: 1,
    name: "Sahin Ahamed",
    star: "2",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod elit, in laoreet metus malesuada sed. Ut lacinia ante sit amet quam feugiat, in egestas quam luctus.",
  },
  {
    id: 2,
    name: "Aiub Hasan",
    star: "5",
    comment:
      "Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.",
  },
  {
    id: 3,
    name: "MD. Alamgir",
    star: "4",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod elit, in laoreet metus malesuada sed. Ut lacinia ante sit amet quam feugiat, in egestas quam luctus.",
  },
  {
    id: 4,
    name: "Nuhad Mim",
    star: "3.5",
    comment:
      "Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.Pellentesque varius semper nunc, vel eleifend odio volutpat id. Praesent vel neque sit amet justo cursus bibendum a vel nulla. Vivamus eu auctor erat.",
  },
];

const WhatOurClientsSayAboutUs = () => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + " ...";
  };

  const generateStars = (starRating) => {
    const fullStars = Math.floor(starRating);
    const halfStar = starRating - fullStars === 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar className="w-5 h-5 text-yellow-500" key={i} />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt className="w-5 h-5 text-yellow-500" key="half" />);
    }

    while (stars.length < 5) {
      stars.push(<AiOutlineStar className="w-5 h-5 text-yellow-500" key={`empty-${stars.length}`} />);
    }

    return stars;
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getTextColor = (backgroundColor) => {
    const r = parseInt(backgroundColor.slice(1, 3), 16);
    const g = parseInt(backgroundColor.slice(3, 5), 16);
    const b = parseInt(backgroundColor.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000" : "#fff";
  };

  const getStarColor = () => {
    const colors = ["#FFD700", "#FFA500", "#FF6347", "#87CEEB", "#9370DB"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="bg-[#100E22]">
      <div className="container mx-auto py-5 md:py-10 lg:py-20">
        <div className="text-center mb-5 md:mb-10 lg:mb-20">
          <h1 className="text-3xl font-bold text-white">What Our Clients Say About Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clientTestimonials.map((testimonial) => (
            <div
              key={testimonial?.id}
              style={{
                background: getRandomColor(),
                color: getTextColor(getRandomColor()),
              }}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <div className="flex items-center">
                <div className="absolute -top-0 left-5">
                  <BiSolidUserPin className="w-10 h-10 rounded text-white flex items-center justify-center" />
                </div>
                <div className="my-3">
                  <p className="text-base font-bold">{testimonial?.name}</p>
                </div>
              </div>
              <div className="mb-8">
                <p>{truncateText(testimonial?.comment, 200)}</p>
              </div>
              <div className="text-gray-600 text-sm absolute bottom-4 grid grid-cols-5 gap-2">
                {generateStars(parseFloat(testimonial?.star)).map((star, index) => (
                  <span key={index} style={{ color: getStarColor() }}>
                    {star}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurClientsSayAboutUs;
