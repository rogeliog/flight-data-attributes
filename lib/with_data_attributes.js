define(function (require) {

  'use strict';

  function withDataAttributes() {
    this.loadDataAttributes = function () {
      $.each(this.$node.data(), function (key, value) {
        if(!this.strictMode || this.attr[key] !== undefined) {
          this.attr[key] = value;
        }
      }.bind(this));
    };

    this.after('initialize', function () {
      this.strictMode = this.attr.strictMode || false;
      this.loadDataAttributes();
    });
  }

  return withDataAttributes;
});
