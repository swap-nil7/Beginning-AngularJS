(function(){
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Swap',
			price: 100,
			description: 'extremely awesome',
			canPurchase: true,
		},
		{
			name: 'Sal',
			price: 150,
			description: 'magnificent',
			canPurchase: false,
		}
	]
})();