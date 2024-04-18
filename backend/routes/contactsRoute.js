import express from 'express';
import { Contact } from '../models/contactsModel.js';
import { createContact } from '../Controllers/contact.js'
import { deleteContact, getAllContacts, getContact, updateContact } from '../Controllers/contact.js';
const router = express.Router();

router.post("/", createContact);
//Route for Get all contacts from database
router.get("/", getAllContacts);

//Route for Get one contact from database by id
/*app.get('/:id', async(request, response ) =>{
    try{

       const { id } = request.params;
       


        const contact = await Contact.findById(id);
        return response.status(200).json(contact);

    } catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});

    }
}) ;*/

router.get("/:id", getContact);
//route for a update book
router.put("/:id", updateContact);

//Route for delete a contact
router.delete("/:id", deleteContact);
export default router;
