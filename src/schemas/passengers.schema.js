import joi from 'joi'

export const passengerSchema = joi.object({
    firstName: joi.string().min(2).max(100).required().messages({
        'string.base': `"Nome" é um campo do tipo texto.`,
        'string.min': `"Nome" deve ter no mínimo 2 caracteres.`,
        'string.max': `"Nome" deve ter no máximo 100 caracteres.`,
        'any.required': `O campo "Nome" é obrigatório.`,
    }),
    lastName: joi.string().min(2).max(100).required().messages({
        'string.base': `"Sobrenome" é um campo do tipo texto.`,
        'string.min': `"Sobrenome" deve ter no mínimo 2 caracteres.`,
        'string.max': `"Sobrenome" deve ter no máximo 100 caracteres.`,
        'any.required': `O campo "Sobrenome" é obrigatório.`,
    })
})