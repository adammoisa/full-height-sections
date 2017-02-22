"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FullHeight = function () {
	function FullHeight(options) {
		_classCallCheck(this, FullHeight);

		this.elements = options.elements || 'full-height';
		this.init();
	}

	_createClass(FullHeight, [{
		key: "init",
		value: function init() {
			this.getSections();

			if (this.sections && this.sections.length) {
				this.setHeight();
				this.observe();
			} else {
				console.warn("Couldn't find any sections");
			}
		}
	}, {
		key: "getSections",
		value: function getSections() {
			var selector = "." + this.elements;
			this.sections = document.querySelectorAll(selector);
		}
	}, {
		key: "setHeight",
		value: function setHeight() {
			var height = window.innerHeight + 'px';
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					value.style.height = height;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: "observe",
		value: function observe() {
			var _this = this;

			window.addEventListener("resize", function () {
				_this.setHeight();
			});
		}
	}]);

	return FullHeight;
}();

;