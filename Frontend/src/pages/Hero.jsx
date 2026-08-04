import atit from "../images/Atit Dangaura Tharu.png";
function Hero() {
  return (
    <>
      <div className="w-full h-auto  pl-10 bg-[#06202d] relative overflow-hidden">
        <div className="w-full h-auto min-h-270">
          <section className="w-full h-auto mx-auto py-20 px-2">
            <h1 className="w-full font-stretch-105% lg:text-[8rem] md:text-6xl sm:text-5xl xs:text-4xl ss:text-[30px] text-[20px] font-bold  lg:tracking-[1rem] md:tracking-[.9rem] sm:tracking-[.8rem] text-[#8316f7]  text-shadow-lg text-shadow-sky-300   lg:py-5 md:py-3 sm:py-2 py-1 rounded-lg block">
              WEB DEVELOPER
            </h1>
            <p className="w-full max-w-225 font-bold text-pretty space-y-5 py-20">
              <span className="w-full block tracking-widest xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl text-[10px] text-[#cfc5d9]">
                {" "}
                Hello! I'm Atit Dangaura Tharu,
              </span>
              <span className="xl:leading-15 lg:leading-10 md:leading-8 sm:leading-5 leading-3  text-[10px] sm:text-xl md:text-2xl lg:text-3xl flex -max-sm:flex-wrap text-[#695c76]">
                A passionate web developer. I specialize in developing modern
                web applications using React, Node.js, Express.js, MongoDB,
                JavaScript, and Tailwind CSS. I enjoy solving problems, learning
                new technologies, and turning ideas into functional, responsive
                websites.
              </span>
            </p>
            <div className="w-full mx-auto flex gap-10  p-5">
              <button className="lg:text-3xl md:text-2xl sm:text-xl xs:text-md ss:text-sm text-white backdrop-blur-md bg-sky-700 rounded-xl lg:px-5 md:px-4 sm:px-3 xs:px-2 ss:px-1 py-3">
                Hire Me
              </button>
              <button className="lg:text-3xl md:text-2xl sm:text-xl xs:text-md ss:text-sm text-white backdrop-blur-md bg-sky-700 rounded-xl lg:px-5 md:px-4 sm:px-3 px-2 lg:py-3 sm:py-1 ">
                CV
              </button>
            </div>
          </section>
        </div>
        <section className="w-full h-auto absolute left-0 lg:left-230 top-130 lg:top-20 ">
          <img
            className="object-contain w-250 h-fit drop-shadow-white drop-shadow-2xl rounded-3xl"
            src={atit}
            alt="Atit"
          />
        </section>
      </div>
    </>
  );
}

export default Hero;
