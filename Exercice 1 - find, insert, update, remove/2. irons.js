
// 1 Donnez tous les métaux de marque Philips ou Tefal qui coûtent 30 euros ou moins, qui sont rouges, ont une puissance de 2000 ou
// plus et disposent d'un espace de rangement pour le cordon et d'une fonction spray.
db.irons.find({
    $and: [
        { brand: { $in: ["Philips", "Tefal"] } },
        { price: { $lte: 30 } },
        { "description.color": /.*red.*/i },
        { "technically.power": { $gte: 2000 } },
        { extras: { $in: ["cord storage space", "spray function"] } }
    ]
})

// Donnez le modèle, le prix et la marque du métal le plus cher qui n'est pas rouge, pesant moins de 2 kilos, qui
// a au moins 2 points positifs et une hauteur maximale de 20 centimètres.
db.irons.find(
    {
        $and: [
            { "description.color": { $not: /.*red.*/i } },
            { "technically.weight": { $lt: 2 } },
            { $where: "this.reviews.plus.length>2" },
            { "measures.height": { $lte: 20 } },
            { extras: { $ne: "chord storage space" } }
        ]
    },
    { model: true, price: true, brand: true }
).sort({ price: -1 }).limit(1)


// 3 Faites une boucle à travers les métaux. Augmentez le prix de tous les métaux de 10 %.
var irons = db.irons.find()
irons.forEach(iron => {
    var newPrice = iron.price * 1.1;
    db.irons.updateOne({ _id: iron._id }, { $set: { price: newPrice } })
})

// 4 Pendant les soldes, chaque marque accorde une remise spécifique.
// Les remises sont données sous forme d'objet littéral
// var discounts = {'Calor': 1, 'Tefal': 5, 'Philips': 3}
// Mettez à jour tous les prix des métaux.
// Remarque : pour parcourir le littéral objet des remises, vous pouvez utiliser le code suivant
// `for (var key in discounts) { … }`
var discounts = { 'Calor': 1, 'Tefal': 5, 'Philips': 3 }
for (var brandName in discounts) {
    var priceIncrease = discounts[brandName] * -1;
    db.irons.updateMany({ brand: brandName }, { $inc: { price: priceIncrease } })
}

