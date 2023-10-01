
import strings from '../i18n/strings';
const nameRegex = /^([\w]{1,})+([\w\s]{0,})+$/i;
const validateName = name => {
    if (!name) {
      return {
        status: false,
        msg: strings.thisFieldIsMandatory,
      };
    } else {
      return nameRegex.test(name)
        ? {status: true, msg: ''}
        : {
            status: false,
            msg: strings.validName,
          };
    }
  };