import mongoose from "mongoose";
import Skill from "../Models/Skills.js";

// =======================================
// Get All Skills
// =======================================
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: skills.length,
      data: skills,
      message: "Skills fetched successfully.",
    });
  } catch (error) {
    console.error("Get Skills Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Get Skill By ID
// =======================================
export const getSkillById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Skill ID.",
      });
    }

    const skill = await Skill.findById(id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: skill,
      message: "Skill fetched successfully.",
    });
  } catch (error) {
    console.error("Get Skill Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Create Skill
// =======================================
export const createSkill = async (req, res) => {
  try {
    const { title, level, image } = req.body;

    if (!title || !level) {
      return res.status(400).json({
        success: false,
        message: "Title and level are required.",
      });
    }

    const newSkill = await Skill.create({
      title,
      level,
      image,
    });

    return res.status(201).json({
      success: true,
      data: newSkill,
      message: "Skill created successfully.",
    });
  } catch (error) {
    console.error("Create Skill Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Update Skill
// =======================================
export const updateSkill = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Skill ID.",
      });
    }

    const updatedSkill = await Skill.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSkill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedSkill,
      message: "Skill updated successfully.",
    });
  } catch (error) {
    console.error("Update Skill Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Delete Skill
// =======================================
export const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Skill ID.",
      });
    }

    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Skill deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Skill Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};