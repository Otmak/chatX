

let socket = io();
let form = document.getElementById('m-form');
let textInfo = document.getElementById('textInfo');
const li = document.createElement('li');

form.addEventListener('submit',function (e) {
	 e.preventDefault();
	 socket.emit('chat', textInfo.value); 
     console.log(textInfo.value);
     textInfo.value = '';
	 
	  
     socket.on('chat', function (){

        
     })
})
