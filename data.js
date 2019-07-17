var faker = require('faker')
var products = []
var categories = ['Jacket', 'Helmet', 'Protection']
var orders = []
faker.seed(100)

for (let i = 0; i < 504; i++){
    let category = faker.helpers.randomize(categories)
    products.push({
        id : i,
        name : faker.commerce.productName(),
        category,
        description: faker.lorem.sentence(3),
        price: Number(faker.commerce.price())
    })
}


for (let i=0; i<=103; i++) {
    var fname = faker.name.firstName()
    var sname = faker.name.lastName()
    var order = {
        id : i, 
        name : `${fname} ${sname}`,
        address : faker.address.streetAddress(),
        email : faker.internet.email(fname, sname),
        city : faker.address.city(),
        zip : faker.address.zipCode(),
        country : faker.address.country(),
        shipped : faker.random.boolean(),
        products : []
    }

    var num_products = faker.random.number({min:1, max:5})
    var product_ids = []
    while (product_ids.length < num_products) {
        var candidateId = faker.random.number({min:1, max:products.length})
        if (product_ids.indexOf(candidateId) === -1){
            product_ids.push(candidateId)
        }
    }

    for (let j = 0; j < num_products; j++) {
        order.products.push({
            quantity : faker.random.number({min:1, max:10}),
            product_id : product_ids[j]
        })
    }
}

orders.push(order)

module.exports = function() {
    return {
        categories : categories,
        products : products,
        orders : orders
    }
}
