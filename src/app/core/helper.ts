import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function getError(errors: {field: string, message: string}[]): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }



        return !passwordValid ? {passwordStrength:true}: null;
    }
}