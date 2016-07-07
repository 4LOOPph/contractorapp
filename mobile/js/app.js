(function() {
  'use strict';

  angular.module('starter', [
      'ionic', 'starter.controllers', 'starter.services', 'ion-floating-menu', 'ionic-timepicker', 'ng.deviceDetector'
    ])
    .run(['$ionicPlatform', '$window', 'deviceDetector', function($ionicPlatform, $window, deviceDetector) {
      $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });


      var deviceDetector = deviceDetector;
      console.log('deviceDetector: ', deviceDetector);

      if (deviceDetector.isDesktop()) {
        $window.location.href = "/desktop.html";
      }

    }])
    .config(['$stateProvider', '$urlRouterProvider', 'ionicTimePickerProvider', '$ionicConfigProvider',
      function($stateProvider, $urlRouterProvider, ionicTimePickerProvider, $ionicConfigProvider) {

        var timePickerObj = {
          inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
          format: 12,
          step: 15,
          setLabel: 'Set',
          closeLabel: 'Close'
        };
        ionicTimePickerProvider.configTimePicker(timePickerObj);


        $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left');

        $stateProvider
          .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            // controller: 'loginCtrl'
          })
          .state('vendorInfo', {
            url: '/vendorInfo',
            templateUrl: 'templates/vendorInfo.html'
          })
          .state('vendorcontactInfo', {
            url: '/vendorcontactinfo',
            templateUrl: 'templates/vendorcontactinfo.html'
          })
          .state('vendorRate', {
            url: '/vendorrate',
            templateUrl: 'templates/vendorRate.html',
            controller: 'HomeCtrl'
          })
          .state('qualification', {
            url: '/qualification',
            templateUrl: 'templates/qualification.html'
          })
          .state('certification', {
            url: '/certification',
            templateUrl: 'templates/certification.html'
          })
          .state('certifications', {
            url: '/certifications',
            templateUrl: 'templates/certifications.html'
          })
          .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
          })
          .state('tab.dash', {
            url: '/dash',
            views: {
              'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
              }
            }
          })
          .state('tab.chats', {
            url: '/chats',
            views: {
              'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
              }
            }
          })
          .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
              'tab-chats': {
                templateUrl: 'templates/chat-detail.html',
                controller: 'ChatDetailCtrl'
              }
            }
          })
          .state('tab.account', {
            url: '/account',
            views: {
              'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
              }
            }
          });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

      }
    ]);

})();
