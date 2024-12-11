define(['jquery', 'validation','jquery-ui-modules/widget'], ($) => {
    $.widget('mage.myCustomWidget', {
        _create: function (){
            this._on(this.element, {
                'input .input-text': (evt) => {
                  const $input = $(evt.target)
                  if(!$input.valid()) {
                      $input.css('border-color', 'red')
                      return this;
                  }else {
                      $input.css('border-color', 'green')
                  }
                }
            })
        }
    });
    return $.mage.myCustomWidget;
})
