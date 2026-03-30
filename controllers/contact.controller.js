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

export const viewContact = async (req,res)=>{
        let data = await Contact.findById(req.params.userID);
        res.render('show-contact',{user : data});
}

export const updateContactPage = async (req,res)=>{
        let data = await Contact.findById(req.params.userID);
        res.render('update-contact',{user : data});
}

export const deleteContact = async (req,res)=>{
        await Contact.findByIdAndDelete(req.params.userID);
        res.redirect('/');
}

export const updateContact = async (req,res)=>{
        await Contact.findByIdAndUpdate(req.params.userID,req.body);
        res.redirect(`/contact/${req.params.userID}`);
}

