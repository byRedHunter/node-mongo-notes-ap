const { Schema, model } = require('mongoose')

const NoteSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		user: {
			type: String,
			required: true,
		},
	},
	// crea una fecha automatica cuando se haga una accion (registrar, actualizar)
	{ timestamps: true }
)

module.exports = model('Notes', NoteSchema)
