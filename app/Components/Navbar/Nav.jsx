'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nav links
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Works', href: '/works' },
    { name: 'Contact us', href: '/contact' },
  ];

  // Motion variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.4 },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -30,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Images/LG2.png"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="w-auto h-12 md:h-14 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[15px]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Fullscreen Animated Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 text-center z-40"
          >
            {/* Close Button Inside Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="absolute top-6 right-6"
            >
              <X
                size={32}
                className="text-gray-200 hover:text-white transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </motion.div>

            {/* Animated Links */}
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-light tracking-wide transition ${
                    pathname === link.href
                      ? 'text-purple-400'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Footer Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className="pt-10 text-sm text-gray-400"
            >
              © 2025 Flipmaxx. All Rights Reserved.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
