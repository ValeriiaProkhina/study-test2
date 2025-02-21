<?php
namespace Vendor\CheckoutEnhancements\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;
use Magento\Store\Model\StoreManagerInterface;

class AddCustomAmountItem implements ObserverInterface
{
    public function execute (Observer $observer)
    {
        /** @var \Magento\Payment\Model\Cart $cart */
        $cart = $observer->getEvent()->getCart();
        $customAmount = 100;
        $cart->addCustomItem(__('Custom Amount'), 1, -1.00 * $customAmount, 'customfee');
    }
}
