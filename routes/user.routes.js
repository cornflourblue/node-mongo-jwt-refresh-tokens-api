const express = require('express');
const router = express.Router();
const authorize = require('_middleware/authorize')
const Role = require('_helpers/role');
const schema = require('../validator/user.schema')
const controller = require('../controller/users.controller')


// routes
router.post('/authenticate', schema.authenticateSchema, controller.authenticate);
router.post('/refresh-token', controller.refreshToken);
router.post('/revoke-token', authorize(), schema.revokeTokenSchema, controller.revokeToken);
router.get('/', authorize(Role.Admin), controller.getAll);
router.get('/:id', authorize(), controller.getById);
router.get('/:id/refresh-tokens', authorize(), controller.getRefreshTokens);

module.exports = router;