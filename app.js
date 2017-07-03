(function(){
	var app = angular.module('store', ['store-products']);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){
		
	});

	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [
		{
			name: 'Swap',
			price: 100,
			description: 'extremely awesome',
			canPurchase: true,
			images: 'img1.jpg',
			reviews: 
			[
				{
					stars: 5,
					body: "Swap is awesome!",
					author: "nids",
				},
				{
					stars: 3,
					body: "Swap is okay!",
					author: "tanz"
				}
			],
		},
		{
			name: 'Sal',
			price: 150,
			description: 'magnificent',
			canPurchase: false,
			images: 'img2.jpg',
			reviews: 
			[
				{
					stars: 5,
					body: "Sal is too good!",
					author: "swap_it",
				},
				{
					stars: 4,
					body: "Sal is pretty.",
					author: "tanz"
				}
			],
		}
	]
})();