sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("com.sap.postcard.postcard.controller.postcardCreate", {
			onInit: function () {

            //     var oModel = new sap.ui.model.odata.v2.ODataModel("/v2/catalog/", {
			// 	defaultBindingMode: sap.ui.model.BindingMode.TwoWay,
			// 	json: true
			// });
            // this.getView().setModel(oModel);
            // // oModel.read("PostCard(ID='738b04e1-3f20-46d2-a536-2794a56169a4')");
            var oModel = new JSONModel(sap.ui.require.toUrl("com/sap/postcard/postcard/model/data.json"));
			this.getView().setModel(oModel)

			}
		});
	});
