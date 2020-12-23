const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const client_controller = require('../controllers/client.controller');


router.get('/',auth(), client_controller.list_client);
router.post('/add',auth(), client_controller.add_client);
router.get('/:id',auth(), client_controller.detail_client);
router.put('/:id',auth(), client_controller.edit_client);
router.delete('/:id',auth(), client_controller.delete_client);

module.exports = router;