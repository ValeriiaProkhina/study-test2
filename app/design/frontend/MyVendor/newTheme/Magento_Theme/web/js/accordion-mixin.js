define(['jquery'], function ($) {
    'use strict';

    return function (Accordion) {
        return $.widget('mage.accordion', Accordion, {
            _create: function () {
                this._super();
                this._addCustomIcons();
            },

            _addCustomIcons: function () {
                const self = this;

                this.element.find(this.options.header).each(function () {
                    const $header = $(this);

                    if ($header.find('.custom-accordion-icon').length === 0) {
                        $header.prepend('<span class="custom-accordion-icon">➕</span>');
                    }
                });

                this.element.on('click', this.options.header, function () {
                    const $icon = $(this).find('.custom-accordion-icon');
                    const isOpen = $(this).next().is(':visible');

                    $icon.text(isOpen ? '➖' : '➕');
                });
            }
        });
    };
});
