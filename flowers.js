
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

//this variable is a function containing an empty array
const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

//this for.. of loop iterates through the flowers objects and finds 
// flowers >= $1 and adds that flower to the expensiveFlowers array
    for (const flower of flowers){
        if (flower.price >= 1){
            expensiveFlowers.push(flower)
        }
    }
    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */



// this returns the array of expensiveFlowers
    return expensiveFlowers  // Do not change this code
}




// **********  Do not touch this code  **********
const getFlowers = () => flowers
module.exports = {
    findExpensiveFlowers, addFlower, getFlowers
}
// **********  Do not touch this code  **********

