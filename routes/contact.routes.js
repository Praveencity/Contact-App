import express from 'express';
import { getContact, addContact, saveContact, viewContact , updateContactPage, deleteContact, updateContact} from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', getContact);
router.get('/addContact', addContact);
router.post('/saveContact', saveContact);
router.get('/contact/:userID', viewContact);
router.get('/contact/update/:userID',updateContactPage);
router.get('/contact/delete/:userID',deleteContact);
router.post('/updateContact/:userID',updateContact);

export default router;