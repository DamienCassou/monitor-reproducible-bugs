import { Widget } from "widgetjs";

export default class HelloWorldWidget extends Widget {
	renderContentOn(html) {
		html.h1("This is a title");
		html.button({click: () => this._onClick()}, "Click me");
	}

	_onClick() {
		console.log("Foo");
	}
}
