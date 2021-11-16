const { response, request } = require('express');

const usuariosGet = (req = request , res = response) => {
    const {q,nombre = 'no name',apikey, page = 1, limit} = req.query;
    res.json({
      msg: 'GET API - controlador',
      q,
      nombre,
      apikey,
      page,
      limit
    });
  }

 const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
      msg: 'POST API - controlador',
      nombre,
      edad

    });
  }

 const usuariosDelete = (req, res) => {
    res.json({
      msg: 'DELETE API - controlador',
    });
  }

 const usuariosPut = (req, res) => {
     const id = req.params.id
    res.status(500).json({
      msg: 'PUT API - controlador',
      id
    });
  }

 const usuariosPatch = (req, res) => {
    res.json({
      msg: 'PATCH API - controlador',
    });
  }


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut,
    usuariosPatch

}