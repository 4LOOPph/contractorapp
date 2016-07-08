(function() {
    'use strict';

    angular.module('starter')
    .controller('DashCtrl', function($scope) {})
    .controller('ChatsCtrl', function($scope, Chats) {
        $scope.$on('$ionicView.enter', function(e) {
            $scope.progressData = [];
            $scope.pendingData = [];
            $scope.completedData = [];

            $scope.chats = Chats.all();

            _.each($scope.chats, function(row) {
                if (row.status == 'progress') {
                    $scope.progressData.push(row);
                } else if (row.status == 'pending') {
                    $scope.pendingData.push(row);
                } else if (row.status == 'completed') {
                    $scope.completedData.push(row);
                }
            });

            console.log('$scope.progressData: ', $scope.progressData);
            console.log('$scope.pendingData: ', $scope.pendingData);
            console.log('$scope.completedData: ', $scope.completedData);
        });
    })
    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        console.log('ChatDetailCtrl ')
        $scope.chat = Chats.get($stateParams.chatId);
    })
    .controller('HomeCtrl', function($scope, ionicTimePicker) {
        
    });

})();
