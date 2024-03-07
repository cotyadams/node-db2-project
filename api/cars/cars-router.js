// DO YOUR MAGIC
const router = require('express').Router();
const { getAll, getById, create } = require('./cars-model')
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid,  } = require('./cars-middleware')
router.get('/', (req, res) => {
    getAll()
        .then((cars) => {
        res.status(200).json(cars)
        }).catch((err) => {
            res.status(500).json({
                message: `Error getting all cars: ${err}`
            })
    })
})

router.get('/:id', checkCarId, (req, res) => {
    getById(req.params.id)
        .then((car) => {
        res.status(200).json(car)
        }).catch(err => {
            res.status(500).json({ message: `Error getting car by id: ${err}` })
        })
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res) => {
    console.table(req.body)
    create(req.body)
        .then((newCar) => {
            res.status(201).json(newCar)
        }).catch((err) => {
            res.status(500).json({ message: `Error creating car: ${err}` })
        });
})

module.exports = router;