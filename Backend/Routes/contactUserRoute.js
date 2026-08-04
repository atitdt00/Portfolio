import express from "express";

import {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../Controllers/contactController.js";

const router = express.Router();

// =======================================
// Contact Routes
// =======================================

// GET    /api/contacts
// POST   /api/contacts
router
  .route("/")
  .get(getContacts)
  .post(createContact);

// GET    /api/contacts/:id
// PUT    /api/contacts/:id
// DELETE /api/contacts/:id
router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

export default router;