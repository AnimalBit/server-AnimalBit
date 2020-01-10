module.exports = function(err, req, res, next){

	if (err){
		console.log(err);
		
		if (err == 400) {
			res.status(status).json({msg: 'Bad Request, sintaks anda salah'})
		} else if(err == 401) {
			res.status(status).json({msg: 'Username atau Password anda salah'})
		} else if(err == 403) {
			res.status(status).json({msg: 'anda harus login terlebih dahulu'})
		} else {
			res.status(500).json({msg: 'Internal Server Error'})
		}
	}

}