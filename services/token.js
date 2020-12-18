var jwt = require('jsonwebtoken');
const db = require('../models');

const  checkToken = async(token) => {
    let localID = null;
    try{
        const { id } = await token.decode(token);
        localID = id;
    }catch(error){
        return false;
    }
    const usuario = await db.Usuario.findOne({where:{
        id: localID,
        estado: 1
    }})
    if(usuario){
        const token = encode(usuario.id, usuario.rol);
        return{
            token, 
            rol: usuario.rol
        }
    }
    else{
        return false;
    }
}

module.exports = {

    encode: async(id, rol) => {
        const token = jwt.sign({
            id: id,
            rol: rol,
        }, "config.secret", {
            expiresIn: 86400,
        });
        
        return token;
    },

    decode: async(token) => {
        try {
            const { id } = await jwt.verify(token, "config.secret");
            const usuario = await db.Usuario.findOne({where:{
                id: id
            }})
            if(usuario){
                return usuario;
            }
            else{
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }

    }
}