import logo from "../images/logo.png";

function Projects() {
  return (
    <div className="w-full h-auto text-white bg-[#273338] p-10">
      <div className="grid place-items-center">
        <h1 className="inline-block text-6xl font-bold tracking-widest text-[#8316f7]  py-5 mb-5">
          PROJECTS
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-5 place-items-center ">
        <div className="shadow-md hover:shadow-xl shadow-purple-600 hover:translate-x-2 transition duration-500 group">
          <span className="bg-neutral-primary-soft block w-full overflow-hidden border border-default rounded-xl shadow-xs hover:bg-neutral-secondary-medium">
            <div className="overflow-hidden">
              <img
                src={logo}
                alt="image"
                className="w-full h-50  transition-all duration-500 group-hover:scale-115"
              />
            </div>
            <div className="mt-5 space-y-10 p-5">
              <h5 className=" text-6xl font-semibold tracking-tight text-heading leading-8">
                BigSale
              </h5>
              <div className="flex flex-wrap gap-10">
                <p className="text-body">Reactjs</p>
                <p className="text-body">Mongodb</p>
                <p>Node js</p>
                <p>express js</p>
                <p>TailwindCSS</p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
