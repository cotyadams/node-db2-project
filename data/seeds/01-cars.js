// STRETCH
// vin, make, model, and mileage
// optional: title, transmission
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<vo 
 **/
exports.seed = async function (knex) {
    await knex('cars').truncate();
    await knex('cars').insert([
        {
            vin: '12345678901234567',
            make: 'Ford',
            model: 'Mustang',
            mileage: 20000
        },
        {
            vin: '12345678901234568',
            make: 'Ford',
            model: 'Focus',
            mileage: 10000
        },
        {
            vin: '12345678901234569',
            make: 'Ford',
            model: 'Fusion',
            mileage: 30000
        }
    ])
}
