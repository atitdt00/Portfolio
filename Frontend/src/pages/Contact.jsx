// import { BsTelephone } from "react-icons/bs";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios"
const API = import.meta.env.VITE_API_URL;


function Contact() {
  const { register, handleSubmit, reset} = useForm();

  const onsubmit= async(data)=>{
    // console.log(data)
      try{
          const result= await axios.post(`${API}/api/contact`, data);
          reset();
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="w-full h-auto text-white bg-blend-saturation bg-slate-700 p-15">
      <div className="flex justify-around px-20">
        <section className="w-full space-y-20 p-20">
          <div>
            <h1 className="text-white text-6xl">Contact Information</h1>
          </div>
          <address className="flex flex-col gap-10">
            <div className="flex items-center">
              <h1>Phone No:</h1>
              {/* <span className="text-white text-2xl">
                <BsTelephone />
              </span> */}
              <a href="tel: +977 9868892772" className="text-white">
                +977 9868892772
              </a>
            </div>
            <div className="flex items-center">
              <h1>Location:</h1>
              {/* <span className="text-white text-2xl">
                <FaMapMarkerAlt />
              </span> */}
              <p className="text-white ">Kirtipur-10 TownPlanning, Kathmandu</p>
            </div>
            <div className="flex items-center">
              <h1>Email:</h1>
              <span className="text-white text-2xl">
                {/* <FaMapMarkerAlt /> */}
              </span>
              <p className="text-white ">atitdt00@gmail.com</p>
            </div>
            <div className="flex items-center">
              <h1>GitHub:</h1>
              <span className="text-white text-2xl">
                {/* <FaMapMarkerAlt /> */}
              </span>
              <p className="text-white">https://github.com/atitdt00</p>
            </div>
            <div className="flex items-center">
              <h1>LinkedIn:</h1>
              <span className="text-white text-2xl">
                {/* <FaMapMarkerAlt /> */}
              </span>
              <p className="text-white">
                www.linkedin.com/in/atit-dangaura-tharu-b336402a4
              </p>
            </div>
          </address>
        </section>
        <section className="text-white w-full  h-auto mx-auto p-10">
          <h1 className="text-6xl p-10">Contact Form</h1>
          <form onSubmit={handleSubmit(onsubmit)} className="w-full h-auto mx-auto bg-slate-600 p-10 rounded ">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-2xl  text-heading bg-slate-500 rounded-xl  appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required 
                  {...register("firstName", {required:true})}
                />
                <label
                  htmlFor="floating_first_name"
                  className="absolute text-2xl text-body duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-2"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-2xl  text-heading bg-slate-500 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required
                  {...register("lastName", {required:true})}
                />
                <label
                  htmlFor="floating_last_name"
                  className="absolute text-2xl text-body duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-2"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div className="relative z-0 w-full mb-5  group">
                <input
                  type="tel"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-2xl  text-heading bg-slate-500 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required
                  {...register("phone", {required:true})}
                />
                <label
                  htmlFor="floating_phone"
                  className="absolute text-2xl text-body duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-2"
                >
                  Phone number
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-2xl  text-heading bg-slate-500 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required
                  {...register("company", {required:true})}
                />
                <label
                  htmlFor="floating_company"
                  className="absolute text-2xl text-body duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-2"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-2xl  text-heading bg-slate-500 rounded-xl  appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
                {...register("email", {required:true})}
              />
              <label
                htmlFor="floating_email"
                className="absolute text-2xl text-body duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-2"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_subject"
                id="floating_subject"
                className="block py-2.5 px-0 w-full text-2xl text-heading bg-slate-500 rounded-xl  appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
                {...register("subject", {required:true})}
              />
              <label
                htmlFor="floating_subject"
                className="absolute text-2xl text-body duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-left peer-focus:inset-s-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-2"
              >
                Subject
              </label>
            </div>
            <button
              type="submit"
              className="text-white text-2xl bg-slate-500 rounded-xl box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base px-4 py-2.5 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
