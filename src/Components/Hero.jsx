function Hero() {
  return (
    <div>
      <div
        id="hero"
        className="flex h-[100vh] justify-center items-center flex-col gap-4 px-[30px]"
      >
        <h1 className="text-5xl font-semibold text-center">
          Build Fast. Launch Smart.
        </h1>
        <p className="text-[16px] text-center text-(--secondary)">
          Whether you're a startup or a growing business, we craft sleek, modern
          websites built to convert and scale.
        </p>
        <div className="flex gap-10">
          <button className="bg-[#2563eb] px-[20px] py-[10px] text-white">
            Get Started
          </button>
          <button className="bg-black text-white px-[20px] py-[10px]">
            See our work
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
