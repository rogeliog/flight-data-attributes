define(function (require) {

  'use strict';

  function withDataAttributes() {
    this.defaultAttrs({

    });

    this.loadDataAttributes = function () {
      $.each(this.$node.data(), function (key, value) {
        this.attr[key] = value;
      }.bind(this));
    };

    this.after('initialize', function () {
      this.loadDataAttributes();
    });
  }

  return withDataAttributes;
});
