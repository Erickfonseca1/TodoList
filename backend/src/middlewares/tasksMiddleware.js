const validateBody = (request, response, next) => {
	const { body } = request;

	if (body.title === undefined) {
		return response.status(400).json({ message: 'O campo "title" é obrigatório' });
	}

	if (body.title === '' ) {
		return response.status(400).json({ message: 'O campo "title" não pode ser vazio' });
	}

	if (typeof body.title !== 'string') {
		return response.status(400).json({ message: 'O campo "title" deve ser uma string' });
	}

	if (body.status === undefined) {
		return response.status(400).json({ message: 'O campo "status" é obrigatório' });
	}

	if (body.status === '' ) {
		return response.status(400).json({ message: 'O campo "status" não pode ser vazio' });
	}

	next();
};

module.exports = {
	validateBody
};
