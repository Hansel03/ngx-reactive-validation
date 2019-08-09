import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class ReactiveValidation {


    /**
     * Validacion de formulario antes de enviar
     * @param {FormGroup} formGroup
     * @memberof ValidateForm.validateAllFormFields
     */
    public validateAllFormFields(formGroup: FormGroup | FormArray) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
            if (control instanceof FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }


    /**
     * Valida un campo en especifico
     *
     * @param {FormControl} control
     * @memberof ValidateForm.validateOneFormField
     */
    public validateOneFormField(control: FormControl) {
        if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
        }
    }

}


