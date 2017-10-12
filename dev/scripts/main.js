const app = {};

app.url = 'https://opentdb.com/api.php?amount=10&type=multiple'

$.ajax({
	url: app.url,
	method: 'GET'
}).then(function(res){
	console.log(res)
})