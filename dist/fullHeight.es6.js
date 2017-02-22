/*
 * full-height-sections 1.0.0
 * Vanilla.js full-height sections plugin. Create full screen pages simple.
 * https://github.com/qmixi/full-height-sections
 *
 * Copyright (C) 2017 - A project by Piotr Kumorek
 * Released under the MIT license.
*/

class FullHeight {
	constructor(options) {
		this.elements = options.elements || 'full-height';
		this.init();
	};

	init() {
		this.getSections();

		if (this.sections && this.sections.length) {
			this.setHeight();
			this.observe();
		} else {
			console.warn("Couldn't find any sections");
		}
	};

	getSections() {
		const selector = "." + this.elements;
		this.sections = document.querySelectorAll(selector);
	};

	setHeight() {
		const height = window.innerHeight + 'px';
		for (let value of this.sections) {
			value.style.height = height;
		}
	};

	observe() {
		window.addEventListener("resize", () => {
			this.setHeight();
		});
	};
};
//# sourceMappingURL=fullHeight.js.map
