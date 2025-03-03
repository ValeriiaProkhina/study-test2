define([
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'underscore',
    'knockout'
], function (Component, customerData, _, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            subtotal: 0.00,
            freeShippingThreshold: 100,
            template: 'Magento_Theme/free-shipping-banner',
            tracks: {
                subtotal: true
            }
        },
        initialize: function () {
            this._super();

            const self = this;
            const cart = customerData.get('cart')

            customerData.getInitCustomerData().done(function () {
                if (!_.isEmpty(cart()) && !_.isUndefined(cart().subtotalAmount)) {
                    self.subtotal = parseFloat(cart().subtotalAmount);
                }
            })

            cart.subscribe(function (cart) {
                if (!_.isEmpty(cart) && !_.isUndefined(cart.subtotalAmount)) {
                    self.subtotal = parseFloat(cart.subtotalAmount)
                }
            })

            self.message = ko.computed(function () {
                if (self.subtotal === 0 || _.isUndefined(self.subtotal)) {
                    return self.messageDefault.replace('{{freeShippingThreshold}}', self.freeShippingThreshold)
                }
                if (self.subtotal > 0 && self.subtotal < self.freeShippingThreshold) {
                    const subtotalRemaining = self.freeShippingThreshold - self.subtotal;
                    const formatedSubtotalRemaining = self.formatCurrency(subtotalRemaining)
                    return self.messageItemsInCart.replace('$XX.XX', formatedSubtotalRemaining);
                }
                if (self.subtotal >=100) {
                    return self.messageFreeShipping;
                }
            })
        },
        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
        }
    });
});
