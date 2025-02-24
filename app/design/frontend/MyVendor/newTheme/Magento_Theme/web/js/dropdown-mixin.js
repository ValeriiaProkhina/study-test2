define(['jquery'], function ($) {
    'use strict'

    return function (orginalWidget) {
        $.widget('mage.dropdownDialog', $.mage.dropdownDialog, {
            open: function () {
                console.log(' mixin loaded')
                return this._super()
            }
        })

        return $.mage.dropdownDialog
    }
})
