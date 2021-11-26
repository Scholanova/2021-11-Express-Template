const MARC_ID = '70e9361f-8d39-49fd-9e5b-2abc4d90bbd7'

exports.seed = function (knex) {
  return addMarc(knex)
    .then(() => addMarcShoes(knex))
}

function addMarc(knex) {
  return knex('users')
    .insert({
      id: MARC_ID,
      name: 'Marc',
    })

}

function addMarcShoes(knex) {
  return knex('users')
    .insert(
      {
        model: 'Blanchasse',
        brand: 'Bacoste',
        user_id: MARC_ID,
      },
      {
        model: 'Cherros',
        brand: 'Bucci',
        user_id: MARC_ID,
      },
      {
        model: 'Crocodile',
        brand: 'Bacoste',
        user_id: MARC_ID,
      })
}
