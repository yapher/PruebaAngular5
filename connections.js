var mysql = require('mysql');

function Conexion(){
	this.pool = null;

	this.inicia = function(){
		this.pool = mysql.createPool({
			connectionLimit: 10,
			host: 'localhost',
			user: 'root',
			password: 'orland04',
			database: 'pruebaangualr5'
		})
	}

	this.obtener = function(callback){
		this.pool.getConnection(function(error,connection){
			callback(error,connection);
		})
	}
}

module.exports = new Conexion();