import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <p className="title">Foodily.com</p>
        <p>
          Foodily Ever After is a place where you can please your soul and tummy
          with delicious food recipes of all cuisines. And our service is
          absolutely free.
        </p>
        <p>&copy; 2021 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="heading">Contact Us</p>
        <p>foodily@gmail.com</p>
        <p>+92 309 4782394</p>
        <p>F-12 Sector V Islamabad</p>
      </div>
      <div className="footer-section">
        <p className="heading">Socials</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white bg-blue-600 rounded " size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white bg-blue-400 rounded" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white bg-red-600 rounded" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
