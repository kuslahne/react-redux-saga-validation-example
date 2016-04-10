export const CHANGE_VALUE = 'CHANGE_VALUE';
export const VALIDATE = 'VALIDATE';
export const SET_INVALID = 'SET_INVALID';
export const SET_VALID = 'SET_VALID';

export const changeValue = (field, value) => ({
    type: CHANGE_VALUE,
    field,
    value
});

export const validate = (field, validation) => ({
    type: VALIDATE,
    field,
    validation
});

export const setInvalid = (field, error) => ({
    type: SET_INVALID,
    field,
    error
});

export const setValid = (field, error) => ({
    type: SET_VALID,
    field,
    error
});