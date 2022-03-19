new Vue({
    el: '#app',
    data: {

        title: 'PPL Workout Generator',
        displayPushExercisesTable: false,
        nameOfFirstChestExercise: pushExercises.chest[0].exerciseName,
        randomChestExercise1,
        randomChestExercise2,
        randomChestExercise3,

        randomTricepExercise1,
        randomTricepExercise2,
        randomTricepExercise3,

        //currentWorkout,
        //generalPushWorkout: quotes[0]
    },
    methods: {
        generateRandomChestExercise: function () {
            //Method used to populate list in Push section. Pro's: List populates w/ a random exercise. Cons: List can have duplicates, need to pull from an array and after each pull, take an item away from the array

            let randomIndexForChestExercise1 = Math.floor(Math.random() * arrayOfChestExercises.length);
            let randomIndexForChestExercise2 = Math.floor(Math.random() * arrayOfChestExercises.length);
            let randomIndexForChestExercise3 = Math.floor(Math.random() * arrayOfChestExercises.length);

            let randomIndexForTricepExercise1 = Math.floor(Math.random() * arrayOfTricepExercises.length);
            let randomIndexForTricepExercise2 = Math.floor(Math.random() * arrayOfTricepExercises.length);
            let randomIndexForTricepExercise3 = Math.floor(Math.random() * arrayOfTricepExercises.length);

            this.randomChestExercise1 = arrayOfChestExercises[randomIndexForChestExercise1];
            this.randomChestExercise2 = arrayOfChestExercises[randomIndexForChestExercise2];
            this.randomChestExercise3 = arrayOfChestExercises[randomIndexForChestExercise3];

            this.randomTricepExercise1 = arrayOfTricepExercises[randomIndexForTricepExercise1];
            this.randomTricepExercise2 = arrayOfTricepExercises[randomIndexForTricepExercise2];
            this.randomTricepExercise3 = arrayOfTricepExercises[randomIndexForTricepExercise3];

        }
    }
})

// let copyOfArrayOfChestExercises = arrayOfChestExercises.map();
// console.log(copyOfArrayOfChestExercises);



// arrayOfChestExercises.forEach(element => {
//     let rand
//     console.log(element);
// });


// for (let exercise of pushExercises.chest) {
//     console.log(exercise);
// }

//let nameOfFirstChestExercise = pushExercises.chest[0].exerciseName;


// console.log(pushExercises.chest[0].exerciseName);


/*Method below generates js object of each exercise inside of the Chest musclegroup.
Need to further develop this to capture a random object and return it's name, sets, etc to front-end
*/


//CoffeeHouse Coders, Wednesdays @ 7 Once a month.
//Ypsi Software Development Rubber Duck Logo

