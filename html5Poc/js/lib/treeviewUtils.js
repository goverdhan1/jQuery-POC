define(['jsTree'], 
	function(){
		'use strict';
		var treeViewUtils;
		treeViewUtils = {
			
			createTree: function(div, data) {
				
				$("#" + div).jstree({
					"json_data" : {
						"data" : data
					},
					"plugins" : ["json_data", "ui"]
				});
			}
		}
	}
);
