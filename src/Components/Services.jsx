import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faRocket,
  faPalette,
  faCubes,
  faShieldHalved,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div>
      <div className="bg-(--background) px-4 py-16">
        <h2 className="text-3xl font-bold text-[#111827] mb-4 text-center">
          What We Offer?
        </h2>
        <p className="text-[#6b7280] text-center mb-8">
          We don’t just build websites—we build digital experiences that work as
          hard as you do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition custom-hover-shadow">
            <div className="text-[#2563eb] text-3xl mb-4">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              Custom Web Development
            </h3>
            <p className="text-[#6b7280]">
              Tailor-made websites designed from scratch to reflect your brand,
              not somebody else’s template. We craft clean, scalable, and
              responsive sites using the latest tech.
            </p>
          </div>
          {/*  */}
          <div className="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition custom-hover-shadow">
            <div className="text-[#2563eb] text-3xl mb-4">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              {" "}
              Performance Optimization
            </h3>
            <p className="text-[#6b7280]">
              Speed is non-negotiable. We strip away the bloat, fine-tune every
              asset, and make sure your site loads faster than your competitors
              can blink.
            </p>
          </div>
          {/*  */}
          <div className="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition custom-hover-shadow">
            <div className="text-[#2563eb] text-3xl mb-4">
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              UI/UX Design
            </h3>
            <p className="text-[#6b7280]">
              Good design isn't just pretty—it guides users, earns trust, and
              boosts conversions. We create sleek, intuitive interfaces that
              make your users feel right at home.{" "}
            </p>
          </div>
          {/*  */}
          <div className="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition custom-hover-shadow">
            <div className="text-[#2563eb] text-3xl mb-4">
              <FontAwesomeIcon icon={faCubes} />
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              Component-Based Architecture
            </h3>
            <p className="text-[#6b7280]">
              We build websites like Lego—modular and easy to scale. Want to
              grow your site later? No stress. It's all built to evolve with
              you.
            </p>
          </div>
          {/*  */}
          <div className="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition custom-hover-shadow">
            <div className="text-[#2563eb] text-3xl mb-4">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              Security & Best Practices{" "}
            </h3>
            <p className="text-[#6b7280]">
              From HTTPS to clean code, we follow strict development standards
              to keep your site secure and your users safe.
            </p>
          </div>
          {/*  */}
          <div className="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition custom-hover-shadow">
            <div className="text-[#2563eb] text-3xl mb-4">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              Ongoing Support
            </h3>
            <p className="text-[#6b7280]">
              We don’t disappear after launch. Whether it’s fixing bugs,
              updating features, or just some friendly tech advice—we’re in your
              corner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
