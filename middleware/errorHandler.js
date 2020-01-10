module.exports = function(err, req, res, next){
	if (err){		
		if (err == 400) {
			// res.status(err).json({msg: 'Bad Request, sintaks anda salah'})
		} else if(err == 401) {
			res.status(err).json({msg: 'Username atau Password anda salah'})
		} else if(err == 403) {
			res.status(err).json({msg: 'anda harus login terlebih dahulu'})
		} else if(err == 409) {
			res.status(err).json({msg: 'Already exist'})
		} else {
			res.status(500).json({msg: 'Internal Server Error'})
		}
	}
}
