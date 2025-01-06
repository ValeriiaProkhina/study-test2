define(['jquery'], function ($) {
    'use strict';

    return function (originalShipping) {
        return originalShipping.extend({

            initialize: function () {
                this._super()
                this.isFilteringRates = false
                this.rates.subscribe(this.filterRates.bind(this))
            },

            filterRates: function (rates) {
                if (this.isFilteringRates) {
                    return
                }
                console.log('Before filtering:', rates)

                this.isFilteringRates = true

                const filteredRates = rates.filter(rate => rate.amount <= 1000)
                this.rates(filteredRates)
                console.log('After filtering', this.rates())
                this.isFilteringRates = false
            }
        });
    };
});
