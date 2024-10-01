db = db.getSiblingDB('aracadizoo_db');
db.createCollection('myCollectionTest')
db.clicks.insertMany([
  { animal_id: 1, clicks: 0 },
  { animal_id: 2, clicks: 0 },
  { animal_id: 3, clicks: 0 }
]);
