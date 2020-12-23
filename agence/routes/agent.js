const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const agent_controller = require('../controllers/agent.controller.js');

router.get('/', auth(),agent_controller.agent_list )
router.get('/:id',agent_Controller.detail_agent);
router.post('/',agent_Controller.add_agent);
router.put('/:id',agent_Controller.edit_agent);
router.delete('/:id',agent_Controller.delete_agent);

router.post('/register', agent_controller.agent_register)
router.post('/login',agent_controller.agent_login )

module.exports = router;