const db = require('../models')

exports.list = async (req, res, next) => {
    try {
        const lista = await db.Articulo.findAll();
        res.status(200).json(lista)
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}

exports.add = async (req, res, next) => {
    try {
        const articulo = await db.Articulo.create(req.body);
        res.status(200).json(articulo);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        const articulo = await db.Articulo.update({ codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, categoriaId: req.body.categoriaId },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(articulo);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}

exports.activate = async (req, res, next) => {
    try {
        const articulo = await db.Articulo.update({ estado: 1 },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(articulo);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}

exports.deactivate = async (req, res, next) => {
    try {
        const articulo = await db.Articulo.update({ estado: 0 },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(articulo);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}