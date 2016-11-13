

//function module
var BeerReviewApp = function() {

	var beers = [];

	var addBeer = function(name, category, rate){

		var newBeer = {
			name:name,
			category:category,
			rate:rate
		};

		beers.push(newBeer);

		name = $('.beer-input').val('');
		category = $('.category-input').val('');

	};

	var renderBeer = function(){
		$('.beers-list li').remove();

	//print the data from the main array
		for (var i = 0; i < beers.length; i++) {
			var name = beers[i].name;
			var category = beers[i].category;
			var rate = beers[i].rate;


			//create a tab with the list of beers

			$('.beers-list').append('<li> name: ' + name + ', category: ' + category + ', rate: ' + rate +'</li>');
		}
	};

	return {
		addBeer:addBeer,
		renderBeer:renderBeer
	};
};


var app = BeerReviewApp();

//handlers
$('.post-beer').on('click', function(e) {

	e.preventDefault();

	var name = $('.beer-input').val();
	var category = $('.category-input').val();
	// var rate = $('option:selected').attr('data-val');
	var rate = $('option:selected').data().val;


	app.addBeer(name, category, rate);

	app.renderBeer();

});


//implement form validation
//add a table with the data