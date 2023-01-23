exports.seed = async function (knex) {
  await knex('players').del()
  await knex('players').insert([
    { id: 1, name: 'Dan Lovelace', bracket: 'A' },
    { id: 2, name: 'Tommy Fingers', bracket: 'A' },
    { id: 3, name: 'Giulio', bracket: 'A' },
    { id: 4, name: 'Patrick', bracket: 'A' },
    { id: 5, name: 'Matt Radcliffe', bracket: 'A' },
    { id: 6, name: 'Dom', bracket: 'B' },
    { id: 7, name: 'Matt Shore', bracket: 'B' },
    { id: 8, name: 'Tom Booth', bracket: 'B' },
    { id: 9, name: 'Max Booth', bracket: 'B' },
    { id: 10, name: 'Rob', bracket: 'B' },
    { id: 11, name: 'Will King', bracket: 'C' },
    { id: 12, name: 'Adult Adam', bracket: 'C' },
    { id: 13, name: 'Cameron', bracket: 'C' },
    { id: 14, name: 'Brunsy', bracket: 'C' },
    { id: 15, name: 'Vivienne Frances Longitude', bracket: 'C' },
  ])
}
