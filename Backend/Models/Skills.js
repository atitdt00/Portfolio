import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Skill title is required."],
      trim: true,
      minlength: [2, "Skill title must be at least 2 characters."],
      maxlength: [100, "Skill title cannot exceed 100 characters."],
    },

    level: {
      type: String,
      required: [true, "Skill level is required."],
      trim: true,
      enum: {
        values: ["Beginner", "Intermediate", "Advanced", "Expert"],
        message: "Level must be Beginner, Intermediate, Advanced, or Expert.",
      },
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
skillSchema.index({ title: 1 });
skillSchema.index({ level: 1 });
skillSchema.index({ createdAt: -1 });

export default mongoose.model("skill", skillSchema);