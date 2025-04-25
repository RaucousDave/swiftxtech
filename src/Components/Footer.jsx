import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#111827] text-[#f9fafb] px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-[#2563eb] mb-2">SwiftXTech</h2>
          <p className="text-[#f9fafb] text-sm">
            Digital solutions, engineered for speed.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4 text-[#f9fafb]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#d1d5db]">
            <li>
              <a href="#" className="hover:text-[#2563eb]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563eb]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563eb]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563eb]">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2563eb]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-4 text-[#f9fafb]">Get in Touch</h3>
          <p className="text-sm text-[#d1d5db]">Lagos, Nigeria</p>
          <p className="text-sm text-[#d1d5db] mt-1">hello@swiftxtech.dev</p>

          <div className="flex space-x-4 mt-4">
            <a href="#">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-xl hover:text-[#2563eb]"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl hover:text-[#2563eb]"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-xl hover:text-[#2563eb]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-[#374151] pt-6 text-center text-sm text-[#9ca3af]">
        <p>© 2025 SwiftXTech. All rights reserved.</p>
        <p className="text-xs mt-1">
          Built with 💙 and a whole lot of caffeine.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
