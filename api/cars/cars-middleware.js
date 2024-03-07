const { getAll, getById, create } = require('./cars-model')
const vinValidator = require('vin-validator');
const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const car = await getById(req.params.id)
  if (!car[0]) {
    res.status(404).json({ message: `car with id ${req.params.id} is not found` })
  }
  else {
    next();
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin) {
    res.status(400).json({ message: `vin is missing` })
  } else if (!req.body.make) {
    res.status(400).json({ message: `make is missing` })
  } else if (!req.body.model) {
    res.status(400).json({ message: `model is missing` })
  } else if (!req.body.mileage) {
    res.status(400).json({ message: `mileage is missing` })
  }
  else {
    next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if (!vinValidator.validate(req.body.vin)) {
    res.status(400).json({
      message: `vin ${req.body.vin} is invalid`
    })
  } else {
    next();
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  let carList = await getAll();
  const car = carList.find(car => car.vin === req.body.vin);
  if (car) {
    res.status(400).json({ message: `vin ${req.body.vin} already exists` })
  } else {
    next();
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
