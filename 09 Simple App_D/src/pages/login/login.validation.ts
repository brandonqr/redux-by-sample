import { Promise } from 'es6-promise';
import { FieldValidationResult, BaseFormValidation } from 'lc-form-validation';
import {requiredValidationHandler} from '../../common/validations/validators';

class LoginFormValidation extends BaseFormValidation {

  public constructor() {
    super();

    this._validationEngine.initialize([
        {formFieldName: 'fullname', vmFieldName: 'fullname'},
        {formFieldName: 'email', vmFieldName: 'email'}
    ]);

    this._validationEngine.addFieldValidation('fullname',
                                                requiredValidationHandler
                                             )

   this._validationEngine.addFieldValidation('email',
                                               requiredValidationHandler
                                            );
  }
}

export const loginFormValidation = new LoginFormValidation();
