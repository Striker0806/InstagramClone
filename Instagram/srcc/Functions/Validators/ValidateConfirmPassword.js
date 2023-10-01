// confirm password validation


import strings from '../i18n/strings';
const validateConfirmPassword = (pass, password) => {
    if (!pass) {
      return {
        status: false,
        msg: strings.plsEnterPassword,
      };
    } else if (pass.length < 8) {
      return {
        status: false,
        msg: strings.validatePassword,
      };
    } else {
      if (passwordRegex.test(pass)) {
        if (password != pass) {
          return {
            status: false,
            msg: strings.confirmPassValidString,
          };
        }
        return {status: true, msg: ''};
      } else {
        return {
          status: false,
          msg: strings.validatePassword,
        };
      }
    }
  };