const config = {
    map: {
        "*": {
            modal: "Magento_Cms/js/modal",
        },
    },

    paths: {
        slick: 'Magento_Theme/js/lib/slick',
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};
