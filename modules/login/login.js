(function() {
    'use strict';

    angular.module('contractor')
        .config(config)
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

    LoginCtrl.$inject = ['$scope'];

    function LoginCtrl($scope) {
        //TODO
        $scope.test = {};
    }


})();
