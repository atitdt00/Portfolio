import express from "express";
import {
  getSkills,
  createSkill,
  getSkillById,
  updateSkill,
  deleteSkill,
} from "../Controllers/skillsController.js";

const router = express.Router();

//skill Routes

router.route("/")
.get(getSkills)
.post(createSkill);

//Routes by ID

router.route("/:id")
.get(getSkillById)
.put(updateSkill)
.delete(deleteSkill);

export default router;
