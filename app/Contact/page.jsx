"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-black lg:pt-12">
      <motion.section
        className="relative bg-black text-white py-16 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden container mx-auto py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {/* BACKGROUND TEXT */}
        <motion.h1
          variants={fadeUp}
          className="
            absolute text-[14vw] sm:text-[11vw] md:text-[15vw] lg:text-[6vw]
            font-bold text-gray-100/10 tracking-wide leading-relaxed
            top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none
            pointer-events-none z-20
          "
        >
          CONTACT
        </motion.h1>

        {/* MAIN GRID */}
        <motion.div
          variants={container}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-10"
        >
          {/* LEFT SIDE */}
          <motion.div variants={fadeUp}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
              Get in touch
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white mb-8 max-w-md leading-relaxed">
              Exclusive from Kankal Kochi Media: Bringing you untold stories,
              vibrant events, and real voices that define the true spirit of Kochi.
            </motion.p>

            <motion.div variants={container} className="flex flex-col space-y-4">
              {[
                {
                  icon: <Mail className="w-6 h-6 text-white" />,
                  label: "Email us",
                  value: "kankalmedia@gmail.com",
                },
                {
                  icon: <Phone className="w-6 h-6 text-white" />,
                  label: "Call us",
                  value: "+91 9999 999 999",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  label: "Our location",
                  value:
                    "Manglassery Tower, Elcor Rd, opposite Ganapathy Temple, North Kalamassery, Kalamassery, Kochi, Kerala 683104",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-between border border-gray-700 rounded-lg p-4 hover:border-[#00b7ff] transition-all backdrop-blur-sm bg-black/40"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-4 bg-gray-100/10 backdrop-blur-sm rounded-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-sm font-medium max-w-[260px]">{item.value}</p>
                    </div>
                  </div>
                  <div className="rounded-full p-3 bg-gray-100/10">
                    <ArrowUpRight className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={fadeUp}
            className="border border-gray-700 rounded-sm p-6 sm:p-8 bg-black/60 backdrop-blur-sm h-full"
          >
            <form className="space-y-4">
              <motion.input
                variants={fadeUp}
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100/10 rounded-sm px-4 py-4 xl:py-6 text-sm placeholder-gray-500 focus:outline-none focus:border-[#00b7ff] transition-all"
              />
              <motion.input
                variants={fadeUp}
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100/10 rounded-sm px-4 py-4 xl:py-6 text-sm placeholder-gray-500 focus:outline-none focus:border-[#00b7ff] transition-all"
              />
              <motion.textarea
                variants={fadeUp}
                rows="4"
                placeholder="Message"
                className="w-full bg-gray-100/10 rounded-sm px-4 py-8 xl:py-10 text-sm placeholder-gray-500 focus:outline-none focus:border-[#00b7ff] transition-all"
              ></motion.textarea>
              <motion.button
                variants={fadeUp}
                type="submit"
                className="w-full bg-white text-black py-4 rounded-sm font-semibold transition-all"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* MAP */}
        <motion.div
          variants={fadeUp}
          className="mt-12 rounded-lg overflow-hidden border border-gray-800 relative z-10"
        >
          <iframe
            title="Kochi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.310619903968!2d76.3096!3d10.0491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c7d44e7d8a9%3A0x9a3d1aaf8e35184!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1688654321234!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.section>
    </div>
  );
}
