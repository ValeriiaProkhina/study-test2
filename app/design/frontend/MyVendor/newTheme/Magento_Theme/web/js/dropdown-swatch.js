define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget('custom.dropdownSwatch', {
        _create: function () {
            this._bindEvents();
        },

        _bindEvents: function () {
            const self = this;
            const $toggle = this.element.find('.dropdown-toggle');
            const $options = this.element.find('.dropdown-options');

            $toggle.on('click', function (e) {
                e.stopPropagation();
                $('.dropdown-options').not($options).slideUp();
                $options.slideToggle();
            });

            $options.on('click', 'li', function () {
                const $selected = $(this);
                const selectedValue = $selected.data('value');
                const selectedLabel = $selected.text();

                $toggle.text(selectedLabel);
                $options.slideUp();

                self._triggerChange(selectedValue);
            });

            $(document).on('click', function () {
                $options.slideUp();
            });
        },

        _triggerChange: function (value) {
            console.log('Selected value:', value);
            this.element.trigger('swatch:selected', { value: value });
        }
    });

    return $.custom.dropdownSwatch;
});
