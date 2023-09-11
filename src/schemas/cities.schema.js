import joi from 'joi'

export const citieSchema = joi.object({
    name: joi.string().min(2).max(50).required().messages({
        'string.base': `"Cidade" é um campo do tipo texto.`,
        'string.min': `"Cidade" deve ter no mínimo 2 caracteres.`,
        'string.max': `"Cidade" deve ter no máximo 50 caracteres.`,
        'any.required': `O campo "Cidade" é obrigatório.`,
    })
})