import { mount } from "/cypress/support/cypress-widgetjs-unit-test";
import { HelloWorldWidget } from "Widgets/HelloWorldWidget";

describe("HelloWorldWidget", function () {
	it("shows a title", function () {
		mount(new HelloWorldWidget());

		cy.contains("This is a title");
	});
});
