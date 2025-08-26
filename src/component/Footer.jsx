


import React from 'react';
import { Twitter, Instagram, Send, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CryptoKhabar</h3>
            <p className="text-sm opacity-80">Your trusted source for cryptocurrency news, analysis, and market updates.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/bitcoin" className="hover:text-blue-400 transition-colors">
                  Bitcoin
                </a>
              </li>
              <li>
                <a href="/ethereum" className="hover:text-blue-400 transition-colors">
                  Ethereum
                </a>
              </li>
              <li>
                <a href="/defi" className="hover:text-blue-400 transition-colors">
                  DeFi
                </a>
              </li>
              <li>
                <a href="/nfts" className="hover:text-blue-400 transition-colors">
                  NFTs
                </a>
              </li>
              <li>
                <a href="/markets" className="hover:text-blue-400 transition-colors">
                  Markets
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded">
                <Instagram size={20} />
              </a>
              <a href="https://telegram.org" className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded">
                <Send size={20} />
              </a>
              <a href="https://discord.com" className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm opacity-80">&copy; 2025 CryptoNews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;