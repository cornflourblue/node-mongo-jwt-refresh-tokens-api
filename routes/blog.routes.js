const express = require('express');
const router = express.Router();
const authorize = require('_middleware/authorize')
const Role = require('_helpers/role');
const schema = require('../validator/blog.schema')
const controller = require('../controller/blog.controller')


// routes
router.post('/create',authorize([Role.Admin]), schema.createBlogSchema, controller.createBlog);


module.exports = router;