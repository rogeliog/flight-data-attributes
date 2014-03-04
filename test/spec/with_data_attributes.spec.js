'use strict';

describeMixin('lib/with_data_attributes', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent("<div data-id='14' data-name='jack'></div>");
  });

  it('Sets the element data attributes as defaultAttrs', function () {
    expect(this.component.attr.name).toBe('jack');
    expect(this.component.attr.id).toBe(14);
  });

});
