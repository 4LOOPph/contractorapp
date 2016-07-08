(function() {
    'use strict';

    angular.module('starter')
        .controller('AccountCtrl', AccountCtrl);

        AccountCtrl.$inject = ['$scope','WeekDays','ionicTimePicker'];

        function AccountCtrl($scope, WeekDays, ionicTimePicker) {
            $scope.rates = [];

            $scope.weekdays = WeekDays.all();

            $scope.rate = {};

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
                        var hours = selectedTime.getHours();
                        var minutes = "0" + selectedTime.getMinutes();
                        var seconds = "0" + selectedTime.getSeconds();

                        $scope.rate.start = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    }
                },
                inputTime: 50400,
                format: 12,
                step: 15,
                setLabel: 'Set Start'
            };

            var ipObj2 = {
                callback: function(val) {
                    if (typeof(val) === 'undefined') {
                        console.log('Time not selected');
                    } else {
                        var selectedTime = new Date(val * 1000);
                        var hours = selectedTime.getHours();
                        var minutes = "0" + selectedTime.getMinutes();
                        var seconds = "0" + selectedTime.getSeconds();

                        $scope.rate.end = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    }
                },
                inputTime: 50400,
                format: 12,
                step: 15,
                setLabel: 'Set End'
            };

            $scope.openTime = function() {
                console.log('openTime')
                ionicTimePicker.openTimePicker(ipObj1);
            };

            $scope.openTime1 = function() {
                console.log('openTime1')
                ionicTimePicker.openTimePicker(ipObj2);
            };


            $scope.addRate = function(rate) {
                console.log('rate: ', rate);
                if (!_.isUndefined(rate)) {
                    $scope.rates.push({
                        amount: rate.amount,
                        start: rate.start,
                        end: rate.end,
                        weekday: rate.weekday
                    });
                }
            };
        }
})();
