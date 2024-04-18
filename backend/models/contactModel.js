import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
    {
        FullName:{
            type: String,
            required: true,
        },
        Gender:{
            type: String,
            required: true,
        },
        Email:{
            type: String,
            required: true,
        },
        PhoneNumber:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, 
    }
);


export const Contact = mongoose.model('Contact', contactSchema);

