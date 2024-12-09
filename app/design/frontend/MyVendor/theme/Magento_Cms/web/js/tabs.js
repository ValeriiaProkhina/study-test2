define(['jquery', 'mage/tabs'], function($) {
return function (config, element) {
    $(element).tabs({
        openedState: "active",
        animate: {
            duration: 100,
            active: 1,
            disabledState: "disabled"
        }
    })
}
})

