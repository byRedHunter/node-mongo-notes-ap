const { Router } = require('express')
const router = Router()

const { isAuthenticated } = require('../helpers/auth')

const {
	renderNoteForm,
	createNewNote,
	renderNotes,
	renderEditform,
	updateNote,
	deleteNote,
} = require('../controllers/notes.controller')

// New Note
router.get('/add', isAuthenticated, renderNoteForm)
router.post('/add', isAuthenticated, createNewNote)

// Get All Note
router.get('', isAuthenticated, renderNotes)

// Edit Notes
router.get('/edit/:id', isAuthenticated, renderEditform)
router.put('/edit/:id', isAuthenticated, updateNote)

// Delete Note
router.delete('/delete/:id', isAuthenticated, deleteNote)

module.exports = router
