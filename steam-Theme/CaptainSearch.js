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

document.querySelectorAll("#list tbody tr a").forEach(
	function(item){
		var fileNameIndex=item.href.lastIndexOf('\/')+1;
		if(fileNameIndex<item.href.length){
			item.id=decodeURI(item.href.substring(fileNameIndex,item.href.length).toUpperCase());
		}else{
			item.id=decodeURI(item.href.toUpperCase());
		}
	}
);

input.addEventListener('input', function () {
	if(this.value==""){
		indexContent.forEach(function(item) {item.hidden=false;});
		return;
	}
	indexContent.forEach(function(item){item.hidden=true;});
	var inputword='#list tr td a[id*='+'\''+this.value.toUpperCase()+'\''+']';
	var myElements = document.querySelectorAll(inputword);
	myElements.forEach(function(item) {item.parentNode.parentNode.hidden=false;});
});

var imageSource=['https://cdn.cloudflare.steamstatic.com/error/huh.png',
'https://cdn.cloudflare.steamstatic.com/error/bummer.png',
'https://cdn.cloudflare.steamstatic.com/error/oops.png'];
document.getElementById('palm').src=imageSource[Math.floor(Math.random()*imageSource.length)];
