const express = require('express');
const router = express.Router();

const agent_controller = require('../controllers/agent.controller');


router.post('/register', agent_controller.register_agent);
router.post('/login', agent_controller.login_agent);

module.exports = router;