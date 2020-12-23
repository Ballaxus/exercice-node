const express = require('express');
const router = express.Router();
const bien_controller = require('../controllers/bien.controller');

router.get('/',bien_controller.list_bien);
router.get('/:id',bien_controller.detail_bien);
router.post('/',bien_controller.add_bien);
router.put('/:id',bien_controller.edit_bien);
router.delete('/:id',bien_controller.delete_bien);

module.exports = router;