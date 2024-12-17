define(['jquery', 'inputmask'], function ($) {
    'use strict';

    return function () {
        $(document).ready(function () {
            $('#telephone').inputmask({
                    "mask": "+380 99 999-99-99",
                    "placeholder": "_",
                    "showMaskOnHover": false,
                    "clearIncomplete": true
            });
        });
    };

});

