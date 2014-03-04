define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(dataAttributes);

  /**
   * Module function
   */

  function dataAttributes() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }

});
