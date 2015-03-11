angular.module('starter.controllers', [])

    .controller('LandingCtrl', function($scope,$state) {
        $scope.data = {};
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.data.lat = position.coords.latitude;
            $scope.data.lng = position.coords.longitude;

            $http.post("http://104.131.181.179/dispatch", { fname: $scope.data.fname, lname: $scope.data.lname, phone: $scope.data.phone, postalcode: $scope.data.postalcode, plowtype: $scope.data.plowtype, plowtime: $scope.data.plowtime, notes: $scope.data.notes, email: $email.data.email })
            if (result.data.dispatchstatus == "success") {

    /*AM I SUPPOSED TO COPY THE ALERT AND ELSE AND ERROR FUNCTION FROM THE OLATH TUTORIAL TOO? What goes in place
    of "loginstatus"? "Dispatch"?}

              if (result.data.loginstatus == "success") {

                // successful login, in our example, we will just send an alert message
                alert("Congrats, you logged in with user ID "+result.data.userid);

              }
              else {

               // unsuccessful login.  In our example, we are just sending an alert message
               alert(result.data.message);
            }
        }, function(error) {
            alert("There was a problem getting your profile.  Check the logs for details.");
            console.log(error);
        });
     }


     */
/*
            var geocoderProvider = 'google';
            var httpAdapter = 'http';
            var extra = {
                apiKey: 'AlzaSyBXLeSAbUyGcFUnT6zWyTldSCPmZDDYpk', // for Mapquest, OpenCage, Google Premier
                formatter: null         // 'gpx', 'string', ...
            };

            var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter, extra);

            geocoder.reverse(position.coords.latitude, position.coords.longitude, function(err, res) {
                console.log(res);
                alert(JSON.stringify(res));
            });*/
        });

     $scope.landing=function () {
        console.log ("button was clicked");
             $state.go('tab.dispatch');
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





