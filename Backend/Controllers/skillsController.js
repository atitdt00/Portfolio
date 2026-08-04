import mongoose from "mongoose";
import Skills from "../Models/Skills";

export const getSkills = async (req, res) => {
  try {
    const skills = (await Skills.find()).toSorted({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills,
      message: "Skills fetched successfully",
    });
  } catch (error) {
    console.log("get skills Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
export const createSkill = async (req, res) => {
  try {
    const { firstName, lastName, phone, company, email, subject } = req.body;

    if (!firstName || !lastName || !phone || !email || !subject) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const newSkill = await Skills.create({
      firstName,
      lastName,
      phone,
      company,
      email,
      subject,
    });
    res
      .status(200)
      .json({ success: true, data: newSkill, message: "created New skill" });
  } catch (error) {
    console.log("Create skill Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
export const getSkillById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Skill ID.",
      });
    }

    const skill = await Skills.findById(id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }
    res
      .status(200)
      .json({
        success: true,
        data: skill,
        message: "skill fetched by given ID ",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid skill ID.",
      });
    }

    const deletedSkill = await Skills.findByIdAndDelete(id);
    if (!skill) {
      return res.status(400).json({
        success: false,
        message: "Skill not found.",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "skill deleted successfully" });
  } catch (error) {
    console.log("Delete Skill Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateSkill = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Skill ID.",
      });
    }
    const updateSkill = await Skills.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updateSkill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }
    res
      .status(200)
      .json({
        success: true,
        data: updateSkill,
        message: "skill updated successfully",
      });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
