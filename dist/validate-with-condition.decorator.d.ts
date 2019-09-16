import { ValidationOptions } from "class-validator";
export declare function ValidateWithCondition(condition: (object: any, value: any) => boolean, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
