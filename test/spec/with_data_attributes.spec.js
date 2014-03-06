'use strict';

describeMixin('lib/with_data_attributes', function () {

  it('Sets the element data attributes as defaultAttrs', function () {
    setupComponent("<div data-id='14' data-name='jack'></div>");
    expect(this.component.attr.name).toBe('jack');
    expect(this.component.attr.id).toBe(14);
  });

  describe('strictMode', function () {
    describe('when strictMode is enabled', function () {
      it('Only sets the data attributes that are espeficied in the defaultAttrs', function () {
        setupComponent("<div data-id='14' data-name='jack'></div>", {
          strictMode: true,
          name: 'Default'
        });
        expect(this.component.attr.name).toBe('jack');
        expect(this.component.attr.id).toBe(undefined);
      });
    });
    describe('when strictMode is disabled', function () {
      it('Sets all the data attributes even if they are not part of defaultAttrs', function () {
        setupComponent("<div data-id='14' data-name='jack'></div>", {
          strictMode: false,
          name: 'Default'
        });
        expect(this.component.attr.name).toBe('jack');
        expect(this.component.attr.id).toBe(14);
      });
    });
  });
});
