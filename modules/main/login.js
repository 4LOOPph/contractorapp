(function() {
    'use strict';

    angular.module('contractor')
        .config(config)
        .directive('header', appHeader)
        .controller('MainCtrl', MainCtrl);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'modules/main/login.html',
                controller: 'MainCtrl'
            })
            .state('vendorinfo', {
                url: '/vendorinfo',
                templateUrl: 'modules/main/vendorInfo.html',
                controller: 'MainCtrl'
            })
            .state('qualification', {
                url: '/qualification',
                templateUrl: 'modules/main/qualification.html',
                controller: 'MainCtrl'
            })
            .state('payment', {
                url: '/payment',
                templateUrl: 'modules/main/payment.html',
                controller: 'MainCtrl'
            })
            ;
    }

    function appHeader() {
        return {
            restrict: 'E',
            templateUrl: './modules/main/header.html',
            compile: function(tElement, tAttrs, transclude) {
                $.AdminLTE.pushMenu($(tElement).find('.sidebar-toggle'));
            }
        };
    }

    MainCtrl.$inject = ['$scope'];

    function MainCtrl($scope) {
        //TODO
        $scope.test = {};
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
    $scope.hideC = function() {
        $scope.showsecondCard = false;
    };
    }


})();
