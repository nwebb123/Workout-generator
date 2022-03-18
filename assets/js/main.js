new Vue({
    el: '#app',
    data: {
       
        title: 'PPL Workout Generator',
        displayPushExercisesTable: false,
        

        //currentWorkout,
        //generalPushWorkout: quotes[0]
    },
    methods: {
        //  testingCallingDataFromPushJS: function() {
        //      this.flatDBChestPress = pushExercises.chest[0].exerciseName;                        
        // }, 
            
    }
})



// console.log(pushExercises.chest[0].exerciseName);


/*Method below generates js object of each exercise inside of the Chest musclegroup. 
Need to further develop this to capture a random object and return it's name, sets, etc to front-end
*/

 for (let exercise of pushExercises.chest) {
     console.log(exercise);
 }





