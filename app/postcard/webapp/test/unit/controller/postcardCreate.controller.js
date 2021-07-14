/*global QUnit*/

sap.ui.define([
	"com/sap/postcard/postcard/controller/postcardCreate.controller"
], function (Controller) {
	"use strict";

	QUnit.module("postcardCreate Controller");

	QUnit.test("I should test the postcardCreate controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
