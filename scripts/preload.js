(function() {
    'use strict';

    angular.module('app', ['ng.deviceDetector'])
        .run(['$window', 'deviceDetector', function($window, deviceDetector) {
            var deviceDetector = deviceDetector;

            if(deviceDetector.isDesktop()){
                $window.location.href= "/desktop.html";
            }else if(deviceDetector.isMobile() && !deviceDetector.isTablet()){
                $window.location.href= "/mobile/index.html";
            }else if(deviceDetector.isMobile() && deviceDetector.isTablet()){
                $window.location.href= "/mobile/index.html";
            }
        }]);

})();
