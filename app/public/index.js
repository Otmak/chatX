

let socket = io();
let form = document.getElementById('m-form');
let textInfo = document.getElementById('textInfo');
let textBody = document.getElementById('textBody');
     

form.addEventListener('submit',function (e) {
	 e.preventDefault();
	 socket.emit('chat', textInfo.value); 
     console.log(textInfo.value);
     textInfo.value = '';   
}); 

socket.on('chat', function (msg){
	 let li = document.createElement('li');
	 textBody.appendChild(li)
	 li.innerHTML = msg;
});