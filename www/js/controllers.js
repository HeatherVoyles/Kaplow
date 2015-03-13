angular.module('starter.controllers', [])
    /*ROBS Tutorial Code*/

    .controller('LocationCtrl', function($scope, $state, $http) {

        // PLEASE NOTE:  you must install the apache cordova geolocation plugin for this to function.
        // You can install it with the following command:  ionic plugin add org.apache.cordova.geolocation
        $scope.data = {};
        $scope.data.locationString = "Please click the button above to get your location.";

        // this function is bound to the button on the location page which gets the current location
        $scope.getCurrentLocation = function() {

        // ensure that the geolocator is available
        // on error, send the appropriate message
        if (navigator.geolocation) {

            // this function gets the current location of the device
            // the current location will be stored in the position attribute variable
            // the device latitude and longitude are located in the position.coords array
            navigator.geolocation.getCurrentPosition(function(position) {


    /*.Older Code From Last Week's Attempt

    controller('LandingCtrl', function($scope,$state) {

        $scope.data = {};
        navigator.geolocation.getCurrentPosition(function(position){
            $scope.data.lat = position.coords.latitude;
            $scope.data.lng = position.coords.longitude; */

     /*ROBS Tutorial Code*/
            // get the latitude and longitude and create a string displaying everything
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            //use the Google Maps Geocoder API to reverse geocode and get the address
            $http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AlzaSyAldGicgMF7cF2y9_iz6jw-OJ-Ylkhloqo").then(function(result) {

                // update the address variable with the formatted address and print the lat and lng.
                // for an example of the output in result.data, please see:
                // http://maps.googleapis.com/maps/api/geocode/json?latlng=51.187296,1.229086&sensor=false&_=1302084865163
                $scope.data.locationString = 'Your current location is... Latitude: '+lat+' and Longitude: '+lng+', and your address is '+result.data.results[0].formatted_address;
                $state.go('tab.location');
            }, function(error) {
                alert("Couldn't geocode.  Check the logs for details.");
                console.log(error);
            });
        });
    } else {
    $scope.data.locationString = "Sorry, but the computer Gremlins struck again!  Yell at Rob!";
    $state.go('tab.location');
}

}
})

            /*$http.post("http://104.131.181.179/dispatch", { fname: $scope.data.fname, lname: $scope.data.lname, phone: $scope.data.phone, postalcode: $scope.data.postalcode, plowtype: $scope.data.plowtype, plowtime: $scope.data.plowtime, notes: $scope.data.notes, email: $email.data.email })
            if (result.data.dispatchstatus == "success") {
            }

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
            });
        });*/

     $scope.landing=function () {
        console.log ("button was clicked");
             $state.go('tab.dispatch');
     };

    })

.controller('DashCtrl', function($scope) {})

.controller('DispatchCtrl', function($scope) {})


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





