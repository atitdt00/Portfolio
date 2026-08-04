import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Skills() {
  return (
    <div className="w-full min-h-100 bg-[#0F3040] p-20">
      <h1 className="text-center text-7xl text-white pb-10">SKILLS</h1>
        <div className="w-full h-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-10 ">  
            <div className="text-white flex justify-center items-center gap-10 p-20 rounded border-2 border-slate-700/80">
              <i className="text-5xl"><FaHtml5 /></i>
              <h1 className="text-5xl">HTML 5</h1>
              <span className="text-xl">25%</span>
            </div>
             <div className="text-white flex items-center gap-10 p-20 rounded border-2 border-slate-700/80">
              <i className="text-5xl"><FaCss3Alt /></i>
              <h1 className="text-5xl">CSS 5</h1>
              <span className="text-xl">25%</span>
            </div>
             <div className="text-white flex items-center gap-10 p-20 rounded border-2 border-slate-700/80">
              <i className="text-5xl"><FaNodeJs /></i>
              <h1 className="text-5xl">Javascript</h1>
              <span className="text-xl">25%</span>
            </div>
             <div className="text-white flex justify-center items-center gap-10 p-20 rounded border-2 border-slate-700/80 shadow-2xl shadow-slate-700 hover:shadow-slate-500 hover:-translate-y-3 hover:scale-105 transition duration-500">
              <i className="text-5xl"><FaReact /></i>
              <h1 className="text-5xl">React</h1>
              <span className="text-xl">25%</span>
            </div>
        </div>
    </div>
  );
}

export default Skills;
