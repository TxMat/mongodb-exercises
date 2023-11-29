// 1 Donnez liste des ordinateurs portables avec un prix compris entre 500 et 1000 euros ou avec un disque dur de 750 Go.
// - HP Pavilion 17-g101nd
// - Acer Aspire F5-573G-57GD'

// db.laptops.find({$or: [{"price": {$gt: 500, $lt: 1000}}, {"properties.HD": {$eq: "750GB"}}]})


// 2 Changez Windows 10 vers Windows 8
//db.laptops.updateMany({"properties.OS": "Windows 10"}, {$set: {"properties.OS": "Windows 8"}})

// 3 Donnez le nom, le prix et le système d'exploitation des 2 ordinateurs portables les moins chers.
// - Nom : HP Pavilion 17-g101nd , Prix : 534, SOS : windows 8 .
// - Nom : Acer Aspire F5-573G-57GD , Prix : 749, SE : windows 8 .

// 4 Donnez tous les ordinateurs portables avec au moins 1 avis avec une note comprise entre 4 et 4,2
// - Acer Aspire F5-573G-57GD

// db.laptops.find({"reviews.score": {$gt: 3.9, $lt:4.3}})

// 5 Donnez tous les ordinateurs portables dotés de 2 ports USB 3_0 et prenant en charge au moins 2 langues, dont le "Dutch"

// - Acer Aspire F5-573G-57GD

// db.laptops.find({"properties.USB.USB3_0": 2, "LanguageOS": {$size: {$gt: 1}}, "LanguageOS": "Dutch"})



