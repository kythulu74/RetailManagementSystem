angular.module('itemApp', [])
  .controller('ItemController', function($scope) {

    var items =[];
	
	$scope.addThisItem = function() {
		$scope.items.push({parentOrin:$scope.parentOrin, gtin:$scope.gtin, longDesc:$scope.longDesc, shortDesc:$scope.shortDesc, vpn:$scope.vpn, supplier:$scope.supplier, brand:$scope.brand, color:$scope.color, size:$scope.size, team:$scope.team, retail:$scope.retail, unitCost:$scope.unitCost});
	};	

	$scope.items = items;
	$scope.parentOrin = items.parentOrin;
	$scope.gtin = items.gtin;
	$scope.longDesc = items.longDesc;
	$scope.shortDesc = items.shortDesc;
	$scope.vpn = items.vpn;
	$scope.supplier = items.supplier;
    $scope.brand = items.brand;
	$scope.color = items.color;
	$scope.size = items.size;
	$scope.team = items.team;
    $scope.retail = items.retail;
	$scope.unitCost = items.unitCost;


	$scope.deleteItem = function(index) {
		$scope.items.splice(index, 1);
	};
	
  });