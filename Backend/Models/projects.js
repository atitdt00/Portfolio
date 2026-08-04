import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: [true, "Project name is required."],
      trim: true,
      minlength: [2, "Project name must be at least 2 characters."],
      maxlength: [100, "Project name cannot exceed 100 characters."],
    },

    technology: {
      type: String,
      required: [true, "Technology is required."],
      trim: true,
      minlength: [2, "Technology name must be at least 2 characters."],
      maxlength: [100, "Technology name cannot exceed 100 characters."],
    },

    image: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Indexes
skillSchema.index({ technology: 1 });
skillSchema.index({ createdAt: -1 });

export default mongoose.model("Skill", skillSchema);