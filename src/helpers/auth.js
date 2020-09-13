const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next()
	}

	req.flash('error_msg', 'Not Authorized, please register or login.')
	res.redirect('/users/signin')
}

module.exports = helpers
