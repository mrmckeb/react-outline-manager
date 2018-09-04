(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global.ReactOutlineHander = factory(global.React));
}(this, (function (react) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var DEFAULT_CLASSNAME = 'ReactOutlineHandler';

  var ReactOutlineHander =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ReactOutlineHander, _Component);

    function ReactOutlineHander() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ReactOutlineHander);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactOutlineHander)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        isUsingKeyboard: false
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addListeners", function () {
        window.addEventListener('keydown', _this.handleTab);
        if (_this.props.toggle) window.addEventListener('mousedown', _this.handleMouseDown);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTab", function (_ref) {
        var keyCode = _ref.keyCode;

        if (keyCode === 9) {
          _this.setState({
            isUsingKeyboard: true
          });

          if (!_this.props.toggle) window.removeEventListener('keydown', _this.handleTab);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseDown", function () {
        _this.setState({
          isUsingKeyboard: false
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "insertStyleTag", function () {
        var script = document.createElement('style');
        var className = _this.props.className || DEFAULT_CLASSNAME;
        script.id = className;
        script.innerText = ".".concat(className, " a:focus,.").concat(className, " area:focus,.").concat(className, " button:focus,.").concat(className, " iframe:focus,.").concat(className, " input:focus,.").concat(className, " select:focus,.").concat(className, " textarea:focus,.").concat(className, " [tabindex]:focus,.").concat(className, " [contenteditable]:focus { outline: none; }");
        document.head.appendChild(script);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeListeners", function () {
        window.removeEventListener('keydown', _this.handleTab);
        window.removeEventListener('mousedown', _this.handleMouseDown);
      });

      return _this;
    }

    _createClass(ReactOutlineHander, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.addListeners();
        this.insertStyleTag();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeListeners();
      }
    }, {
      key: "render",
      value: function render() {
        var className = this.props.className || DEFAULT_CLASSNAME;
        return React.createElement("div", !this.state.isUsingKeyboard ? {
          className: className
        } : null, this.props.children);
      }
    }]);

    return ReactOutlineHander;
  }(react.Component);

  return ReactOutlineHander;

})));
