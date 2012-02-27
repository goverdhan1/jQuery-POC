
define(['mediator', 'controllers/application_controller'], function(mediator, ApplicationController) {
  'use strict';
  var Application;
  Application = {
    initialize: function() {
      return this.initControllers();
    },
    initControllers: function() {      
      return new ApplicationController();
    }
  };
  Application.initialize();
  return Application;
});
