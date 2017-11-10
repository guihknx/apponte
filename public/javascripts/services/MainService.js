angular
    .module('Apponte')
    	.factory('MainService', MainService);


MainService.$inject = ['$http'];

function MainService($http){
	return {
		create: function(data){
			return $http.post('/note', { 
				data : data
			});
		},
		read: function(id){
			if( !id )
				return $http.get('/notes', {});

			return $http.get('/note/'+id, {});
		},
		update: function(data){
			return $http.put('/note', { 
				data : data
			});
		},
		delete: function(id){
			return $http.delete('/note/'+id, {id : id});
		},
	};
}