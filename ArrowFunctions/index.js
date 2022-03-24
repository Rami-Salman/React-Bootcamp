const items = [
    { name: 'Bike', price: '100'},
    { name: 'tv', price: '200'},
    { name: 'Album', price: '10'},
    { name: 'Book', price: '5'},
    { name: 'Phone', price: '100'},
    { name: 'Bike', price: '500'},
    { name: 'PC', price: '1000'},
    { name: 'Keyboard', price: '25'},
]

//Q1 Write  a function that FILTERS through items and returns only the items which prices are higher than 100

    var filterdItems = items.filter(function(item)   {
        return item.price <= 100;
    })

    console.log(filterdItems)

//Q2 Write a function that returns an array with the items name only in it 

var itemNames = items.map(function(item) {
    return item.name;
})

console.log(itemNames)

//Q3 Write a function that applies a 10$ sale on each item

var itemsSale = items.forEach(function(item) {
     return console.log(item.price-10);
})  

itemsSale
//Q4 Write a function if the items array has any itmes below 10  $

var belowTen = items.some(function(item) {
    return item.price <= 10
})
console.log(belowTen)
// Q5 Write a function that checks if EVERY itemm is higher than 1500

var higher1500 = items.every(function(item) {
    return item.price >= 1500
})
console.log(higher1500)