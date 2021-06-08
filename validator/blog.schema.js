const Joi = require('@hapi/joi');
const validateRequest = require('./index')

module.exports = {
    createBlogSchema,
}

function createBlogSchema(req, res, next) {
    const schema = Joi.object({
        enTitle: Joi.string().required(),
        enDescription: Joi.string().required(),
        enBody: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

