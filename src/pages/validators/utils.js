export const composeValidators = (...validators) => (...args) =>
    validators.reduce((error, validator) => error || validator(...args), undefined);
