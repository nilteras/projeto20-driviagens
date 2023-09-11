function joi(message) {
    return {
        type: "joiError",
        message
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} não foi encontrado!`
    }
}

function errorConflitct (resource){
    return {
        type: "conflict",
        message: `${resource} existente`
    }
}

function unprocessableEntity(resource) {
	return {
	  type: "UnprocessableEntity",
	  message: `${resource ? resource : "It"}`
	}
}

export const errors = { joi, notFound, errorConflitct, unprocessableEntity }