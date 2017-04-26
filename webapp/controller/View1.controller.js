sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

   
	return Controller.extend("view1purchase_order.controller.View1", {
  onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
			this.getView().setModel(oModel,"oModel");
			oModel.loadData("model/ap.json",null,false);
			
			
			/*var filterBar = this.getView().byId("FD_VP_INVENTORY_REPORT");
			filterBar._oFiltersButton.setVisible(false);
			filterBar._oSearchButton.setText("Search").addStyleClass(
			"sapUiSizeCompact").setWidth("5rem");
			filterBar._oClearButtonOnFB.setVisible(true);*/
	},onClear : function(oEvent) {
      /* var oModel= this.getView().getModel("oModel");
	oModel.setData();*/
		
		this.getView().byId("inp1").setValue("");
		this.getView().byId("inp2").setValue("");
		this.getView().byId("inp3").setValue("");
		this.getView().byId("inp4").setValue("");
		this.getView().byId("inp5").setValue("");
		this.getView().byId("inp6").setValue("");
		this.getView().byId("inp7").setValue("");
		this.getView().byId("inp8").setValue("");
		this.getView().byId("inp9").setValue("");
	
		var invSOHTableView = this.getView().byId("invSOHTableView");
		invSOHTableView.setVisible(false);

		/*this.getView().byId("SOH_SEARCH").setValue(null);*/

	/**/
		},
		onSearch: function(oEvent) {
		  	/*var that = this;*/
	   	//this.busy.open();
	   	
	   	var invSOHTableView = this.getView().byId("invSOHTableView");
	   	
	invSOHTableView.setVisible(true);

		   	}
	});
});