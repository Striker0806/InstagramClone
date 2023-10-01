


import strings from '../i18n/strings';
// regex for atm card number
const atmCardNumberRegex = /^[0-9]{16}$/;
  // ATM card number validation
const validateCardNumber = atmCardNumber => {
    if (!atmCardNumber) {
      return {
        status: false,
        msg: strings.thisFieldIsMandatory,
      };
    } else {
      return atmCardNumberRegex.test(atmCardNumber)
        ? {status: true, msg: ''}
        : {
            status: false,
            msg: strings.validCardNumber,
          };
    }
  };