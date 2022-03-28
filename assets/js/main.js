
//"Main" Vue app, need to break this down into components
new Vue({
    el: '#app',
    data: {

        title: 'PPL Workout Generator',

        //Push Section
        displayPushExercisesTable: false,

        randomChestExercise1,
        randomChestExercise2,
        randomChestExercise3,

        randomTricepExercise1,
        randomTricepExercise2,
        randomTricepExercise3,

        //Pull Section
        displayPullExercisesTable: false,

        randomBackExercise1,
        randomBackExercise2,
        randomBackExercise3,

        randomBicepsExercise1,
        randomBicepsExercise2,
        randomBicepsExercise3,


        //Legs Section
        displayLegsExercisesTable: false,

        randomLegExercise1,
        randomLegExercise2,
        randomLegExercise3,
        randomLegExercise4,
        randomLegExercise5,

        //Core
        displayCoreExercisesTable: false,



        //Cardio
        displayCardioExercisesTable: false,


    },
    methods: {
        generatePushDayWorkout: function () {
            const shuffledArrayOfChestExercises = _.shuffle(pushExercises.chest);
            const shuffledArrayOfTricepExercises = _.shuffle(pushExercises.triceps);

            this.randomChestExercise1 = shuffledArrayOfChestExercises[0].exerciseName;
            this.randomChestExercise2 = shuffledArrayOfChestExercises[1].exerciseName;
            this.randomChestExercise3 = shuffledArrayOfChestExercises[2].exerciseName;

            this.randomTricepExercise1 = shuffledArrayOfTricepExercises[0].exerciseName;
            this.randomTricepExercise2 = shuffledArrayOfTricepExercises[1].exerciseName;
            this.randomTricepExercise3 = shuffledArrayOfTricepExercises[2].exerciseName;

        },
        generatePullDayWorkout: function () {
            const shuffledArrayOfBackExercises = _.shuffle(pullExercises.back);
            const shuffledArrayOfBicepsExercises = _.shuffle(pullExercises.biceps);

            this.randomBackExercise1 = shuffledArrayOfBackExercises[0].exerciseName;
            this.randomBackExercise2 = shuffledArrayOfBackExercises[1].exerciseName;
            this.randomBackExercise3 = shuffledArrayOfBackExercises[2].exerciseName;

            this.randomBicepsExercise1 = shuffledArrayOfBicepsExercises[0].exerciseName;
            this.randomBicepsExercise2 = shuffledArrayOfBicepsExercises[1].exerciseName;
            this.randomBicepsExercise3 = shuffledArrayOfBicepsExercises[2].exerciseName;

        },

        generateLegDayWorkout: function () {
            const shuffledArrayOfLegExercises = _.shuffle(legExercises.legs);

            this.randomLegExercise1 = shuffledArrayOfLegExercises[0].exerciseName;
            this.randomLegExercise2 = shuffledArrayOfLegExercises[1].exerciseName;
            this.randomLegExercise3 = shuffledArrayOfLegExercises[2].exerciseName;
            this.randomLegExercise4 = shuffledArrayOfLegExercises[3].exerciseName;
            this.randomLegExercise5 = shuffledArrayOfLegExercises[4].exerciseName;

        },
    }
})


//Accordion functionality
var acc = document.getElementsByClassName("custom-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




// arrayOfChestExercises.forEach(element => {
//     let rand
//     console.log(element);
// });


// for (let exercise of pushExercises.chest) {
//     console.log(exercise);
// }








//CoffeeHouse Coders, Wednesdays @ 7 Once a month.
//Ypsi Software Development Rubber Duck Logo