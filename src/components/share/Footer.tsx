import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-8 pb-4">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/4 mb-6 lg:mb-0 lg:pl-3">
            <h2 className="font-bold text-center md:text-left">
              <span className="text-2xl">Key</span>
              <span className="text-common-600 text-3xl">Mach</span>
            </h2>
          </div>
          <div className="w-1/3 md:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/products" className="hover:underline">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs" className="hover:underline">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactUs" className="hover:underline">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-1/3 md:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">LEGAL</h2>
            <ul className="space-y-2">
              <li>
                <p className="hover:underline cursor-pointer">Terms of use</p>
              </li>
              <li>
                <p className="hover:underline cursor-pointer">Privacy policy</p>
              </li>
              <li>
                <p className="hover:underline cursor-pointer">Cookie policy</p>
              </li>
            </ul>
          </div>

          <div className="w-1/3 md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100011564174412"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/masudmahi05"
                  target="_blank"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@mashudurrahmanmahi6892"
                  target="_blank"
                  className="hover:underline"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <div>
            &copy; Copyright 2024 - All right reserved by
            <p className="font-semibold inline-block pl-1">
              Key
              <span className="text-common-600">Mach</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
