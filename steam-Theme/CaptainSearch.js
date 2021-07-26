/*
*	JavaScript search bar develop by Captain version 1.01
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

indexContent.forEach(
	function(item){
		var fileHref=item.querySelector("td a").href;
		var fileNameIndex=fileHref.lastIndexOf('\/',fileHref.length-2)+1;
		if(fileNameIndex<fileHref.length){
			item.id=decodeURI(fileHref.substring(fileNameIndex,fileHref.length).toUpperCase());
		}else{
			item.id=decodeURI(fileHref.toUpperCase());
		}
	}
);

input.addEventListener('input', function () {
	if(this.value==""){
		indexContent.forEach(function(item) {item.hidden=false;});
		return;
	}
	indexContent.forEach(function(item){item.hidden=true;});
	var inputword='#list tr[id*='+'\''+this.value.toUpperCase()+'\''+']';
	var myElements = document.querySelectorAll(inputword);
	myElements.forEach(function(item) {item.hidden=false;});
});

var imageSource=['https://cdn.cloudflare.steamstatic.com/error/huh.png',
'https://cdn.cloudflare.steamstatic.com/error/bummer.png',
'https://cdn.cloudflare.steamstatic.com/error/oops.png'];
document.getElementById('palm').src=imageSource[Math.floor(Math.random()*imageSource.length)];
