/*! angular-seed-master 2013-04-23 */
"use strict";function MyCtrl1(){}function MyCtrl2(e){e.multiCheck=[{text:"Is Brandon cool?",value:!1},{text:"Is Jon cool?",value:!1},{text:"Is this true?",value:!0}],console.log(e.multiCheck[1].value),e.testModel="test",e.userType="guest"}angular.module("myApp.directives",[]).directive("appVersion",["version",function(e){return function(t,r){r.text(e)}}]),MyCtrl1.$inject=["$scope"],MyCtrl2.$inject=["$scope"];var app=angular.module("myApp",["myApp.filters","myApp.services","myApp.directives","ui","ui.bootstrap"]);app.config(["$routeProvider",function(e){e.when("/view1",{templateUrl:"partials/partial1.html"}),e.when("/view2",{templateUrl:"partials/partial2.html",controller:"MyCtrl2"}),e.otherwise({redirectTo:"/view1"})}]),angular.module("myApp.filters",[]).filter("interpolate",["version",function(e){return function(t){return(t+"").replace(/\%VERSION\%/gm,e)}}]),angular.module("myApp.services",[]).value("version","0.1");