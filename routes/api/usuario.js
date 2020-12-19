const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UsuarioController');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.post('/login',  usuarioController.login);

router.get('/list',  usuarioController.list);
router.post('/add', usuarioController.add);
router.put('/update', usuarioController.update);
router.put('/activate', usuarioController.activate);
router.put('/deactivate', usuarioController.deactivate);

module.exports = router;
