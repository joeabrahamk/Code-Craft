import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#2d2d2d] py-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-[#e5601c]">
            Thank you for visiting
          </h2>
        </div>
        <p className="text-gray-400">
          © 2024 Your Company. All rights reserved.
        </p>
        <motion.p
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 text-gray-500 hover:text-white cursor-pointer"
        >
          Terms of Service | Privacy Policy
        </motion.p>
      </motion.div>
    </footer>
  );
}

export default Footer;
