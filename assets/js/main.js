new Vue({
    el: '#app',
    data: {
        pushExercises,
        pushWorkout,
        flatDBChestPress,

        //currentWorkout,
        //generalPushWorkout: quotes[0]
    },
    methods: {
         testingCallingDataFromPushJS: function() {
             this.flatDBChestPress = pushExercises.chest[0].exerciseName;

            //  const randomIndexOfPushExercises = 
            //  Math.floor(Math.random() * pushExercises.chest.exerciseName);
            //  console.log(randomIndexOfPushExercises);

            //  this.currentWorkout = pushExercises[randomIndexOfQuotes];
        }
    }
})