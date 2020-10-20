import Exerciselist from './components/exercise-list.component'
import EditExercise from './components/edit-exercise.component'
import CreateExercise from './components/create-exercise.component'
import CreateUser from './components/create-user.component'

export default [
    {
        path:'/',
        component:Exerciselist,
        exact:true
    },
    {
        path:'/edit/:id',
        component:EditExercise
    },{
        path:'/create',
        component:CreateExercise
    },
    {
        path:'/create',
        component:CreateUser
    }

]