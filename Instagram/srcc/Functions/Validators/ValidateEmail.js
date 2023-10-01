

import strings from '../i18n/strings';
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = email => {
    if (!email) {
      return {
        status: false,
        msg: strings.thisFieldIsMandatory,
      };
    } else {
      return emailRegex.test(email)
        ? {status: true, msg: ''}
        : {
            status: false,
            msg: strings.validEmail,
          };
    }
  };
  