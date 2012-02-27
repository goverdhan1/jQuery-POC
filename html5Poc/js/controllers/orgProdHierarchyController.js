define(['underscore', 'backbone', 'views/orgProdHierarchyView', "models/orgProdHierarchy", "mediator", "sampleData"],
	function(_, Backbone, OrgProdHierarchyView, OrgProdHierarchyModel, mediator) {
		var OrgProdHierarchyController = {
			
			initialize: function() {
				
				// Populate the model
				var model = new OrgProdHierarchyModel();
				model.daily = treeData;
				
				// Create the view and pass it the model
				var view = new OrgProdHierarchyView(model);
				mediator.publish('do');
				//$("#" + view.container).html($(view.el).render());
			}
		};
		return OrgProdHierarchyController;	
	}
);
