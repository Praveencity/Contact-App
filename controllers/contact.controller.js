import Contact from '../models/contact.model.js';

export const getContact = async (req,res)=>{
        const contacts = await Contact.find();
        return res.render("home", { contacts: contacts });
};

export const addContact = async (req,res)=>{
        return res.render("add-contact");
}

export const saveContact = async (req,res)=>{
        await Contact.create(req.body);
        res.redirect('/');
}

