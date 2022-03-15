const pushExercises = {
    chest: [
        //Chest Exercises
        {
            exerciseName: 'Flat DB Chest Press',
            sets: '3-4',
            reps: 8-12,
            compoundMovement: true,
            calisthenicMovement: false,
        },
        {
            exerciseName: 'Push ups',
            sets: '3-5',
            reps: 8-12,
            compoundMovement: true,
            calisthenicMovement: true,
        },
        {
            exerciseName: 'Machine Pec Fly',
            sets: '3-5',
            reps: 8-12,
            compoundMovement: true,
            calisthenicMovement: false,
        }
    ],
    
    triceps: [
        // Tricep Exercises
        {
            exerciseName: 'Dips',
            sets: '3-4',
            reps: 6-12,
            compoundMovement: true,
            calisthenicMovement: true,
        },
        {
            exerciseName: 'Cable Pull-down',
            sets: '3-4',
            reps: 8-12,
            compoundMovement: false,
            calisthenicMovement: false,
        },
        {
            exerciseName: 'Machine Tricep Push-down',
            sets: '3-4',
            reps: 8-12,
            compoundMovement: false,
            calisthenicMovement: false,
        }
    ]
}

let pushWorkout = '';
let flatDBChestPress = 'Click above to see';
console.log(pushExercises.chest[0].exerciseName);

