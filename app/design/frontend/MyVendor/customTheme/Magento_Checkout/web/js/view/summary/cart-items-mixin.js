define ([], function () {
    'use strict';

    return function (Component) {
        return Component.extend({
           isItemBlocksExpanded: function () {
               this._super()
               return true
           }
        })
    }
})
