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
    }


})();
