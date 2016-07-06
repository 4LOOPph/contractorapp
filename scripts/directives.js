(function() {
    'use strict';

    angular.module('contractor')
        .directive('sliderNav', function() {
            /*
             *  SliderNav - A Simple Content Slider with a Navigation Bar
             *  Copyright 2010 Monjurul Dolon, http://mdolon.com/
             *  Released under the MIT, BSD, and GPL Licenses.
             *  More information: http://devgrow.com/slidernav
             */
            $.fn.sliderNav = function(options) {
                var defaults = {
                    items: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
                    debug: false,
                    height: null,
                    arrows: true
                };
                var opts = $.extend(defaults, options);
                var o = $.meta ? $.extend({}, opts, $.data()) : opts;
                var slider = $(this);
                $(slider).addClass('slider');
                $('.slider-content li:first', slider).addClass('selected');
                $(slider).append('<div class="slider-nav"><ul></ul></div>');
                for (var i in o.items) {
                    $('.slider-nav ul', slider).append("<li><a alt='#" + o.items[i] + "'>" + o.items[i] + "</a></li>");
                }
                var height = $('.slider-nav', slider).height();
                if (o.height) {
                    height = o.height;
                }
                $('.slider-content, .slider-nav', slider).css('height', height);
                if (o.debug) {
                    $(slider).append('<div id="debug">Scroll Offset: <span>0</span></div>');
                }
                $('.slider-nav a', slider).mouseover(function(event) {
                    var target = $(this).attr('alt');
                    var cOffset = $('.slider-content', slider).offset().top;
                    var tOffset = $('.slider-content ' + target, slider).offset().top;
                    var height = $('.slider-nav', slider).height();
                    if (o.height) {
                        height = o.height;
                    }
                    var pScroll = (tOffset - cOffset) - height / 8;
                    $('.slider-content li', slider).removeClass('selected');
                    $(target).addClass('selected');
                    $('.slider-content', slider).stop().animate({
                        scrollTop: '+=' + pScroll + 'px'
                    });
                    if (o.debug) {
                        $('#debug span', slider).html(tOffset);
                    }
                });
                if (o.arrows) {
                    $('.slider-nav', slider).css('top', '20px');
                    $(slider).prepend('<div class="slide-up end"><span class="arrow up"></span></div>');
                    $(slider).append('<div class="slide-down"><span class="arrow down"></span></div>');
                    $('.slide-down', slider).click(function() {
                        $('.slider-content', slider).animate({
                            scrollTop: "+=" + height + "px"
                        }, 500);
                    });
                    $('.slide-up', slider).click(function() {
                        $('.slider-content', slider).animate({
                            scrollTop: "-=" + height + "px"
                        }, 500);
                    });
                }
            };

            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    element.sliderNav();
                }
            };
        })
        .directive('sidebarToggle', function() {
            return {
                restrict: 'C',
                link: function(scope, element, attrs) {
                    element.bind('click', function(e) {
                        e.preventDefault();

                        //If window is small enough, enable sidebar push menu
                        if ($(window).width() <= 992) {
                            $('.row-offcanvas').toggleClass('active');
                            $('.left-side').removeClass("collapse-left");
                            $('.right-side').removeClass("strech");
                            $('.row-offcanvas').toggleClass("relative");
                        } else {
                            //Else, enable content streching
                            $('.left-side').toggleClass("collapse-left");
                            $('.right-side').toggleClass("strech");
                        }
                    });
                }
            };
        })
        .directive('btn', function() {
            //Add hover support for touch devices
            return {
                restrict: 'C',
                link: function(scope, element, attrs) {
                    element.bind('touchstart', function() {
                        $(this).addClass('hover');
                    }).bind('touchend', function() {
                        $(this).removeClass('hover');
                    });
                }
            };
        })
        .directive('treeview', function() {
            /*
             * SIDEBAR MENU
             * ------------
             * This is a custom plugin for the sidebar menu. It provides a tree view.
             *
             * Usage:
             * $(".sidebar).tree();
             *
             * Note: This plugin does not accept any options. Instead, it only requires a class
             *       added to the element that contains a sub-menu.
             *
             * When used with the sidebar, for example, it would look something like this:
             * <ul class='sidebar-menu'>
             *      <li class="treeview active">
             *          <a href="#>Menu</a>
             *          <ul class='treeview-menu'>
             *              <li class='active'><a href=#>Level 1</a></li>
             *          </ul>
             *      </li>
             * </ul>
             *
             * Add .active class to <li> elements if you want the menu to be open automatically
             * on page load. See above for an example.
             */
            $.fn.tree = function() {
                return this.each(function() {
                    var btn = $(this).children("a").first();
                    var menu = $(this).children(".treeview-menu").first();
                    var isActive = $(this).hasClass('active');

                    //initialize already active menus
                    if (isActive) {
                        menu.show();
                        btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
                    }
                    //Slide open or close the menu on link click
                    btn.click(function(e) {
                        e.preventDefault();
                        if (isActive) {
                            //Slide up to close menu
                            menu.slideUp();
                            isActive = false;
                            btn.children(".fa-angle-down").first().removeClass("fa-angle-down").addClass("fa-angle-left");
                            btn.parent("li").removeClass("active");
                        } else {
                            //Slide down to open menu
                            menu.slideDown();
                            isActive = true;
                            btn.children(".fa-angle-left").first().removeClass("fa-angle-left").addClass("fa-angle-down");
                            btn.parent("li").addClass("active");
                        }
                    });

                    /* Add margins to submenu elements to give it a tree look */
                    menu.find("li > a").each(function() {
                        var pad = parseInt($(this).css("margin-left")) + 10;

                        $(this).css({
                            "margin-left": pad + "px"
                        });
                    });

                });

            };
            return {
                restrict: 'C',
                link: function(scope, element, attrs) {
                    element.tree();
                }
            };
        })
        .directive('errSrc', function() {
            return {
                link: function(scope, element, attrs) {
                    scope.$watch(function() {
                        return attrs['ngSrc'];
                    }, function(value) {
                        if (!value) {
                            element.attr('src', attrs.errSrc);
                        }
                    });

                    element.bind('error', function() {
                        element.attr('src', attrs.errSrc);
                    });
                }
            };
        })
        .directive("repeatEnd", function(){
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    if (scope.$last) {
                        scope.$eval(attrs.repeatEnd);
                    }
                }
            };
        });


})();
