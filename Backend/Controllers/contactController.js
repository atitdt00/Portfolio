import mongoose from "mongoose";
import ContactedUser from "../Models/ContactedUser.js";

// =======================================
// Get All Contacts
// =======================================
export const getContacts = async (req, res) => {
  try {
    const contacts = await ContactedUser.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
      message: "Contacts fetched successfully.",
    });
  } catch (error) {
    console.error("Get Contacts Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Get Contact By ID
// =======================================
export const getContactById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID.",
      });
    }

    const contact = await ContactedUser.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
      message: "Contact fetched successfully.",
    });
  } catch (error) {
    console.error("Get Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Create Contact
// =======================================
export const createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      company,
      email,
      subject,
    } = req.body;

    if (!firstName || !lastName || !phone || !email || !subject) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    const contact = await ContactedUser.create({
      firstName,
      lastName,
      phone,
      company,
      email,
      subject,
    });

    return res.status(201).json({
      success: true,
      data: contact,
      message: "Contact created successfully.",
    });
  } catch (error) {
    console.error("Create Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Update Contact
// =======================================
export const updateContact = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID.",
      });
    }

    const updatedContact = await ContactedUser.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedContact,
      message: "Contact updated successfully.",
    });
  } catch (error) {
    console.error("Update Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =======================================
// Delete Contact
// =======================================
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact ID.",
      });
    }

    const deletedContact = await ContactedUser.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};