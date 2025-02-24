define(['jquery'], function ($) {
    'use strict';

    return function (Tooltip) {
        return $.widget('mage.tooltip', Tooltip, {

            _create: function () {
                this._super();
                this._addCustomAnimation();
            },

            _addCustomAnimation: function () {
                const $tooltip = this.tooltip;

                if ($tooltip.length) {
                    console.log('tooltip')
                    $tooltip.addClass('custom-tooltip-animation');


                    this.element.on('mouseenter', () => {
                        $tooltip.addClass('show');
                    });

                    this.element.on('mouseleave', () => {
                        $tooltip.removeClass('show');
                    });
                }
            }
        });
    };
});
