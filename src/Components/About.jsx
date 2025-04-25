import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBolt,
  faLayerGroup,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="bg-[#f9fafb] py-[4rem] px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            Why SwiftXTech?
          </h2>
          <p className="text-[#6b7280] mb-6">
            We build sleek, fast, and scalable websites that don’t just look
            good—they perform. Whether you're a small business or a growing
            brand, we tailor every line of code to your goals.
          </p>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-[#2563eb] mr-3 text-xl">
              <FontAwesomeIcon icon={faCode} size="lg" />
            </span>
            <p className="text-[#111827]">
              Custom designs, no templates or copy-paste jobs.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-[#2563eb] mr-3 text-xl">
              <FontAwesomeIcon icon={faBolt} size="lg" />
            </span>
            <p className="text-[#111827]">
              Blazing-fast performance optimized for all devices.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-[#2563eb] mr-3 text-xl">
              <FontAwesomeIcon icon={faLayerGroup} size="lg" />
            </span>
            <p className="text-[#111827]">
              Clean, maintainable code that scales with your business.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-[#2563eb] mr-3 text-xl">
              {" "}
              <FontAwesomeIcon icon={faHandshake} size="lg" />
            </span>
            <p className="text-[#111827]">
              Reliable support and updates post-launch.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default About;
