import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const validationSchema = {
    field: {
        iban: [
                {
                    validator: Validators.required,
                    message: 'Campo requerido',
                },
                {
                    validator: iban.validator,
                    message: 'Iban no válido'
                },
            ],
        name: [
                {
                    validator: Validators.required, 
                    message: 'Campo requerido'
                },
            ],
        amount:[
                {
                    validator: Validators.required,
                    message: 'Campo requerido',  
                },
                {
                    validator: positiveNumber.validator,
                    message: 'Introduzca una cantidad numérica positiva',
                },
            ],
        concept:[
                {
                    validator: Validators.required,
                    message: 'Campo requerido',  
                },
            ],
        day:
            [
                // {
                //     validator: Validators.required,
                //     message: 'Campo requerido',  
                // },
                {
                    validator: Validators.pattern,
                    customArgs: { pattern: /^([1-9]|[1-2]\d|3[01])$/ },
                    // message: 'Error',
                },            
            ],
        month:
            [
                // {
                //     validator: Validators.required,
                //     message: 'Campo requerido',  
                // }, 
                {
                    validator: Validators.pattern,
                    customArgs: { pattern: /^([1-9]|1[012])$/ },
                    // message: 'Error',
                },
            ],
        year:
            [
                // {
                //     validator: Validators.required,
                //     message: 'Campo requerido',  
                // },
                {
                    validator: Validators.pattern,
                    customArgs: { pattern: /^2[0-9][2-9](\d{1})$/ },
                    // message: 'Error',
                }
    
        ],
        date: [
            {
                validator: laterDate.validator,
                customArgs: { 
                    parseStringToDateFn: (value) => new Date(value),
                    date: new Date(),
                 },
                 message: 'Error',
            },
        ],
        email:[
                {
                    validator: Validators.email,
                    message: 'Email no válido',
                },
            ]
    }
};

export const formValidation = createFormValidation(validationSchema);