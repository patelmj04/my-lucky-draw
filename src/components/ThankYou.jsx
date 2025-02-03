import React from 'react';
import { Link } from 'react-router-dom';

export function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-[#DC0A17] mb-4">Thank You for Entering!</h1>
        <p className="text-lg mb-6">
          Your lucky draw entry has been received. We appreciate your participation and wish you the best of luck!
        </p>
        <Link to="/">
          <button className="bg-[#DC0A17] hover:bg-[#b00813] text-white p-2 rounded">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
