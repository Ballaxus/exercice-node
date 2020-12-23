const express = require('express');
const router = express.Router();
const atouts_controller = require('../controllers/atouts.controller');

router.get('/',atouts_controller.list_atouts);
router.get('/:id',atouts_controller.detail_atouts);
router.post('/',atouts_controller.add_atouts);
router.put('/:id',atouts_controller.edit_atouts);
router.delete('/:id',atouts_controller.delete_atouts);

module.exports = router;