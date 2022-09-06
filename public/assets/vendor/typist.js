(function() {
  var Utilities,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Utilities = (function() {
    function Utilities() {
      this._fireEvent = __bind(this._fireEvent, this);
      this._empty = __bind(this._empty, this);
      this._each = __bind(this._each, this);
    }

    Utilities.prototype._addEvent = function(element, event, fn, useCapture) {
      if (useCapture == null) {
        useCapture = false;
      }
      return element.addEventListener(event, fn, useCapture);
    };

    Utilities.prototype._forEach = function(array, fn, bind) {
      var i, l, _results;
      i = 0;
      l = array.length;
      _results = [];
      while (i < l) {
        if (i in array) {
          fn.call(bind, array[i], i, array);
        }
        _results.push(i++);
      }
      return _results;
    };

    Utilities.prototype._each = function(array, fn, bind) {
      if (array) {
        this._forEach(array, fn, bind);
        return array;
      }
    };

    Utilities.prototype._pass = function(fn, args, bind) {
      if (args == null) {
        args = [];
      }
      return function() {
        return fn.apply(bind, args);
      };
    };

    Utilities.prototype._delay = function(fn, delay, bind, args) {
      if (args == null) {
        args = [];
      }
      return setTimeout(this._pass(fn, args, bind), delay);
    };

    Utilities.prototype._periodical = function(fn, periodical, bind, args) {
      if (args == null) {
        args = [];
      }
      return setInterval(this._pass(fn, args, bind), periodical);
    };

    Utilities.prototype._setHtml = function(element, string) {
      return element.innerHTML = string;
    };

    Utilities.prototype._getHtml = function(element) {
      return element.innerHTML;
    };

    Utilities.prototype._empty = function(element) {
      return this._setHtml(element, "");
    };

    Utilities.prototype._fireEvent = function(event, text) {
      if (this.options[event]) {
        return this.options[event].call(this, text, this.options);
      }
    };

    Utilities.prototype._extend = function(object, properties) {
      var key, val;
      for (key in properties) {
        val = properties[key];
        object[key] = val;
      }
      return object;
    };

    return Utilities;

  })();

  this.Typist = (function(_super) {
    __extends(Typist, _super);

    function Typist(element, options) {
      if (options == null) {
        options = {};
      }
      this.typeLetter = __bind(this.typeLetter, this);
      this.typeLetters = __bind(this.typeLetters, this);
      this.typeText = __bind(this.typeText, this);
      this.selectOffset = __bind(this.selectOffset, this);
      this.selectText = __bind(this.selectText, this);
      this.fetchVariations = __bind(this.fetchVariations, this);
      this.next = __bind(this.next, this);
      this.slide = __bind(this.slide, this);
      this.setupDefaults = __bind(this.setupDefaults, this);
      this.options = {
        typist: element,
        letterSelectInterval: 60,
        interval: 3000,
        selectClassName: "selectedText"
      };
      this.options = this._extend(this.options, options);
      this.elements = {
        typist: this.options.typist
      };
      this.offsets = {
        current: {
          index: 0,
          text: ""
        }
      };
      if (this.elements.typist) {
        this.setupDefaults();
      }
    }

    Typist.prototype.setupDefaults = function() {
      this.variations = this.fetchVariations(this.elements.typist);
      this.newText = [];
      return this.timer = this._periodical(this.slide, this.options.interval);
    };

    Typist.prototype.slide = function(forcedText) {
      this.offsets.current.text = this.variations[this.offsets.current.index];
      this.offsets.current.text = this.offsets.current.text.split("");
      this._each(this.offsets.current.text, this.selectText);
      this.offsets.current.index = this.next(this.offsets.current.index);
      this._delay((function(_this) {
        return function() {
          _this.options.currentSlideIndex = _this.offsets.current.index;
          return _this.typeText(_this.variations[_this.offsets.current.index]);
        };
      })(this), this.options.letterSelectInterval * this.offsets.current.text.length);
      if (this.variations.length <= this.offsets.current.index) {
        this.offsets.current.index = 0;
      } else if (this.offsets.current.index === 0) {
        this.offsets.current.index = this.variations.length;
      } else {
        this.offsets.current.index = this.offsets.current.index;
      }
      return this.newText.length = 0;
    };

    Typist.prototype.next = function(offset) {
      return offset = offset + 1;
    };

    Typist.prototype.fetchVariations = function(element) {
      var text, value, variations;
      text = element.getAttribute("data-typist");
      value = this._getHtml(element);
      variations = text.split(",");
      variations.splice(0, 0, value);
      return variations;
    };

    Typist.prototype.selectText = function(letter, index) {
      return this._delay((function(_this) {
        return function() {
          return _this.selectOffset((_this.offsets.current.text.length - index) - 1);
        };
      })(this), index * this.options.letterSelectInterval);
    };

    Typist.prototype.selectOffset = function(offset) {
      var selected, text, unselected;
      text = this.offsets.current.text;
      selected = text.slice(offset, text.length);
      selected = selected.join("");
      unselected = text.slice(0, offset);
      unselected = unselected.join("");
      return this._setHtml(this.elements.typist, "" + unselected + "<em class=\"" + this.options.selectClassName + "\">" + selected + "</em>");
    };

    Typist.prototype.typeText = function(text) {
      this.typeTextSplit = text.split("");
      this._each(this.typeTextSplit, this.typeLetters);
      return this._fireEvent("onSlide", text);
    };

    Typist.prototype.typeLetters = function(letter, index) {
      clearInterval(this.timer);
      return this._delay((function(_this) {
        return function() {
          return _this.typeLetter(letter, index);
        };
      })(this), index * this.options.letterSelectInterval);
    };

    Typist.prototype.typeLetter = function(letter, index) {
      this._empty(this.elements.typist);
      this.newText.push(letter);
      this._setHtml(this.elements.typist, this.newText.join(""));
      if (this.typeTextSplit.length === index + 1) {
        return this.timer = this._periodical(this.slide, this.options.interval);
      }
    };

    return Typist;

  })(Utilities);

}).call(this);
