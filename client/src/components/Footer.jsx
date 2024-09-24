import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-950 text-white py-6'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between'>
        {/* Logo or Brand Name */}
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <h1 className='text-3xl font-bold text-purple-500'>GameSquadron</h1>
          <p className='mt-2 text-gray-400'>Elevate your game with the best squad.</p>
        </div>
        
        {/* Navigation Links */}
        <div className='flex flex-col md:flex-row mb-4 md:mb-0'>
          <a href="#home" className='text-gray-300 hover:text-white mx-2'>Home</a>
          <a href="#about" className='text-gray-300 hover:text-white mx-2'>About</a>
          <a href="#contact" className='text-gray-300 hover:text-white mx-2'>Contact</a>
          <a href="#privacy" className='text-gray-300 hover:text-white mx-2'>Privacy Policy</a>
        </div>
        
        {/* Social Media Links */}
        <div className='flex justify-center md:justify-end'>
          <a href="https://facebook.com" className='text-gray-300 hover:text-white mx-2'>
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" className='text-gray-300 hover:text-white mx-2'>
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" className='text-gray-300 hover:text-white mx-2'>
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://instagram.com" className='text-gray-300 hover:text-white mx-2'>
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
      
      <div className='text-center mt-4'>
        <p className='text-gray-500'>© 2024 GameSquadron. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
