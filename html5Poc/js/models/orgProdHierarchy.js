define(['underscore', 'backbone'], 
	function(_, Backbone) {  
		var OrgProdHierarchyModel = Backbone.Model.extend(
			{    // Default attributes for the model.    
				defaults: {      
					daily: [],      
					monthly: []
				},
		    	    	 
			}
		);  
		return OrgProdHierarchyModel;
	}
); 

