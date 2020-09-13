const Note = require('../models/Note')

const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
	res.render('notes/new-note')
}
notesCtrl.createNewNote = async (req, res) => {
	const errors = []
	const { title, description } = req.body

	if (title === '' || description === '') {
		errors.push({ text: `Please complete all fields.` })

		res.render('notes/new-note', { errors })
	} else {
		const newNote = new Note({ title, description })
		newNote.user = req.user.id
		await newNote.save()

		req.flash('success_msg', 'Note Added Successfully')

		res.redirect('/notes')
	}
}

notesCtrl.renderNotes = async (req, res) => {
	const notes = await Note.find({ user: req.user.id }).sort({
		createdAt: 'desc',
	})

	res.render('notes/all-notes', { notes })
}

notesCtrl.renderEditform = async (req, res) => {
	const { id } = req.params
	const note = await Note.findById(id)

	// para que un usuario no pueda editar notas de otros usuarios
	if (note.user != req.user.id) {
		req.flash('error_msg', 'Not Authorized')
		return res.redirect('/notes')
	}

	res.render('notes/edit-note', { note })
}
notesCtrl.updateNote = async (req, res) => {
	const { id } = req.params
	const { title, description } = req.body

	await Note.findByIdAndUpdate(id, { title, description })

	req.flash('success_msg', 'Note Edited Successfully')

	res.redirect('/notes')
}

notesCtrl.deleteNote = async (req, res) => {
	const { id } = req.params

	await Note.findByIdAndDelete(id)

	req.flash('success_msg', 'Note Deleted Successfully')

	res.redirect('/notes')
}

module.exports = notesCtrl
