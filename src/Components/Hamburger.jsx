function Hamburger({ toggle, open }) {
  return (
    <div>
      <div onClick={toggle} className="w-8 h-6 relative cursor-pointer">
        {/* Top Line */}
        <span
          className={`absolute left-0 top-0 h-[3px] w-full bg-black rounded transition-all duration-300 ease-in-out origin-center ${
            open ? "rotate-45 top-2.5" : ""
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`absolute left-0 top-2.5 h-[3px] w-full bg-black rounded transition-all duration-300 ease-in-out ${
            open ? "opacity-0" : ""
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`absolute left-0 bottom-0 h-[3px] w-full bg-black rounded transition-all duration-300 ease-in-out origin-center ${
            open ? "-rotate-45 bottom-2.5" : ""
          }`}
        ></span>
      </div>
    </div>
  );
}
export default Hamburger;
