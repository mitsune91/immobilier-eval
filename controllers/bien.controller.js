// Import Model
const Bien = require('../models').Bien;
const Annonce = require('../models').Annonce;
const Client = require('../models').Client;


//Sequelize
const sequelize = require('sequelize');

/**
 * 
 * List all biens
 */
exports.list_bien = (req, res, next) =>{
  Bien.findAll({
    attributes:[ 'name', 'adresse',
      [sequelize.col('Annonce.description'), 'description'],
      [sequelize.fn('CONCAT', sequelize.literal('Client.firstName'), ' ', sequelize.literal('Client.lastNAme')), 'Client_Name'],
    ],
    include: [
      {
        model: Annonce,
        attributes: []
      },
      {
        model: Client,
        attributes: []
      }
    ],
  })
  .then( biens => res.status(200).json(biens))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail bien
 */
exports.detail_bien = (req, res, next) =>{
  const id = req.params.id;
  Bien.findByPk(id)
  .then( bien => res.status(200).json(bien))
  .catch( err => console.log(err))
}

/**
 * Add a bien
 */
exports.add_bien = (req, res, next) =>{
  const bien = req.body;
  Bien.create(bien)
  .then( bienCreated => res.status(201).json(bienCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a bien
 */
exports.edit_bien = (req, res, next) =>{
  const id = req.params.id;
  const bien = req.body;
  Bien.update(bien, {
    where:{
      id: id
    }
  })
  .then( bienEdited => res.status(201).json(bienEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a bien
 */
exports.delete_bien = (req, res, next) =>{
  const id = req.params.id;
  Bien.destroy({
    where:{
      id: id
    }
  })
  .then( bienDeleted => res.status(200).json({message:`Bien Deleted ${bienDeleted}`}))
  .catch( err => console.log(err))
}