'use strict';

var ohHey = "Hello World";

console.log('Hi Michelle');

var url = 'https://opentdb.com/api.php?amount=10&type=multiple';

$.ajax({
	url: url,
	method: 'GET'
}).then(function (res) {
	console.log(res);
});