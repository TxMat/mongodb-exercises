// 1 Donnez liste des ordinateurs portables avec un prix compris entre 500 et 1000 euros ou avec un disque dur de 750 Go.


// 2 Changez Windows 10 vers Windows 8
//db.laptops.updateMany({"properties.OS": "Windows 10"}, {$set: {"properties.OS": "Windows 8"}})

// 3 Donnez le nom, le prix et le système d'exploitation des 2 ordinateurs portables les moins chers.


// 4 Donnez tous les ordinateurs portables avec au moins 1 avis avec une note comprise entre 4 et 4,2
// - Acer Aspire F5-573G-57GD

// db.laptops.find({"reviews.score": {$gt: 3.9, $lt:4.3}})

// Donnez à tous les ordinateurs portables dotés de 2 ports USB 3_0 et prenant en charge au moins 2 langues, dont le "Dutch"



// db.laptops.find({"properties.USB.USB3_0": 2, "LanguageOS": {$size: {$gt: 1}}, "LanguageOS": "Dutch"})



