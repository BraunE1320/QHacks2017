module.exports = function(app) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('transcript.ejs'); // load the index.ejs file
	});

};
