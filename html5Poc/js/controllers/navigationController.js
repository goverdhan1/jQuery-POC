define(['underscore', 'backbone', 'views/orgProdHierarchyView', "models/orgProdHierarchy", "mediator", "sampleData"],
	function(_, Backbone, OrgProdHierarchyView, OrgProdHierarchyModel, mediator) {
		var NavigationController = {
			
			initialize: function() {
				
				mediator.subscribe("do", function() {
					alert("done");
				});
				
			}
		};
		return NavigationController;	
	}
);
