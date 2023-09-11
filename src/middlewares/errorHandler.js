import httpStatus from "http-status";

export function errorHandler(error, req, res, next) {
    console.log(error)

    if (error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message)
    }

    if (error.type === "joiError") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if (error.type === "UnprocessableEntity") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

    if (error.type === "internalServerError") {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }

    if (error.type === "badRequest") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message)
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Ocorreu um erro desconhecido")
}