define(['jquery', 'mage/translate'], function($, $t) {
    'use strict';

    return function(targetWidget) {
        $.validator.addMethod(
            'cyrillic',
            (value) => /^[а-яА-ЯіІїЇєЄйЙэЭъЪёЁ'-]+$/.test(value),
            $t('Please enter Cyrillic or hyphen')
        )
        return targetWidget;
    }
});
