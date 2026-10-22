const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["cow", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["bass", "tuna"],
        },
    },
];


//1. Create a function that returns all the names from the array.

function Names(data) {
    //move on all the object in the array, for each object the key name
    const array = data.map((object) => {
        return object["name"]
    })
    return array
}
const namesData= Names(data)
console.log(namesData)

//2 2. Create a function that returns all the objects that are born
// before 1990.
function older(data) {
    const array = data.filter((object) => {
        const birthDate = new Date(object['birthday']);
        return birthDate.getFullYear() < 1991;
    })
    return array
}
const olderData= older(data)
console.log(olderData)

// //3. Create a function that returns an object of all the
// different foods from all the objects as the key and the
// number of times that food is present in all the objects as
// the value.

function foods(data) {
    const array = data.map((object) => {
        const foodsObj = object["favoriteFoods"]
        return Object.values(foodsObj);
    })
    const array1 = []
    array.forEach(food => {
        food.forEach(i => {
            i.forEach(j => {
                array1.push(j)
            });
        });
    });
    const object = {}
    array1.forEach(food => {
        if (object[food]) {
            object[food] = object[food] + 1;
        } else {
            object[food] = 1; 
        }
    });
    return object
}

const foodsData = foods(data)
console.log(foodsData)