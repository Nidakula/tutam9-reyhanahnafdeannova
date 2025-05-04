const noteRepo = require('../repositories/note.repository');
const baseResponse = require('../utils/baseResponse.util');

const getNotes = async (req, res) => {
  try {
    const notes = await noteRepo.getAllNotes();
    return baseResponse(res, true, 200, 'Notes fetched successfully', notes);
  } catch (err) {
    return baseResponse(res, false, 500, 'Failed to fetch notes', null);
  }
};

const createNote = async (req, res) => {
  try {
    const note = await noteRepo.createNote(req.body);
    return baseResponse(res, true, 201, 'Note created successfully', note);
  } catch (err) {
    return baseResponse(res, false, 500, 'Failed to create note', null);
  }
};

const deleteNote = async (req, res) => {
  try {
    await noteRepo.deleteNote(req.params.id);
    return baseResponse(res, true, 200, 'Note deleted successfully', null);
  } catch (err) {
    return baseResponse(res, false, 500, 'Failed to delete note', null);
  }
};

module.exports = {
  getNotes,
  createNote,
  deleteNote
};
