/*global QUnit*/

sap.ui.define([
	"comapp/firstui5proj/controller/demo1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("demo1 Controller");

	QUnit.test("I should test the demo1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
