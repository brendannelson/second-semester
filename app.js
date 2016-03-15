var module = angular.module('app', []);

module.controller('AppCtrl', AppCtrl);

function AppCtrl() {
    this.message = 'Hello from AngularLand';
    this.colors = ['red', 'blue', 'green'];
}