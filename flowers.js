
// Manually add two objects to the array below.

const flowers = [
    {
        id: 1,
        color: "White",
        species: "Rose",
        price: 0.90
    },
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.10
    }

]

const addFlower = (flowerObject) => {
    /*
        Write the correct code below to add the value of
        `flowerObject` to the `flowers` array.
    */
    flowers.push(flowerObject)

}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const niceFlowers of flowers){
        if (niceFlowers.price >= 1){
            expensiveFlowers.push(niceFlowers)
        }
    }
    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */




    return expensiveFlowers  // Do not change this code
}




// **********  Do not touch this code  **********
const getFlowers = () => flowers
module.exports = {
    findExpensiveFlowers, addFlower, getFlowers
}
// **********  Do not touch this code  **********

