"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function ValidateWithCondition(condition, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "ValidateWithCondition",
            target: object.constructor,
            propertyName,
            constraints: [condition],
            options: Object.assign({ message: 'Failed passing the ValidateWithCondition Test' }, validationOptions),
            validator: {
                validate(value, args) {
                    const [conditionalFn] = args.constraints;
                    return conditionalFn(args.object, value);
                },
            },
        });
    };
}
exports.ValidateWithCondition = ValidateWithCondition;
