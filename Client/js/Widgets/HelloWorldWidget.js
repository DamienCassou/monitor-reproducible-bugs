import { Widget } from "widgetjs";

export class HelloWorldWidget extends Widget {
	renderContentOn(html) {
		html.h1("This is a title");
	}
}
