var masks = {
    1: '000-0000 #',
    8: '(000) 000-0000 #',
    11: '+0-000-000-0000'
  },
  inputToMasking = $("#checkout_shipping_address_attributes_phone");

inputToMasking
  .mask(masks['1'], {
    validator: /^(\+|\-|[0-9])[0-9]*/
  })
  .on('input', function () {
    // console.log('proc');
    var currentKey = inputToMasking.cleanVal().length.toString(),
        shouldChangeMask = Object.keys(masks).includes(currentKey);

    // console.log('value', inputToMasking.cleanVal());
    // console.log('shouldChangeMask', shouldChangeMask);

    if (shouldChangeMask)
      $(inputToMasking).mask(masks[currentKey]);
    // move pointer to end
    inputToMasking.focus().val(inputToMasking.val());
  });
