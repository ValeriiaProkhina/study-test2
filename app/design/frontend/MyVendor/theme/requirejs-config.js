const config = {
    map: {
        "*": {
            modal: "Magento_Cms/js/modal",
            myCustomWidget: "Magento_Theme/js/my-custom-widget"
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
