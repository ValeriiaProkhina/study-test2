const config = {
    map: {
        "*": {
            modal: "Magento_Cms/js/modal",
            myCustomWidget: "Magento_Theme/js/my-custom-widget"
        }
    },
    paths: {
        slick: 'Magento_Theme/js/lib/slick',
        inputmask: 'Magento_Contact/js/lib/jquery.inputmask.bundle'
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        inputmask: {
            deps: ['jquery']
        }
    }
};
