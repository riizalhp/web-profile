import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Rizal Hanifa Pratama. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
