import Joi from "joi"

//Validation Schema Object
const valiSchema = {
    register: Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).required(),
    }),
    login:Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(8).required(),
    }),
};

export default valiSchema;