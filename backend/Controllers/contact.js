import { request } from 'express';
import { Contact } from '../models/contactsModel.js';
export const createContact = async(request,response,next) => {  try {
    if (
      !request.body.Name ||
      !request.body.Email ||
      !request.body.phoneNumber ||
      !request.body.Gender 
      
    ) {
      return response.status(400).send({
        message:
          "send all required feilds: Name, Catogery, phoneNumber, Gender, ",
      });
    }
    const newContact = {
      Name: request.body.Name,
      Email: request.body.Email,
      phoneNumber: request.body.phoneNumber,
      Gender: request.body.Gender,
     
    };
    const contact = await Contact.create(newContact);
    return response.status(201).send(contact);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }

}

export const getContact = async (request,response,next) =>{
    try {
        const { id } = request.params;
    
        // Assuming 'id' is already a string, not an object
        const contact = await Contact.findById(id);
    
        if (!contact) {
          return response.status(404).json({ message: "Contact not found" });
        }
    
        return response.status(200).json(contact);
      } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: error.message });
      }
}

export const updateContact = async (request,response,next) =>{
    try {
        if (
          !request.body.Name ||
          !request.body.Email ||
          !request.body.phoneNumber ||
          !request.body.Gender 
        ) {
          return response.status(400).send({
            message:
              "send all required feilds: Name, Email, phoneNumber, Gender",
          });
        }
    
        const { id } = request.params;
    
        const result = await Contact.findByIdAndUpdate(id, request.body);
        if (!result) {
          return response.status(404).json({ message: "Contact not found" });
        }
        return response
          .status(200)
          .send({ message: "contact details updated successfully" });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    
}

export const deleteContact = async (request,response,next) =>{
    try {
        const { id } = request.params;
        const result = await Contact.findByIdAndDelete(id);
    
        if (!result) {
          return response.status(404).json({ message: "Contact not found" });
        }
        return response
          .status(200)
          .send({ message: "contact details deleted successfully" });
      } catch {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    
}
export const getAllContacts = async(request,response,next) => {
    try {
        const contacts = await Contact.find({});
        return response.status(200).json({
          count: contacts.length,
          data: contacts,
        });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
}

