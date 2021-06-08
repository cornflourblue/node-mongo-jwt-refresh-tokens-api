const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');
const validateRequest = require('../validator/index');
const blogService = require('../service/blog.service')

module.exports = {
    createBlog,
}



function createBlog(req, res, next) {
    const { enTitle, enDescription,enBody } = req.body;
    blogService.createBlogService({ enTitle, enDescription,enBody })
        .then(({ blog }) => {
            res.json(blog);
        })
        .catch(next);
}


