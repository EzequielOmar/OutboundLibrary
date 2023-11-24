const Errors = {
	MissingField: {
		code: 'MissingField', status: 400, message: 'Client data is missing required data fields.'
	},
	MissingFile: {
		code: 'MissingFile', status: 400, message: 'Client provided invalid or missing data file.'
	},
	ENOTFOUND: {
		code: 'ENOTFOUND', status: 404, message: 'The requested URL or resource was not found.'
	},  
	InternalServerError: {
		code: 'InternalServerError', status: 500, message: 'The server encountered an internal error while processing the request.',
	},
	RequestTimedOut: {
		code: 'RequestTimedOut', status: 503, message: 'The request exceeded the specified timeout and timed out.'
	}
};

module.exports =  Errors;