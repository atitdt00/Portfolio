import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters."],
      maxLength: [50, "First name connot exceed 50 characters."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters."],
      maxLength: [50, "Last name connot exceed  50 characters."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      match: [/^[0-9]{7,15}$/, "please enter a valid phone number"],
    },
    company: {
      type: String,
      trim: true,
      maxLength: [100, "company name connot exceed 100 characters."],
      default: "",
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowecase: true,
      match: [/^\S+@\S+\.\S+$/, "please enter a valid email address."],
    },
    subject: {
      type: String,
      required: [true, "subject is required."],
      trim: true,
      minlength: [5, "Subject must be at least 5 characters."],
      maxLength: [1000, "Subject connot exceed 1000"],
    },
  },
  { timestamps: true, versionKey: false },
);

export default mongoose.model("ContactUser", ContactSchema);
