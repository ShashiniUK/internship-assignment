import express, { response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Contact } from "./models/contactModel.js";

const app = express();

app.use(express.json());

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome To  TWC');
});

app.post('/contacts', async(request, response ) =>{
  try{
    if(
      !request.body.FullName ||
      !request.body.Gender ||
      !request.body.Email ||
      !request.body.PhoneNumber
    ){
      return response.status(400).send({
        message: 'send all required feilds: FullName, Gender, Email, PhoneNumber'
      });
    }
    const newContact = {
      FullName:request.body.FullName ,
      Gender:request.body.Gender,
      Email:request.body.Email,
      PhoneNumber:request.body.PhoneNumber,

    };
    const contact = await Contact.create(newContact);
    return response.status(201).send(contact);
   
  } catch(error){
      console.log(error.message);
      response.status(500).send({message: error.message});

  }
}) ;


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });    
  })
  .catch((error) =>{
        console.log(error);
  });