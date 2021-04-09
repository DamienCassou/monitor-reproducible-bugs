import { HelloWorldWidget } from "Widgets/HelloWorldWidget";

const main = (animal) => {
	jQuery("body");

	let widget = new HelloWorldWidget();
	widget.appendTo("body");
};

jQuery(() => {
	main(window.animal);
});
