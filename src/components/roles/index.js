import angular from 'angular';
import 'angular-animate';
import 'angular-aria'
import 'angular-messages'
import 'angular-material';

import rolesComponent from './roles.component';

export default angular.module('roles', ['ngMaterial', 'ngAnimate']).component('roles', rolesComponent)
    .controller('rolesController', [
        function () {
        //fake gettting data from a database. work more quickly
        var vm = this;
        var dexter = [];
        var sinister = [];

        vm.$onInit = function () {
            vm.all = require('./data/roles.json');
            dexter = [];
            sinister = [];
            for(var i = 0; i < vm.all.length; i++){
                var row = vm.all[i];
                if(row.IsDexter){
                    dexter.push(row);
                }else if(row.IsSinister){
                    sinister.push(row);
                }
            }
        }

        }
    ])
;

console.log('roles');