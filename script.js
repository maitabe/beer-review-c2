var beers = [];
	console.log(beers);

	//functions

//add a new beer inside the array beers
function addBeer(name, category, rate) {

	var newBeer = {
		name:name,
		category:category,
		rate:rate
	};

	beers.push(newBeer);

	name = $('.beer-input').val('');
	category = $('.category-input').val('');
}


function updateBeers(){
	//empty the li list
	$('.beers-list li').remove();



	//print the data from the main array
	for (var i = 0; i < beers.length; i++) {
		var name = beers[i].name;
		var category = beers[i].category;
		var rate = beers[i].rate;

		console.log(beers);
		//add button if beers array has more than two beers
		// if(beers.length > 1 ){
		// 	$('#addBtn').append('<button type="button" class="btn btn-default">check rating</button');
		// }

		//create a tab with the list of beers

		$('.beers-list').append('<li> name: ' + name + ', category: ' + category + ', rate: ' + rate +'</li>');
	}
}


$(document).ready(function() {

//event handlers
$('.post-beer').on('click', function(e) {
	e.preventDefault();

	var name = $('.beer-input').val();
	var category = $('.category-input').val();
	// var rate = $('option:selected').attr('data-val');
	var rate = $('option:selected').data().val;


	addBeer(name, category, rate);

	updateBeers();
});

//rate beer the biggest and smaller rating
$('.rate-beer').on('click', function() {

	for(var category in beers) {

	}
});



});

//implement form validation
//add a table with the data