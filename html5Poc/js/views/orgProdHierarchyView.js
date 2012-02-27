define(['underscore', 'backbone', 'text!templates/treeView.html', 'mediator'],
function(_, Backbone, treeViewTemplate, mediator) {
	var OrgProdHierarchyView = Backbone.View.extend({
		
		template: _.template(treeViewTemplate),
		
		container: "#treeview-container",
		
		events: {
			
		},
		
		render: function() {
			$(this.el).html(this.template());
			//mediator.publish('treeViewRenderDone', this);
		}
	});
	
	return OrgProdHierarchyView;
});
