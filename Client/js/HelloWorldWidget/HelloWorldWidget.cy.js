import HelloWorldWidget from "./HelloWorldWidget.js";
import { mount } from "../../cypress/support/cypress-widgetjs-unit-test.js";

describe("HelloWorldWidget", () => {
	it("shows foo", () => {
		mount(new HelloWorldWidget())

		cy.contains("This is a title")
	})

	it("has a button", () => {
		mount(new HelloWorldWidget())

		cy.contains("Click me").click()
	})
})
