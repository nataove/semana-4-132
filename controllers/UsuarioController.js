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

