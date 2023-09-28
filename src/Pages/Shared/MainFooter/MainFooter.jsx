import { MdEmail, MdLocationOn, MdOutlineFacebook } from "react-icons/md";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";

import logo from "../../../assets/images/logo/logo-of-futuregen-media-two.png";

const MainFooter = () => {
  return (
    <div>
      {/* Footer for Large Screens */}
      <footer className="text-white lg:pt-20 pb-10 bg-sky-950">
        <div className="grid grid-cols-12">
          {/* Left Section */}
          <div className="lg:col-span-3 col-span-12 p-6">
            <img className="w-20 h-20 rounded-full border-2 border-blue-500 mx-auto" src={logo} alt="Institute Logo" />
            <p className="text-lg font-semibold text-green-500 text-center mt-4">FutureGen Media</p>
            <div className="mt-2">
              <IoMdCall className="w-4 h-4 me-1 text-green-500 inline-block"></IoMdCall>
              <span className="text-sm lg:text-base">01719-006757</span>
            </div>
            <div className="mt-2">
              <MdEmail className="w-4 h-4 me-1 text-green-500 inline-block"></MdEmail>
              <span className="lg:text-sm text-base">info.futuregenmedia@gmail.com</span>
            </div>
            <div className="mt-2">
              <MdLocationOn className="w-4 h-4 me-1 text-green-500 inline-block"></MdLocationOn>
              <span className="lg:text-sm text-base">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="lg:col-span-3 col-span-12 p-6">
            <span className="footer-title text-xl block mb-4">Quick Links</span>
            <div className="mt-2">
              <a className="link link-hover block text-base py-1">DSHE</a>
              <a className="link link-hover block text-base py-1">BANBEIS</a>
              <a className="link link-hover block text-base py-1">BD National Portal</a>
              <a className="link link-hover block text-base py-1">Ministry of Education</a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3 col-span-12 p-6">
            <span className="footer-title text-xl block mb-4">Legal</span>
            <div className="mt-2">
              <a className="link link-hover block text-base py-1">Terms of Use</a>
              <a className="link link-hover block text-base py-1">Privacy Policy</a>
              <a className="link link-hover block text-base py-1">Cookie Policy</a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="lg:col-span-3 col-span-12 p-6">
            <span className="footer-title text-xl block mb-4">Follow us</span>
            <div className="mt-2 flex justify-around items-start gap-4">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=61551507147647&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                >
                  <MdOutlineFacebook className="w-6 h-6 lg:w-8 lg:h-8 bg-white text-blue-700" />
                </a>
              </div>
              <div>
                <Link to="#" className="transition-colors duration-300">
                  <AiFillTwitterCircle className="w-6 h-6 lg:w-8 lg:h-8 bg-white text-blue-700" />
                </Link>
              </div>
              <div>
                <Link to="#" className="transition-colors duration-300">
                  <AiFillLinkedin className="w-6 h-6 lg:w-8 lg:h-8 bg-white text-blue-700" />
                </Link>
              </div>
              <div>
                <Link to="#" className="transition-colors duration-300">
                  <AiFillYoutube className="w-6 h-6 lg:w-8 lg:h-8 bg-white text-red-700" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <footer className="bg-black text-neutral-content py-4 text-center">
        <p className="text-sm">
          Copyright © 2023 - All rights reserved by{" "}
          <span className="text-blue-500">
            <Link>FutureGen Media</Link>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default MainFooter;
