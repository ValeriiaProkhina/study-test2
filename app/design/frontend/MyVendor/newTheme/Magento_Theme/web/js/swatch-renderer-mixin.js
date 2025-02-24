define(['jquery'], function ($) {
    'use strict';

    return function (SwatchRenderer) {
        return $.widget('mage.SwatchRenderer', SwatchRenderer, {

            _OnClick: function ($this, $widget) {
                this._super($this, $widget)

                this._updateCustomMessage();
            },

            _updateCustomMessage: function () {
                const selectedOptions = [];

                this.element.find('.swatch-attribute').each(function () {
                    const $attribute = $(this);
                    const attributeLabel = $attribute.find('.swatch-attribute-label').text().trim();
                    const $selectedSwatch = $attribute.find('.swatch-option.selected');

                    const selectedSwatch = $selectedSwatch.data('option-label');

                    console.log('Attribute Label:', attributeLabel);
                    console.log('Selected Swatch Element:', $selectedSwatch);
                    console.log('Selected Swatch Label:', selectedSwatch);

                    if (selectedSwatch) {
                        console.log('swatch selected:', attributeLabel + ': ' + selectedSwatch);
                        selectedOptions.push(attributeLabel + ': ' + selectedSwatch);
                    } else {
                        console.log('no swatch selected:', attributeLabel);
                    }
                });


                const message = selectedOptions.length
                    ? $.mage.__('You selected: ') + selectedOptions.join(', ')
                    : $.mage.__('Please select a configuration');


                if ($('.custom-configurable-message').length) {
                    $('.custom-configurable-message').text(message);
                } else {
                    $('<div class="custom-configurable-message"/>')
                        .text(message)
                        .insertAfter('.product-options-wrapper');
                }
            }
        });
    };
});
