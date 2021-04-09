/**
 * This module makes it possible to mount a Widgetjs widget directly
 * within a Cypress page. This way, widgets can be tested separately
 * from any page.
 */
const mount = (widget) => {
	cy.window({ log: false }).then((win) => {
		// Empty window
		win.document.body.innerHTML = "";

		// Add our widget to the window:
		win.app = widget;
		widget.appendTo("body");
	});
};

module.exports = { mount };
