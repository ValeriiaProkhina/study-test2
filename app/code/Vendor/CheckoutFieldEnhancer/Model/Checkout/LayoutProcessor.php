<?php
namespace Vendor\CheckoutFieldEnhancer\Model\Checkout;

class LayoutProcessor
{
    public function afterProcess(
        \Magento\Checkout\Model\Checkout\LayoutProcessor $subject,
        array $jsLayout
    ) {
        $streetField = &$jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children']['street'];

        if (isset($streetField['children']) && is_array($streetField['children'])) {
            foreach ($streetField['children'] as &$child) {
                $child['validation'] = [
                    'required-entry' => true,
                    'validate-alphanum-with-spaces' => true,
                    'min_text_length' => 5,
                    'max_text_length' => 255
                ];
            }
        }

        return $jsLayout;
    }
}
