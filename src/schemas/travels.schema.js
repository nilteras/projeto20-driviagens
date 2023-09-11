import joi from 'joi'

export const travelSchema = joi.object({
    passengerId: joi.number().integer().required().messages({
        'number.base': `Passageiro é um campo do tipo número`,
        'any.required': `O campo "Passageiro" é obrigatório.`
    }),
    flightId: joi.number().integer().required().messages({
        'number.base': `Voo é um campo do tipo número`,
        'any.required': `O campo "Voo" é obrigatório.`
    })
})