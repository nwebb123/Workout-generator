new Vue({
    el: '#app',
    data: {
       
        title: 'PPL Workout Generator',
        displayPushExercisesTable: false,
        nameOfFirstChestExercise: pushExercises.chest[0].exerciseName, 
        randomChestExercise1,
        randomChestExercise2,
        randomChestExercise3,
        randomChestExercise4,
        randomChestExercise5,
        //currentWorkout,
        //generalPushWorkout: quotes[0]
    },
    methods: {
        generateRandomChestExercise: function() {
            
            

            let randomIndexForChestExercise1 = Math.floor(Math.random() * arrayOfChestExercises.length);
            let randomIndexForChestExercise2 = Math.floor(Math.random() * arrayOfChestExercises.length);
            let randomIndexForChestExercise3 = Math.floor(Math.random() * arrayOfChestExercises.length);
            let randomIndexForChestExercise4 = Math.floor(Math.random() * arrayOfChestExercises.length);
            let randomIndexForChestExercise5 = Math.floor(Math.random() * arrayOfChestExercises.length);
            
            this.randomChestExercise1 = arrayOfChestExercises[randomIndexForChestExercise1];
            this.randomChestExercise2 = arrayOfChestExercises[randomIndexForChestExercise2];
            this.randomChestExercise3 = arrayOfChestExercises[randomIndexForChestExercise3];
            this.randomChestExercise4 = arrayOfChestExercises[randomIndexForChestExercise4];
            this.randomChestExercise5 = arrayOfChestExercises[randomIndexForChestExercise5];
        }
    }
})

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

