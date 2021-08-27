const validatorType = 'CUSTOM_VALIDATOR';

export const dayValidator = dayInput => {
    const value = parseInt(dayInput.value);
    const validationResult = {
        succeeded: true,
        type: validatorType,
        message: 'Introduzca un número entre el 1 y el 31',
    };

    if (value >= 1 || value <= 31) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    console.log(value);
    return validationResult;
};


export const monthValidator = monthInput => {
    const { value } = parseInt(monthInput);
    const validationResult = {
        succeeded: true,
        type: validatorType,
        message: 'Introduzca un número de mes válido',
    };

    if (value >= 1 && value <= 12) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
};

export const yearValidator = yearInput => {
    const { value } = parseInt(yearInput);
    const currentYear = new Date().getFullYear;
    const validationResult = {
        succeeded: true,
        type: validatorType,
        message: 'Introduzca un año válido',
    };

}

