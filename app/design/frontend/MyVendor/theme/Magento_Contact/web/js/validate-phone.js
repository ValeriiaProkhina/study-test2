define(['jquery', 'mage/validation'], function($) {
    'use strict';

    const uaOperators = ['50', '66', '67', '68', '98', '99', '73', '63', '93', '97', '92', '91'];
    return function(validation) {
        const isValidUaOperator = value => {
            const number= value.replace('+380', '').replace(/\s|-/g, '').substring(0, 2);
            return uaOperators.includes(number);
        }

         $.validator.addMethod(
           'validate-ua-operator',
             (value) =>  isValidUaOperator(value),
             $.mage.__('Use a valid ukrainian operator')
         );

        return validation;
    }
});
