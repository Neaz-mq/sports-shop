import { useEffect } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {

  useEffect(() => {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Update the content of the span element with the current year
    document.getElementById('currentYear').textContent = currentYear;
  }, []); // Empty dependency array ensures that the effect runs only once on mount


  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-3">Email: info@sportsshop.com</p>
            <p>Phone: +880 1785286936</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/"></a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram />
              </a>

              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Page</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 border rounded-l"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center" id="footer">
          <p>&copy; <span id="currentYear"></span> Sports Shop. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;