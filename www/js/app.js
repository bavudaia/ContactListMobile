// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('todo', ['ionic','ui.router'])
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home',{
	url : "/",
	views: {
	  'home-view': {
	    templateUrl : "homePage.html"
		}
	}})
	.state('refresh',{
	url : "/refresh",
	views: {
	  'home-view': {
	    templateUrl : "homePage.html"
		}
	}})
	.state('add', {
      url: "/add",
      views: {
        'home-view': {
          templateUrl: "add.html"
        }
      }
    })
	.state('item',{
	  url : "/item/{page:[0-9]*}",
	  views: {
        'home-view': {
          templateUrl: "contactDetail.html"
        }
      }
	});
     $urlRouterProvider.otherwise("/");
   });
   
/*
app.config(function($stateProvider, $urlRouterProvider) {

$stateProvider.state('add', {
url: '/add',
templateUrl: 'add.html'
}
)

});
*/
 
var defaultEmail = 'a@b.com';
var jscontactName = '';
var jscontactNum = 0;
var jscontactEmail = '';


app.controller('MyCtrl', function($scope,$state) {
	 $scope.items = [/*
    { id: 0, name :"Contact0", tel :123456789, email : "1@1.com1"},
{ id: 1, name :"Contact1", tel :123456790, email : "1@1.com2"},
{ id: 2, name :"Contact2", tel :123456791, email : "1@1.com3"},
{ id: 3, name :"Contact3", tel :123456792, email : "1@1.com4"},
{ id: 4, name :"Contact4", tel :123456793, email : "1@1.com5"},
{ id: 5, name :"Contact5", tel :123456794, email : "1@1.com6"},
{ id: 6, name :"Contact6", tel :123456795, email : "1@1.com7"},
{ id: 7, name :"Contact7", tel :123456796, email : "1@1.com8"},
{ id: 8, name :"Contact8", tel :123456797, email : "1@1.com9"},
{ id: 9, name :"Contact9", tel :123456798, email : "1@1.com10"},
{ id: 10, name :"Contact10", tel :123456799, email : "1@1.com11"},
{ id: 11, name :"Contact11", tel :123456800, email : "1@1.com12"},
{ id: 12, name :"Contact12", tel :123456801, email : "1@1.com13"},
{ id: 13, name :"Contact13", tel :123456802, email : "1@1.com14"},
{ id: 14, name :"Contact14", tel :123456803, email : "1@1.com15"},
{ id: 15, name :"Contact15", tel :123456804, email : "1@1.com16"},
{ id: 16, name :"Contact16", tel :123456805, email : "1@1.com17"},
{ id: 17, name :"Contact17", tel :123456806, email : "1@1.com18"},
{ id: 18, name :"Contact18", tel :123456807, email : "1@1.com19"},
{ id: 19, name :"Contact19", tel :123456808, email : "1@1.com20"},
{ id: 20, name :"Contact20", tel :123456809, email : "1@1.com21"},
{ id: 21, name :"Contact21", tel :123456810, email : "1@1.com22"},
{ id: 22, name :"Contact22", tel :123456811, email : "1@1.com23"},
{ id: 23, name :"Contact23", tel :123456812, email : "1@1.com24"},
{ id: 24, name :"Contact24", tel :123456813, email : "1@1.com25"},
{ id: 25, name :"Contact25", tel :123456814, email : "1@1.com26"},
{ id: 26, name :"Contact26", tel :123456815, email : "1@1.com27"},
{ id: 27, name :"Contact27", tel :123456816, email : "1@1.com28"},
{ id: 28, name :"Contact28", tel :123456817, email : "1@1.com29"},
{ id: 29, name :"Contact29", tel :123456818, email : "1@1.com30"},
{ id: 30, name :"Contact30", tel :123456819, email : "1@1.com31"},
{ id: 31, name :"Contact31", tel :123456820, email : "1@1.com32"},
{ id: 32, name :"Contact32", tel :123456821, email : "1@1.com33"},
{ id: 33, name :"Contact33", tel :123456822, email : "1@1.com34"},
{ id: 34, name :"Contact34", tel :123456823, email : "1@1.com35"},
{ id: 35, name :"Contact35", tel :123456824, email : "1@1.com36"},
{ id: 36, name :"Contact36", tel :123456825, email : "1@1.com37"},
{ id: 37, name :"Contact37", tel :123456826, email : "1@1.com38"},
{ id: 38, name :"Contact38", tel :123456827, email : "1@1.com39"},
{ id: 39, name :"Contact39", tel :123456828, email : "1@1.com40"},
{ id: 40, name :"Contact40", tel :123456829, email : "1@1.com41"},
{ id: 41, name :"Contact41", tel :123456830, email : "1@1.com42"},
{ id: 42, name :"Contact42", tel :123456831, email : "1@1.com43"},
{ id: 43, name :"Contact43", tel :123456832, email : "1@1.com44"},
{ id: 44, name :"Contact44", tel :123456833, email : "1@1.com45"},
{ id: 45, name :"Contact45", tel :123456834, email : "1@1.com46"},
{ id: 46, name :"Contact46", tel :123456835, email : "1@1.com47"},
{ id: 47, name :"Contact47", tel :123456836, email : "1@1.com48"},
{ id: 48, name :"Contact48", tel :123456837, email : "1@1.com49"},
{ id: 49, name :"Contact49", tel :123456838, email : "1@1.com50"},
{ id: 50, name :"Contact50", tel :123456839, email : "1@1.com51"} */
  ];
  
  $scope.data = {
    showDelete: false
  };
  /*
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  */
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };


  
  $scope.onAdd = function() {
    $scope.contactMail = defaultEmail;
	$scope.data.showDelete = false;
  };
  
  $scope.onCancel = function()
  {
    $state.go('home');
  };
  
  $scope.contactDetail = function(item)
  {
 jscontactName = item.name;
 jscontactNum = item.phone;
 jscontactEmail = item.email;
  }
  

    $scope.onItemDelete = function(item) {
  var x = item.id;
  console.log("In Delete")
  // Give call to py function that deletes the content with the id in mongodb
	$.ajax({
			type: 'DELETE',
			url: "http://127.0.0.1:5000/delete",
			data: {'id': x }, //passing some input here
			dataType: "jsonp",
			//contentType : "application/json",
			//Access-Control-Allow-Origin  : "*" 
			//Access-Control-Allow-Headers : "Content-Type"
			error : function(jpXHR,err,obj)
			{
			   alert(err);
			},
			success: function(response){
			   output = response;
			   console.log(output);
			   if(response.response == 'success')
				 $scope.items.splice($scope.items.indexOf(item), 1);	
			}
	}).done(function(data){
		//console.log(data);
		//alert(data);
		//if(data.response == 'success')
		console.log('in done');
		$state.go('home');
	});
	//console.log(outcome)
	//if(outcome == "success")
	//console.log($scope.items.indexOf(item));
	
  };
  
  
  $scope.refreshList = function()
  {
    console.log('Logging refresh of HomePage');
	console.log($scope.items);
	
    // logic to get list of all contacts and populate in items array
		$.ajax({
			type: 'GET',
			url: "http://127.0.0.1:5000/refresh",
			dataType: "jsonp",
			error : function(jpXHR,err,obj)
			{
			  // alert(err); alert(obj);
			},
			success: function(response){
			   		 $scope.items = [];
					for(var i in response.contact_list)
						$scope.items.push(JSON.parse(response.contact_list[i]));
			}
		}).done(function(data){
			$state.go('home')
		//console.log($scope.items);
		//alert(data);
	});
	
  };
  //$state.go('refresh');
  $scope.refreshList();
});

app.controller('AddCtrl', function($scope) {

   $scope.onCreateContact = function(item)
  {
  // alert($scope.contactName);
   
	jQuery.ajax({
			type: 'POST',
			url: "http://127.0.0.1:5000/insert",
			data: {'name': $scope.contactName,
				   'phone': $scope.contactNum,
				   'email' : $scope.contactMail }, //passing some input here
			dataType: "jsonp",
			success: function(response){
			   output = response;
			   alert(output);
	   }
	}).done(function(data){
		console.log(data);
		//alert(data);
		if (data.response == "success")
		{
		    var newItem = { id: data.itemId, 
							name: $scope.contactName,
							phone: $scope.contactNum,
							email : $scope.contactMail};
			console.log(newItem.name);
		    $scope.items.unshift(newItem);
		}
		else
		{
		    alert('Failed to add')
			$state.go('home')
		}
	});
	
	
 };
});


app.controller('DetailCtrl', function($scope){
$scope.contactName = jscontactName;
$scope.contactNum = jscontactNum;
$scope.contactMail = jscontactEmail;
});