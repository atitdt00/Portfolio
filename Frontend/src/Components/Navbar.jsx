function Navbar() {
  return (
    <>
      <ul className="w-full h-full text-[#f4effa] font-stretch-50% hidden md:flex justify-between flex-nowrap items-end sm:gap-2 md:gap-4 lg:gap-7 xl:gap-10 md:p-5">
        <button className=" text-[10px] sm:text-xl md:text-xl lg:text-3xl xl:text-4xl px-2 py-1 transition-all duration-700 hover:underline focus:bg-sky-800 focus:text-white rounded-sm">
          Home
        </button>
        <button className=" text-[10px] sm:text-xl md:text-xl lg:text-3xl xl:text-4xl px-2 py-1 transition-all duration-700 hover:underline focus:bg-sky-800 focus:text-white rounded-sm">
          About
        </button>
        <button className="shrink-0  text-[10px] sm:text-xl md:text-xl lg:text-3xl xl:text-4xl px-2 py-1 transition-all duration-700 hover:underline focus:bg-sky-800 focus:text-white rounded-sm">
          Skills
        </button>
        <button className="  text-[10px] sm:text-xl md:text-xl lg:text-3xl xl:text-4xl px-2 py-1 transition-all duration-700 hover:underline focus:bg-sky-800 focus:text-white rounded-sm">
          Projects
        </button>
        <button className="shrink-0 text-[10px] sm:text-xl md:text-xl lg:text-3xl xl:text-4xl px-2 py-1 transition-all duration-700 hover:underline focus:bg-sky-800 focus:text-white rounded-sm">
          Contact
        </button>
      </ul>
    </>
  );
}

export default Navbar;
