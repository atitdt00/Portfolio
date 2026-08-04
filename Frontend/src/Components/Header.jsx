import Navbar from "./Navbar";
// import logo from "../images/Atit's logo.png"
function Header() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full h-auto flex items-center gap-2 ">
        {/* <img src={logo} alt="logo" className=" sm:w-15 w-10 h-auto  object-cover rounded-4xl brightness-70"/> */}
        <p className="w-full text-[#c2b6cf] font-bold space-x-1">
          <span className="w-full text-[10px] xs:text-[20px] sm:text-xl lg:text-4xl xl:text-5xl tracking-wider bg-clip-text text-transparent bg-linear-to-l from-violet-300 to-sky-400">Port Folio</span>
        </p>
      </div>
      <div className="w-full p-10"> 
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
