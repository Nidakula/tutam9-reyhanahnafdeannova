const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

router.get('/', noteController.getNotes);
router.post('/', noteController.createNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
