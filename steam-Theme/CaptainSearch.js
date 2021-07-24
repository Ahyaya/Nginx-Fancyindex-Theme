/*
*	JavaScript search bar develop by Captain
*	My website https://arxiv.cloud/
*/
var form = document.createElement('form');
var input = document.createElement('input');

input.name = 'filter';
input.id = 'search';
input.placeholder = 'Type to search...';

form.appendChild(input);

document.querySelector('h1').after(form);

var indexContent=document.querySelectorAll("#list tbody tr");

input.addEventListener('input', function () {
	if(this.value==""){
		indexContent.forEach(function(item) {item.hidden=false;});
		return;
	}
	indexContent.forEach(function(item){item.hidden=true;});
	var inputword='#list tr td a[href*='+'\''+this.value+'\''+']';
	var myElements = document.querySelectorAll(inputword);
	myElements.forEach(function(item) {item.parentNode.parentNode.hidden=false;});
});

var imageSource=['https://cdn.cloudflare.steamstatic.com/error/huh.png',
'https://cdn.cloudflare.steamstatic.com/error/bummer.png',
'https://cdn.cloudflare.steamstatic.com/error/oops.png'];
document.getElementById('palm').src=imageSource[Math.floor(Math.random()*imageSource.length)];
