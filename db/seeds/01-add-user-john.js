const JOHN_ID = '7c1968ff-d815-4d8d-b121-b963f4d9fb25'

exports.seed = function (knex) {
  return addJohn(knex)
    .then(() => addJohnShoes(knex))
}

function addJohn(knex) {
  return knex('users')
    .insert({
      id: JOHN_ID,
      name: 'John',
    })

}

function addJohnShoes(knex) {
  return knex('users')
    .insert({
        model: 'Vintage',
        brand: 'Bans',
        user_id: JOHN_ID,
      },
      {
        model: 'Crocodile',
        brand: 'Bacoste',
        user_id: john.id,
      },
      {
        model: 'Sneakers',
        brand: 'Abidas',
        user_id: john.id,
      })
}
