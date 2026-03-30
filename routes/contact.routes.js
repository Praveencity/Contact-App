import express from 'express';
import { getContact, addContact, saveContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', getContact);
router.get('/addContact', addContact);
router.post('/saveContact', saveContact)

export default router;