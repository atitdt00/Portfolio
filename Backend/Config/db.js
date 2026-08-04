import mongoose from 'mongoose'

const connectDB=async()=>{
   try{
      await mongoose.connect("mongodb://127.0.0.1:27017/PortFolio");
    console.log("connected database");
   }catch(error){
    console.log(error.message);
    process.exit(1)
   }

}

export default connectDB;