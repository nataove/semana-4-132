const routerx = require('express-promise-router');
const usuarioRouter = require('./api/usuario.js');
const categoriaRouter = require('./api/categoria.js');
const articuloRouter = require('./api/articulo.js');

const router = routerx();

router.use('/usuario', usuarioRouter);
router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);


module.exports = router;