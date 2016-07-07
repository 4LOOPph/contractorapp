(function() {
    'use strict';

    angular.module('contractor', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap', 'ui.router',
            'ui.footable', 'ui.select', 'restangular', 'toastr', 'chart.js', 'angular.morris-chart', 'ui.bootstrap', 'angularMoment',
            'angularSpinner','ng.deviceDetector'
        ])
        // .constant('API_URL', 'http://192.168.2.17:3000') //DEVELOPMENT
        .constant('API_URL', 'http://52.64.27.145:5001') //PRODUCTION
        .constant('API_VERSION', '/api/1.0/')
        .config(['$provide', '$stateProvider', '$urlRouterProvider', '$locationProvider', 'uiSelectConfig', 'RestangularProvider', 'API_URL', '$httpProvider',
            function($provide, $stateProvider, $urlRouterProvider, $locationProvider, uiSelectConfig, RestangularProvider, API_URL, $httpProvider) {
                $urlRouterProvider.otherwise('/main');
                $locationProvider.html5Mode(false);
                uiSelectConfig.theme = 'bootstrap';
                $httpProvider.interceptors.push('httpInterceptor');

                $provide.value('baseURL', API_URL);
                RestangularProvider.setBaseUrl(API_URL + '/1.0/');
            }
        ])
        .run(['$rootScope', '$state', 'usSpinnerService','deviceDetector','$window', function($rootScope, $state, usSpinnerService,deviceDetector,$window) {
            $rootScope.$state = $state;

            $rootScope.$on('loading:progress', function() {
                usSpinnerService.spin('spinner-1');
            });

            $rootScope.$on('loading:finish', function() {
                usSpinnerService.stop('spinner-1');
            });

            var deviceDetector = deviceDetector;

            if(deviceDetector.isMobile() && !deviceDetector.isTablet()){
                $window.location.href= "/mobile/index.html";
            }else if(deviceDetector.isMobile() && deviceDetector.isTablet()){
                $window.location.href= "/mobile/index.html";
            }
        }])
        .factory('_', ['$window', function($window) {
            return $window._;
        }])
        .factory('httpInterceptor', ['$q', '$rootScope',
            function($q, $rootScope) {
                var loadingCount = 0;

                return {
                    request: function(config) {
                        if (++loadingCount === 1) $rootScope.$broadcast('loading:progress');
                        return config || $q.when(config);
                    },

                    response: function(response) {
                        if (--loadingCount === 0) $rootScope.$broadcast('loading:finish');
                        return response || $q.when(response);
                    },

                    responseError: function(response) {
                        if (--loadingCount === 0) $rootScope.$broadcast('loading:finish');
                        return $q.reject(response);
                    }
                };
            }
        ]);

})();
