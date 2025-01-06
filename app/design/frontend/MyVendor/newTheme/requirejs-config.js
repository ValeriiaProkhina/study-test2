var config = {
    map: {
        '*': {
            'Magento_Swatches/js/swatch-renderer': 'Magento_Swatches/js/swatch-renderer',
            'Magento_Checkout/js/view/minicart': 'Magento_Checkout/js/view/minicart',
            'Magento_Checkout/js/view/shipping': 'Magento_Checkout/js/view/shipping'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Magento_Checkout/js/mixin/shipping-mixin': true
            }
        }
    }
};
