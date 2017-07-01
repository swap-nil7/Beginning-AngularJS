(function(){
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [
		{
			name: 'Swap',
			price: 100,
			description: 'extremely awesome',
			canPurchase: true,
			images: 'img1.jpg',
		},
		{
			name: 'Sal',
			price: 150,
			description: 'magnificent',
			canPurchase: false,
			images: 'img2.jpg',
		}
	]
})();