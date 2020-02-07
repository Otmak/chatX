let socket = io();
let form = document.getElementById('m-form');
let textInfo = document.getElementById('textInfo');
let textBody = document.getElementById('textBody');
//Defining Time
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds()
let timeStamp = `${h}:${m}`;

form.addEventListener('submit',function (e) 
{
	 e.preventDefault();
	 socket.emit('chat', textInfo.value); 
     console.log(`${textInfo.value} ${timeStamp}`);
     textInfo.value = '';   
}); 

socket.on('chat', function (msg)
{
	 let p = document.createElement('p');
	 let t = document.createElement('small');
	 t.setAttribute('title', `Posted at ${timeStamp}:${s}`);
	 t.setAttribute('class', 'timeClass')
	 p.textContent = msg;
	 t.textContent = timeStamp;
	 textBody.appendChild(p);
	 p.appendChild(t)
});