(function() {
    'use strict';

    angular.module('contractor')
        .config(config)
        .directive('header', appHeader)
        .controller('LoginCtrl', LoginCtrl);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/login.html',
                controller: 'LoginCtrl'
            });
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

    LoginCtrl.$inject = ['$scope'];

    function LoginCtrl($scope) {
        //TODO
        $scope.test = {};
    }


})();
