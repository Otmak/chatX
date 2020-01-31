let socket = io();
let form = document.getElementById('m-form');
let textInfo = document.getElementById('textInfo');
let textBody = document.getElementById('textBody');

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let timeStamp = `${h}:${m}`;

form.addEventListener('submit',function (e) {
	 e.preventDefault();
	 socket.emit('chat', textInfo.value); 
     console.log(`${textInfo.value} ${timeStamp}`);
     textInfo.value = '';   
}); 

socket.on('chat', function (msg){
	 let p = document.createElement('p');
	 let li = document.createElement('li');
	 textBody.appendChild(p);
	 textBody.appendChild(li);
	 p.innerHTML =  msg;
	 
	 //li.innerHTML = timeStamp;
});