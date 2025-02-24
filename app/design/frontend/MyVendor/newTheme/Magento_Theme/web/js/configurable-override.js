define([
    'jquery',
    'jquery/ui',
    'Magento_ConfigurableProduct/js/configurable'
], function ($) {
    $.widget('custom.configurable', $.mage.configurable, {

        _create: function () {
            this._super();
            this._bindCustomMessage();
        },

        _bindCustomMessage: function () {
            const self = this;


            this.element.on('change', function () {
                const selectedOptions = self._getSelectedOptions();
                self._updateCustomMessage(selectedOptions);
            });
        },

        _getSelectedOptions: function () {
            const selectedOptions = this.options.spConfig.index[this.getSelectedAttributes()];
            return selectedOptions || null;
        },
        _updateCustomMessage: function (selectedOptions) {
            const message = selectedOptions
                ? $.mage.__('You selected: ') + selectedOptions.label
                : $.mage.__('Please select a configuration');

            $('.custom-configurable-message').text(message);
        }
    });

    return $.custom.configurable;
});
