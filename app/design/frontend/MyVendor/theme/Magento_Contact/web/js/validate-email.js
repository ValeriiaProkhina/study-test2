define(['jquery', 'mage/validation'], function($) {
    'use strict';

    return function(validation) {

        $.validator.addMethod(
            'validate-email-custom',
            function (value) {
                const emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
                return emailPattern.test(value)
            },
            $.mage.__('Email must contain only latin letters and be in a valid format (example@example.com).')
        );
        return validation;
    }
});

