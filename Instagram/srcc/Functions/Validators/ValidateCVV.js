// regex for cvv

import strings from '../i18n/strings';
const cvvRegex = /^[0-9]{3}$/;
const validateCVV = cvv => {
    if (!cvv) {
      return {
        status: false,
        msg: strings.thisFieldIsMandatory,
      };
    } else {
      return cvvRegex.test(cvv)
        ? {status: true, msg: ''}
        : {
            status: false,
            msg: strings.validCvv,
          };
    }
  };