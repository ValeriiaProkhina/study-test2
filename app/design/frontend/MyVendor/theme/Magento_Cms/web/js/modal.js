define(["jquery", "Magento_Ui/js/modal/modal", "mage/calendar"], function ($, modal) {
    return function (config, element){
        const options = {
            type: 'popup',
            responsive: true,
            title: 'Calendar',
            buttons: [{
                text: $.mage.__('Close'),
                class: '',
                click: function () {
                    this.closeModal();
                }
            }]
        };

        const popup = modal(options, $('#modal'));
        $(element).click(function() {
            $('#modal').modal('openModal');
            $('#calendar').calendar({
                altFormat: "dd-mm-yy",
                changeYear: true,
                changeMonth: true,
                firstDay: 1,
            })
        });
}
})
