angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http) {
    $http.get("customers.php").then(function(response) {
        $scope.myData = response.data.records;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
}) 

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
