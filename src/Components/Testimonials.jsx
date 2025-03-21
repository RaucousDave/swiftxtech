import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-[#6b7280] max-w-xl mx-auto mb-12">
          Real results. Real people. We don’t just deliver code—we deliver
          confidence.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-[#f9fafb] p-6 rounded-xl shadow-sm text-left">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-[#2563eb] text-2xl mb-4"
            />
            <p className="text-[#111827] mb-4">
              “SwiftXTech rebuilt our site from the ground up, and it made a
              huge difference. We saw a 60% speed increase and a spike in
              engagement within the first month.”
            </p>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-2xl text-[#6b7280]"
              />
              <div>
                <p className="font-semibold text-[#111827]">Amanda Okoro</p>
                <p className="text-sm text-[#6b7280]">CEO at FreshMart NG</p>
              </div>
            </div>
            <div className="mt-3 text-[#facc15]">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#f9fafb] p-6 rounded-xl shadow-sm text-left">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-[#2563eb] text-2xl mb-4"
            />
            <p className="text-[#111827] mb-4">
              “Professional, punctual, and super easy to work with. I’ll
              recommend SwiftXTech to any small business owner needing a solid
              web presence.”
            </p>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-2xl text-[#6b7280]"
              />
              <div>
                <p className="font-semibold text-[#111827]">Chuks Emeka</p>
                <p className="text-sm text-[#6b7280]">Freelance Photographer</p>
              </div>
            </div>
            <div className="mt-3 text-[#facc15]">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#f9fafb] p-6 rounded-xl shadow-sm text-left">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-[#2563eb] text-2xl mb-4"
            />
            <p className="text-[#111827] mb-4">
              “They understood my vision better than I did. I’m not techy at
              all, but they guided me every step and built a site I’m proud to
              show off.”
            </p>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-2xl text-[#6b7280]"
              />
              <div>
                <p className="font-semibold text-[#111827]">Hauwa Bello</p>
                <p className="text-sm text-[#6b7280]">
                  Founder of GlowUp Skincare
                </p>
              </div>
            </div>
            <div className="mt-3 text-[#facc15]">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
