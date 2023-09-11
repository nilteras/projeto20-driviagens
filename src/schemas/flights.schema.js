import joiBase from 'joi'
import joiDate from '@joi/date'

const joi = joiBase.extend(joiDate)

export const flightSchema = joi.object({
    date: joi.date().format("DD-MM-YYYY").required().messages({
        'data.base': `Data é um campo do tipo data.`,
        'date.format': `O formato da data de lançamento deve ser: DD-MM-YYYY`,
        'any.required': `O campo "Data" é obrigatório.`,
    })
})