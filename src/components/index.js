import angular from 'angular';

import roles from './roles';


export default angular.module('components', [roles.name]);

console.log('components');