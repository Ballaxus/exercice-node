// Import Model
const Caracteristique = require('../models').Caracteristique;
const Bien = require('../models').Bien;
const Biencaract = require('../models').Biencaract;


/**
 * 
 * List all caracteristiques
 */
exports.list_caracteristique = (req, res, next) =>{
  Caracteristique.findAll({
    attributes: ['id','name'],
    include:[{
      model: Bien,
      attributes: ['id', 'name'],
      through: {
        model: Biencaract,
        attributes: []
      }
    }]
   })
  .then( caracteristiques => res.status(200).json(caracteristiques))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail caracteristique
 */
exports.detail_caracteristique = (req, res, next) =>{
  const id = req.params.id;
  Caracteristique.findByPk(id)
  .then( caracteristique => res.status(200).json(caracteristique))
  .catch( err => console.log(err))
}

/**
 * Add a caracteristique
 */
exports.add_caracteristique = (req, res, next) =>{
  const caracteristique = req.body;
  Caracteristique.create(caracteristique)
  .then( caracteristiqueCreated => res.status(201).json(caracteristiqueCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a caracteristique
 */
exports.edit_caracteristique = (req, res, next) =>{
  const id = req.params.id;
  const caracteristique = req.body;
  Caracteristique.update(caracteristique, {
    where:{
      id: id
    }
  })
  .then( caracteristiqueEdited => res.status(201).json(caracteristiqueEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a caracteristique
 */
exports.delete_caracteristique = (req, res, next) =>{
  const id = req.params.id;
  Caracteristique.destroy({
    where:{
      id: id
    }
  })
  .then( caracteristiqueDeleted => res.status(200).json({message:`Caracteristique Deleted ${caracteristiqueDeleted}`}))
  .catch( err => console.log(err))
}