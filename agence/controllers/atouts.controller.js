// Import Model
const Atouts = require('../models').Atouts;
const Bien = require('../models').Bien;
const Bienatout = require('../models').Bienatout;


/**
 * 
 * List all atoutss
 */
exports.list_atouts = (req, res, next) =>{
  Atouts.findAll({
    attributes: ['id','name'],
    include:[{
      model: Bien,
      attributes: ['id', 'name'],
      through: {
        model: Bienatout,
        attributes: []
      }
    }]
   })
  .then( atoutss => res.status(200).json(atoutss))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail atouts
 */
exports.detail_atouts = (req, res, next) =>{
  const id = req.params.id;
  Atouts.findByPk(id)
  .then( atouts => res.status(200).json(atouts))
  .catch( err => console.log(err))
}

/**
 * Add a atouts
 */
exports.add_atouts = (req, res, next) =>{
  const atouts = req.body;
  Atouts.create(atouts)
  .then( atoutsCreated => res.status(201).json(atoutsCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a atouts
 */
exports.edit_atouts = (req, res, next) =>{
  const id = req.params.id;
  const atouts = req.body;
  Atouts.update(atouts, {
    where:{
      id: id
    }
  })
  .then( atoutsEdited => res.status(201).json(atoutsEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a atouts
 */
exports.delete_atouts = (req, res, next) =>{
  const id = req.params.id;
  Atouts.destroy({
    where:{
      id: id
    }
  })
  .then( atoutsDeleted => res.status(200).json({message:`Atouts Deleted ${atoutsDeleted}`}))
  .catch( err => console.log(err))
}