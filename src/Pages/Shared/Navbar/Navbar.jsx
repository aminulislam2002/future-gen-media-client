import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

import "./NavBar.css";

import { useEffect, useState } from "react";

import logo from "../../../assets/images/logo/logo-of-futuregen-media-two.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isOurWorksDropdownOpen, setIsOurWorksDropdownOpen] = useState(false);
  const [isOurClientsDropdownOpen, setIsOurClientsDropdownOpen] = useState(false);
  const [isOurServicesDropdownOpen, setIsOurServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain point (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add the "fixed-navbar" class to the navbar when isScrolled is true
  const navbarClass = isScrolled ? "navbar fixed-navbar bg-blue-950" : "navbar relative z-[19] bg-blue-950";

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleOurWorksDropdown = () => {
    setIsOurWorksDropdownOpen(!isOurWorksDropdownOpen);
  };

  const toggleOurClientsDropdown = () => {
    setIsOurClientsDropdownOpen(!isOurClientsDropdownOpen);
  };

  const toggleOurServicesDropdown = () => {
    setIsOurServicesDropdownOpen(!isOurServicesDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsOurWorksDropdownOpen(false);
    setIsOurClientsDropdownOpen(false);
    setIsOurServicesDropdownOpen(false);
  };

  const navOptions = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>

      {/* About Us Dropdown */}
      <li
        className={`relative group text-white ${isAboutDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleAboutDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isAboutDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleAboutDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>About Us</p>
          <span className={`${isAboutDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isAboutDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/our-team">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Our Team</li>
            </Link>
            <Link to="/history-of-future-gen-media">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">History of FutureGen</li>
            </Link>
            <Link to="/mission-and-vision">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Mission And Vision</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Our services dropdown */}
      <li
        className={`relative group text-white ${isOurServicesDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleOurServicesDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isOurServicesDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleOurServicesDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Our Services</p>
          <span className={`${isOurServicesDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isOurServicesDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="website-development">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Website Development</li>
            </Link>
            <Link to="website-design">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Website Design</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* OurWorks Dropdown */}
      <li
        className={`relative group text-white ${isOurWorksDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleOurWorksDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isOurWorksDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleOurWorksDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Our Works</p>
          <span className={`${isOurWorksDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isOurWorksDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="website">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Website</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* OurClients Dropdown */}
      <li
        className={`relative group text-white ${isOurClientsDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleOurClientsDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isOurClientsDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleOurClientsDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Our Clients</p>
          <span className={`${isOurClientsDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isOurClientsDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/meet-with-our-clients">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Meet with our clients</li>
            </Link>
            <Link to="/our-clients-feedback">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Our clients feedback</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Blogs Navbar */}
      <li className="text-white">
        <Link to="/blogs">Blogs</Link>
      </li>

      {/* Contact Navbar */}
      <li className="text-white">
        <Link to="/contacts">Contacts</Link>
      </li>
    </>
  );

  return (
    <>
      <div className={navbarClass}>
        <div className="navbar-start flex w-full lg:w-4/12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu className="text-white h-6 w-6"></AiOutlineMenu>
            </label>
            <ul tabIndex={0} className="menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-blue-950 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img className="w-10 h-10" src={logo} alt="FutureGen Media Logo" />
            <div className="text-3xl font-bold text-white">FutureGen Media</div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex justify-center items-center lg:w-8/12">
          {/* Use a mobile-friendly menu icon here for small screens */}
          <div className="lg:hidden">
            <AiOutlineMenu className="text-2xl cursor-pointer" />
          </div>
          <ul className="flex justify-center items-center gap-8 menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end flex justify-end lg:justify-center items-center lg:w-0/12">
          <Link to="/onlineApplyForm">
            <button className="animated-button">Online Apply</button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
