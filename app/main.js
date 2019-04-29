
let express = require('express');
let mainApp = express();
let socket = require('socket.io');

mainApp.use(express.static('public'));

let server = mainApp.listen(9000, function (req, res) {
	 console.log("it's Working Hommie!")
	
});

let io = socket(server);

io.on('connection', function (socket){
	 console.log('socket is Working');
});