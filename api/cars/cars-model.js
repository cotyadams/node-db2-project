const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/dealer.db3'
  },
  useNullAsDefault: true,
});
const getAll = () => {
  // DO YOUR MAGIC
 return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('car_id', id)
}

const create = async (car) => {
  // DO YOUR MAGIC
  const carId = await db('cars').insert(car)
  return await getById(carId[0])
}

module.exports = {
  getAll,
  getById,
  create
}
