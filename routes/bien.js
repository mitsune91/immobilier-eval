const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const bien_controller = require('../controllers/bien.controller');


router.get('/',auth(), bien_controller.list_bien);
router.post('/add',auth(), bien_controller.add_bien);
router.get('/:id',auth(), bien_controller.detail_bien);
router.put('/:id',auth(), bien_controller.edit_bien);
router.delete('/:id',auth(), bien_controller.delete_bien);

module.exports = router;