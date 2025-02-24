const config = {
    map: {
        '*': {
            'Magento_Swatches/js/swatch-renderer': 'Magento_Swatches/js/swatch-renderer',
            'Magento_Checkout/js/view/minicart': 'Magento_Checkout/js/view/minicart',
            'Magento_Checkout/js/view/shipping': 'Magento_Checkout/js/view/shipping',
            'dropdownSwatch': 'Magento_Theme/js/dropdown-swatch'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Magento_Checkout/js/mixin/shipping-mixin': true
            },
            'Magento_ConfigurableProduct/js/configurable': {
                'Magento_Theme/js/configurable-override': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'Magento_Theme/js/swatch-renderer-mixin': true
            },
            'mage/accordion': {
                'Magento_Theme/js/accordion-mixin': true
            },
            'mage/tooltip': {
                'Magento_Theme/js/tooltip-mixin': true
            }
        }
    }
};
