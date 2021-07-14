/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/postcard/postcard/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
