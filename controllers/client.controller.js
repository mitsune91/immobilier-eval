// Import Model
const Client = require('../models').Client;

/**
 * 
 * List all clients
 */
exports.list_client = (req, res, next) =>{
  Client.findAll({})
  .then( clients => res.status(200).json(clients))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail client
 */
exports.detail_client = (req, res, next) =>{
  const id = req.params.id;
  Client.findByPk(id)
  .then( client => res.status(200).json(client))
  .catch( err => console.log(err))
}

/**
 * Add a client
 */
exports.add_client = (req, res, next) =>{
  const client = req.body;
  Client.create(client)
  .then( clientCreated => res.status(201).json(clientCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a client
 */
exports.edit_client = (req, res, next) =>{
  const id = req.params.id;
  const client = req.body;
  Client.update(client, {
    where:{
      id: id
    }
  })
  .then( clientEdited => res.status(201).json(clientEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a client
 */
exports.delete_client = (req, res, next) =>{
  const id = req.params.id;
  Client.destroy({
    where:{
      id: id
    }
  })
  .then( clientDeleted => res.status(200).json({message:`client Deleted ${clientDeleted}`}))
  .catch( err => console.log(err))
}