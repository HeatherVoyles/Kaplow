angular.module('starter.controllers', [])

    .controller('LandingCtrl', function($scope,$state) {
       $scope.lat=0.0; $scope.lng=0.0;
     $scope.landing=function () {
        console.log ("button was clicked");
         navigator.geolocation.getCurrentPosition(function(position){
             $scope.lat = position.coords.latitude;
             $scope.lng = position.coords.longitude;
             alert(position.coords.latitude);
             console.log($scope);
             $state.go('tab.dispatch', { updated: true });
         });
     };

    })

.controller('DashCtrl', function($scope) {})

.controller('DispatchCtrl', function($scope) {})


    .controller('LocationCtrl', function($scope, $state) {

        // PLEASE NOTE:  you must install the apache cordova geolocation plugin for this to function.
        // You can install it with the following command:  ionic plugin add org.apache.cordova.geolocation

        $scope.locationString = "Please click the button above to get your location.";

        // this function is bound to the button on the location page which gets the current location
        $scope.getCurrentLocation = function() {

            // ensure that the geolocator is available
            // on error, send the appropriate message
            if (navigator.geolocation) {

                // this function gets the current location of the device
                // the current location will be stored in the position attribute variable
                // the device latitude and longitude are located in the position.coords array
                navigator.geolocation.getCurrentPosition(function(position) {

                    // get the latitude and longitude and create a string displaying everything
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;
                    $scope.locationString = 'Your current location is... Latitude: '+lat+' and Longitude: '+lng;
                    $state.go('tab.location');
                });
            } else {
                $scope.locationString = "Sorry, but the computer Gremlins struck again!  Yell at Rob!";
                $state.go('tab.location');
            }

        }
    })


                                                                                                                                                                                                                                                                                                                                                             v
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

