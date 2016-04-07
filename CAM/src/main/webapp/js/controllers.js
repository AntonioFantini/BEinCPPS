// CONTROLLERS
camApp.controller('homeController', [
		'$scope',
		'cityService',
		function($scope, cityService) {

			$scope.message = '';

			$scope.myCallback = function(nRow, aData, iDisplayIndex,
					iDisplayIndexFull) {
				$('td:eq(2)', nRow).bind('click', function() {
					$scope.$apply(function() {
						$scope.someClickHandler(aData);
					});
				});
				return nRow;
			};

			$scope.someClickHandler = function(info) {
				$scope.message = 'clicked: ' + info.price;
			};

			$scope.columnDefs = [ {
				"mDataProp" : "asset",
				"aTargets" : [ 0 ]
			}, {
				"mDataProp" : "class",
				"aTargets" : [ 1 ]
			}, {
				"mDataProp" : "model",
				"aTargets" : [ 2 ]
			}, {
				"mDataProp" : "owner",
				"aTargets" : [ 3 ]
			}, {
				"mDataProp" : "created",
				"aTargets" : [ 4 ]
			}, {
				"mDataProp" : "action",
				"aTargets" : [ 5 ]
			} ];

			$scope.overrideOptions = {
				"bStateSave" : true,
				"iCookieDuration" : 2419200, /* 1 month */
				"bJQueryUI" : true,
				"bPaginate" : true,
				"bLengthChange" : false,
				"bFilter" : true,
				"bInfo" : true,
				"bDestroy" : true
			};

			$scope.sampleProductCategories = [

			{
				"asset" : "exampleAsset",
				"class" : "exampleClass",
				"model" : "exampleModel",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_2",
				"class" : "exampleClass_2",
				"model" : "exampleModel_2",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_3",
				"class" : "exampleClass_3",
				"model" : "exampleModel_3",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset",
				"class" : "exampleClass",
				"model" : "exampleModel",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_2",
				"class" : "exampleClass_2",
				"model" : "exampleModel_2",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_3",
				"class" : "exampleClass_3",
				"model" : "exampleModel_3",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset",
				"class" : "exampleClass",
				"model" : "exampleModel",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_2",
				"class" : "exampleClass_2",
				"model" : "exampleModel_2",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_3",
				"class" : "exampleClass_3",
				"model" : "exampleModel_3",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset",
				"class" : "exampleClass",
				"model" : "exampleModel",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_2",
				"class" : "exampleClass_2",
				"model" : "exampleModel_2",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}, {
				"asset" : "exampleAsset_3",
				"class" : "exampleClass_3",
				"model" : "exampleModel_3",
				"owner" : "ME",
				"created" : "2016-04-08",
				"action" : "x"
			}

			];

			$scope.roleList1 = [ {
				"roleName" : "User",
				"roleId" : "role1",
				"children" : [ {
					"roleName" : "subUser1",
					"roleId" : "role11",
					"children" : []
				}, {
					"roleName" : "subUser2",
					"roleId" : "role12",
					"children" : [ {
						"roleName" : "subUser2-1",
						"roleId" : "role121",
						"children" : [ {
							"roleName" : "subUser2-1-1",
							"roleId" : "role1211",
							"children" : []
						}, {
							"roleName" : "subUser2-1-2",
							"roleId" : "role1212",
							"children" : []
						} ]
					} ]
				} ]
			},

			{
				"roleName" : "Admin",
				"roleId" : "role2",
				"children" : []
			},

			{
				"roleName" : "Guest",
				"roleId" : "role3",
				"children" : []
			} ];

			// test tree model 2
			$scope.roleList2 = [ {
				"roleName" : "User",
				"roleId" : "role1",
				"children" : [ {
					"roleName" : "subUser1",
					"roleId" : "role11",
					"collapsed" : true,
					"children" : []
				}, {
					"roleName" : "subUser2",
					"roleId" : "role12",
					"collapsed" : true,
					"children" : [ {
						"roleName" : "subUser2-1",
						"roleId" : "role121",
						"children" : [ {
							"roleName" : "subUser2-1-1",
							"roleId" : "role1211",
							"children" : []
						}, {
							"roleName" : "subUser2-1-2",
							"roleId" : "role1212",
							"children" : []
						} ]
					} ]
				} ]
			},

			{
				"roleName" : "Admin",
				"roleId" : "role2",
				"children" : [ {
					"roleName" : "subAdmin1",
					"roleId" : "role11",
					"collapsed" : true,
					"children" : []
				}, {
					"roleName" : "subAdmin2",
					"roleId" : "role12",
					"children" : [ {
						"roleName" : "subAdmin2-1",
						"roleId" : "role121",
						"children" : [ {
							"roleName" : "subAdmin2-1-1",
							"roleId" : "role1211",
							"children" : []
						}, {
							"roleName" : "subAdmin2-1-2",
							"roleId" : "role1212",
							"children" : []
						} ]
					} ]
				} ]
			},

			{
				"roleName" : "Guest",
				"roleId" : "role3",
				"children" : [ {
					"roleName" : "subGuest1",
					"roleId" : "role11",
					"children" : []
				}, {
					"roleName" : "subGuest2",
					"roleId" : "role12",
					"collapsed" : true,
					"children" : [ {
						"roleName" : "subGuest2-1",
						"roleId" : "role121",
						"children" : [ {
							"roleName" : "subGuest2-1-1",
							"roleId" : "role1211",
							"children" : []
						}, {
							"roleName" : "subGuest2-1-2",
							"roleId" : "role1212",
							"children" : []
						} ]
					} ]
				} ]
			} ];

			// roleList1 to treeview
			$scope.roleList = $scope.roleList1;

		} ]);

camApp.controller('forecastController', [
		'$scope',
		'$resource',
		'$routeParams',
		'cityService',
		function($scope, $resource, $routeParams, cityService) {

			$scope.city = cityService.city;

			$scope.days = $routeParams.days || '2';

			$scope.weatherAPI = $resource(
					"http://api.openweathermap.org/data/2.5/forecast/daily", {
						callback : "JSON_CALLBACK"
					}, {
						get : {
							method : "JSONP"
						}
					});

			$scope.weatherResult = $scope.weatherAPI.get({
				q : $scope.city,
				cnt : $scope.days
			});

			$scope.convertToFahrenheit = function(degK) {

				return Math.round((1.8 * (degK - 273)) + 32);

			}

			$scope.convertToCelsius = function(degK) {
				return Math.round(degK - 273.15);
			}

			$scope.convertToDate = function(dt) {

				return new Date(dt * 1000);

			};

		} ]);