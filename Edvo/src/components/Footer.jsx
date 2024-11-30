import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly py-10 bg-gray-100 text-gray-800">
      {/* Column 1 */}
      <div>
        <h3 className="text-lg font-bold mb-3">Pricing</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-purple-600">Pricing Plans</a></li>
          <li><a href="#" className="hover:text-purple-600">API Pricing</a></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-lg font-bold mb-3">Products</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-purple-600">Avatar Video</a></li>
          <li><a href="#" className="hover:text-purple-600">API</a></li>
          <li><a href="#" className="hover:text-purple-600">Video Translation</a></li>
          <li><a href="#" className="hover:text-purple-600">Personalized Video</a></li>
          <li><a href="#" className="hover:text-purple-600">Interactive Avatar</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="text-lg font-bold mb-3">Industry</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-purple-600">Agencies</a></li>
          <li><a href="#" className="hover:text-purple-600">E-Learning</a></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h3 className="text-lg font-bold mb-3">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-purple-600">Blog</a></li>
          <li><a href="#" className="hover:text-purple-600">Customer Stories</a></li>
          <li><a href="#" className="hover:text-purple-600">Affiliate Program</a></li>
          <li><a href="#" className="hover:text-purple-600">Webinars</a></li>
          <li><a href="#" className="hover:text-purple-600">Help Center</a></li>
        </ul>
      </div>

      {/* Column 5 */}
      <div>
        <h3 className="text-lg font-bold mb-3">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-purple-600">About Us</a></li>
          <li><a href="#" className="hover:text-purple-600">Careers</a></li>
          <li><a href="#" className="hover:text-purple-600">Trust & Safety</a></li>
          <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
