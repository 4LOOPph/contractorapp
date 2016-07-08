(function() {
    'use strict';

    angular.module('starter')
        .controller('DashCtrl', ['$scope', function($scope) {}])
        .controller('ChatsCtrl', ['$scope', 'Chats', function($scope, Chats) {
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
        }])
        .controller('ChatDetailCtrl', ['$scope', '$stateParams', 'Chats',function($scope, $stateParams, Chats) {
            console.log('ChatDetailCtrl ')
            $scope.chat = Chats.get($stateParams.chatId);
        }])
        .controller('HomeCtrl', ['$scope', 'ionicTimePicker',function($scope, ionicTimePicker) {

        }]);

})();
