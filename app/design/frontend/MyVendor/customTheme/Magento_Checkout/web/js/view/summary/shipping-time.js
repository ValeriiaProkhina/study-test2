define(['uiComponent'], function(Component) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super()
            console.log('shippingtime initialized')
        },
        defaults: {
            tracks: {
                countryId: true
            },
            listens: {
                '${ $.shippingAddressProvider }.country_id': 'countryId',
                '${ $.shippingAddressProvider }.region_id': 'handleRegionChange'
            }
        },
        showMessage: function() {
            return this.countryId === 'US';
        },
        handleRegionChange: function (newRegionId) {
            console.log('New Region Id: ' + newRegionId)
        }
    });
});
