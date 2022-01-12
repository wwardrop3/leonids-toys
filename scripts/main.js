// const firsName = "Emily"
// const lastName = "Lemmon"

// const skateboard = {
//     id: 1,
//     type: "Wheels",
//     age: "12+",
//     price: 60,
// }

// const yoyo = {
//     id: 2,
//     type: "Hand Held",
//     age: "6+",
//     price: 3,
// }

// const basketball = {
//     id: 3,
//     type: "Ball",
//     age: "3+",
//     price: 8,
// }


const toys = [
    {
        id: 1,
        name: "Skateboard",
        type: "Wheels",
        age: "12+",
        price: 8,
        weight: 4,
    
    },
    {
        id:2,
        name: "YoYo",
        type: "Stringy",
        age: "6+",
        price: 3,
        weight: .5
    },
    {
        id:3,
        name: "Basketball",
        type: "Ball",
        age: "3+",
        price: 8,
        weight: 2
    }
]


// console.log(toys)


// for (const toy of toys) {
//     console.log(`The toy price is ${toy.price} dollars`)
// }

const playdough = {
    id: toys[toys.length-1].id + 1,
    name: "Playdough",
    type: "dough",
    age: "3+",
    price: 23,
    weight: .7,
    
}

toys.push(playdough)

const sillyPutty = {
    id: toys[toys.length-1].id + 1,
    name: "Silly Putty",
    type: "dough",
    age: "5+",
    price: 34,
    weight: .6,
}
toys.push(sillyPutty)

// for (const toy of toys) {
//     console.log(`The ${toy.name} is $${toy.price}`)
// }


for (const toy of toys) {
    const oldWeight = toy.weight
    toy.weight = toy.weight +0.2
    console.log(`The weight of the ${toy.name} has been changed from ${oldWeight} to ${toy.weight}. `)
    toy.price = toy.price *1.05
    console.log(`Prices of the ${toy.name} has also been increased 5% to ${toy.price}`)
}


const toyToFind = 3

function findToy(toyId) {
    for (const toy of toys) {
        if (toy.id === toyId) {
            console.log(toy)
        } else 
        {
            continue
        }
    }    
        
}

findToy(toyToFind)