'use strict';

angular.module('ansEloApp.auth', [
  'ansEloApp.constants',
  'ansEloApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
