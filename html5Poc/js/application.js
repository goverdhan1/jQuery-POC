
define(['mediator', 'controllers/mainController'], function(mediator, MainController) {
  'use strict';
  var Application;
  Application = {
    initialize: function() {
      return this.initControllers();
    },
    initControllers: function() {      
      return new MainController();
    }
  };
  Application.initialize();
  return Application;
});
