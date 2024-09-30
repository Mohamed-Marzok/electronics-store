import { productById } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import Nav from "../components/layout/Nav";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProductById() {
  const product = productById;

  // Function to create WhatsApp URL
  const handleWhatsAppClick = () => {
    const phoneNumber = product.phone;
    const message = `Hello, I'm interested in ${product.title}.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Nav />
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-5 dark:bg-gray-800">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 dark:text-white">
          {product.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <Slider {...settings} className="w-full">
              {product.imagesURL.map((image, index) => (
                <div key={index} className="h-full">
                  <img
                    src={image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-2 dark:text-gray-300">
                Price: <span className="text-green-600">${product.price}</span>
              </p>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                {product.body}
              </p>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                Phone: <span className="text-blue-600">{product.phone}</span>
              </p>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                Likes:{" "}
                <span className="text-red-600">{product.numOfLikes}</span>
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-500"
            >
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
