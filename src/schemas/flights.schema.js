import joiBase from 'joi'
import joiDate from '@joi/date'

const joi = joiBase.extend(joiDate)

export const flightSchema = joi.object({
    origin: joi.number().integer().required().messages({
        'number.base': `Origin é um campo do tipo número`,
        'any.required': `O campo "Origin" é obrigatório.`
    }),
    destination: joi.number().integer().required().messages({
        'number.base': `Destination é um campo do tipo número`,
        'any.required': `O campo "Destination" é obrigatório.`
    }),
    date: joi.date().format("DD-MM-YYYY").required().messages({
        'data.base': `Data é um campo do tipo data.`,
        'date.format': `O formato da data de lançamento deve ser: DD-MM-YYYY`,
        'any.required': `O campo "Data" é obrigatório.`
    })
})