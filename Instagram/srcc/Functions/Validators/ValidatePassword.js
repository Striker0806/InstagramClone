import strings from '../i18n/strings';
const passwordRegex = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).{1,}$/;
//Password validation
const validatePassword = (pass, isConfrimPass, password) => {
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
        if (isConfrimPass && password != pass) {
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