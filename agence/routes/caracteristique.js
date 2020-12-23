const express = require('express');
const router = express.Router();
const caracteristique_controller = require('../controllers/caracteristique.controller');

router.get('/',caracteristique_controller.list_caracteristique);
router.get('/:id',caracteristique_controller.detail_caracteristique);
router.post('/',caracteristique_controller.add_caracteristique);
router.put('/:id',caracteristique_controller.edit_caracteristique);
router.delete('/:id',caracteristique_controller.delete_caracteristique);

module.exports = router;