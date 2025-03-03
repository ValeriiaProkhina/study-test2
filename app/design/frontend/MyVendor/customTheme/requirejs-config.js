const config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/cart-items': {
                'Magento_Checkout/js/view/summary/cart-items-mixin': true
            }
        }
    },
    map: {
        '*': {
            'Magento_Checkout/template/sidebar': 'Magento_Checkout/template/sidebar'
        }
    }
}
