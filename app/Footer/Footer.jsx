"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaSpotify,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#06091A] text-gray-300 py-12 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
      {/* Grid Container */}
      <div
        className="
          grid gap-10 md:gap-12 lg:gap-16
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        "
      >
        {/* Column 1 - Logo & About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/Images/LG2.png"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="w-auto h-12 md:h-14 cursor-pointer"
            />
            <div>
              <h2 className="text-white font-bold text-lg">KANKAL</h2>
              <p className="text-sm text-[#a38eff] font-semibold tracking-wide">
                KOCHI
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Exclusive from Kankal Kochi Media: Bringing you untold stories,
            vibrant events, and real voices that define the true spirit of Kochi.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4 text-gray-400">
            <span className="text-sm w-full sm:w-auto">Follow Us:</span>
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaPinterestP, FaSpotify].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="w-5 h-5 cursor-pointer hover:text-white transition-colors duration-300"
                />
              )
            )}
          </div>
        </div>

        {/* Column 2 - Information */}
        <div>
          <h3 className="text-[#FFAC4B] font-semibold text-lg mb-4">
            Information
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Works", "About Us", "Our Team", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-[#FFAC4B] font-semibold text-lg mb-4">
            Contact Us
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Manglassery Tower, Elcor Rd, opposite Ganapathy Temple,
            North Kalamassery, Kalamassery, Kochi, Kerala 683104
          </p>
          <p className="text-sm text-gray-400 mb-2">+91 </p>
          <p className="text-sm text-gray-400">kankalmedia@gmail.com</p>
        </div>

        {/* Column 4 - Subscribe */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Subscribe More Info
          </h3>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 mb-3 rounded-md bg-transparent border border-gray-600 text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500"
          />
       <button
  className="
    w-full py-2 rounded-md font-semibold
    bg-gradient-to-r from-violet-500 to-violet-700
    hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]
    transition-all duration-300
    text-white
  "
>
  View All
</button>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kankal Kochi Media. All rights reserved.
      </div>
    </footer>
  );
}
