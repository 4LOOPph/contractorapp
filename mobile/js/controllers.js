angular.module('starter.controllers', [])

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

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('HomeCtrl', function($scope, ionicTimePicker) {
    $scope.data = {};
    $scope.showstartCard = true;
    $scope.showsecondCard = false;

    $scope.hideCard = function() {
        $scope.showstartCard = false;
        $scope.showsecondCard = true;
    };
    $scope.hideCard1 = function() {
        $scope.showsecondCard = false;
        $scope.showstartCard = true;
    };



    var ipObj1 = {
        callback: function(val) {
            if (typeof(val) === 'undefined') {
                console.log('Time not selected');
            } else {
                var selectedTime = new Date(val * 1000);
                $scope.data.timepicker1 = selectedTime.getUTCHours() + ':' + selectedTime.getUTCMinutes();

                console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
            }
        },
        inputTime: 50400,
        format: 12,
        step: 15,
        setLabel: 'Set2'
    };

    $scope.openTime = function() {
        ionicTimePicker.openTimePicker(ipObj1);
    };
});
