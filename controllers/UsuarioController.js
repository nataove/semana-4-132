const bcrypt = require('bcryptjs');

const db = require('../models');

const tokenService = require('../services/token.js')

exports.login = async (req, res, next) => {
    try {
        const user = await db.Usuario.findOne({ where: { email: req.body.email } });
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = await tokenService.encode(user.id, user.rol);
                res.status(200).send({
                    auth: true,
                    tokenReturn: token
                });
                
            }
            else {
                res.status(401).send({
                    auth: false,
                    accessToken: null,
                    reason: "Invalid Password!"
                });

            }
        }
        else {
            res.status(404).send('User Not Found.');
        }
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}

exports.list = async (req, res, next) => {
    try {
        const lista = await db.Usuario.findAll();
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
        const usuario = await db.Usuario.create(req.body);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error);
    }
    console.log(req.body)
}

exports.update = async (req, res, next) => {
    try {
        const u = await db.Usuario.update({ nombre: req.body.nombre, email: req.body.email, rol: req.body.rol },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(u);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}

exports.activate = async (req, res, next) => {
    try {
        const usuario = await db.Usuario.update({ estado: 1 },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}

exports.deactivate = async (req, res, next) => {
    try {
        const usuario = await db.Usuario.update({ estado: 0 },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
        next(error)
    }
}