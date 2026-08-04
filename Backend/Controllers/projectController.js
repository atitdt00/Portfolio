import mongoose from "mongoose";
import Project from "../Models/projects.js";

// =======================================
// Get All Projects
// =======================================
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
      message: "Projects fetched successfully.",
    });
  } catch (error) {
    console.error("Get Projects Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Get Project By ID
// =======================================
export const getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID.",
      });
    }

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: project,
      message: "Project fetched successfully.",
    });
  } catch (error) {
    console.error("Get Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Create Project
// =======================================
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      github,
      liveDemo,
      technologies,
      category,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    const project = await Project.create({
      title,
      description,
      image,
      github,
      liveDemo,
      technologies,
      category,
    });

    return res.status(201).json({
      success: true,
      data: project,
      message: "Project created successfully.",
    });
  } catch (error) {
    console.error("Create Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Update Project
// =======================================
export const updateProject = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID.",
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedProject,
      message: "Project updated successfully.",
    });
  } catch (error) {
    console.error("Update Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Delete Project
// =======================================
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID.",
      });
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Project Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};