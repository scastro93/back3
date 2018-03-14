const { User } = require('../../models');
const _ = require('lodash');

class UserController {

  async deleteUser(call, callback){
    const user = await User.delete(call.request.id);

    //validacion que el usuario existe
    if(!user){
      throw new Error("no existe ese usuario");
    }

    const userList = await User.findAll();
    console.log(userList)
  }

  async addUser(call, callback) {
    try {

      const existingMail = await _.find(User, { 'email': call.request.email });      
      
      //validacion correo existente
      if(existingMail){
        throw new Error("ya existe el correo");
      }

      //validacion password
      if(!call.request.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)){
        throw new Error("password invalido");
      }
      
      const user = await User.create(call.request);
      const payload = {
        id: user.dataValues.id,
        email: user.dataValues.email,
        password: user.dataValues.password
      };
      
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }

  async getUser(call, callback) {
    try {
      const user = await User.findById(call.request.id);

      //validacion usuario existente
      if(!user){
        throw new Error("El usuario no existe");
      }

      const payload = {
        id: user.dataValues.id,
        email: user.dataValues.email,
        password: user.dataValues.password
      };
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = new UserController();
