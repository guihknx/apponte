angular
    .module('Apponte')
    .controller('MainController', MainController);

MainController.$inject = ['$animate','$location', '$rootScope', '$scope', '$routeParams', '$route', 'MainService'];

function MainController($animate, $location, $rootScope, $scope, $routeParams, $route, MainService){
	$scope.title = 'Notes';


	$scope.updateJIT = function(){
		MainService.read().then(function(res){
			$scope.notes = res.data;
		})
	}

	$scope.edit = function(index){
		if( index != null ){
			$scope.note = $scope.notes[index];
			$scope.isEditing = true;
		}
		
		$scope.isViewing = true;
	}

	$scope.cancel = function(){
		$scope.note = null;
		$scope.isViewing = false;
	}

	$scope.delete = function(id){
		MainService.delete(id).then(function(res){
			var res = res.data;
			if( res.success ){
				$scope.updateJIT();
			}
		});
	}

	$scope.save = function(){
		if( $scope.isEditing ){			
			MainService.update($scope.note).then(function(res){
				var res = res.data;
				if( res.success ){
					$scope.cancel();
				}
				$scope.isEditing = false;		
			});
			return;
		}

		MainService.create($scope.note).then(function(res){
			var res = res.data;
			if( res.success ){
				$scope.cancel();
				//after create update UI again(with backend)
				$scope.updateJIT();
			}				
		});	


	}

	// init UI
	$scope.updateJIT();
}
